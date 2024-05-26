import { PrismaClient } from "@prisma/client";
import bcrypt  from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
import { google } from "googleapis";
import { oauth2 } from "googleapis/build/src/apis/oauth2/index.js";
import { where } from "sequelize";


const prisma = new PrismaClient();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:5000/auth/google/callback'
)

const scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
]

const authorizationUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
  include_granted_scopes: true,
})


// GOOGLE Login
export const getLoginGoogle = async(req,res) => {
  res.redirect(authorizationUrl);   
} 

// GOOGLE callback login
export const getLoginCallbackGoogle = async(req, res) => {
  const {code} = req.query
  const {tokens} = await oauth2Client.getToken(code);

  oauth2Client.setCredentials(tokens);
  const oauth2 = google.oauth2({
    auth: oauth2Client,
    version: 'v2'
  })
  
  const {data} = await oauth2.userinfo.get();

  if(!data.email || !data.name ){
    return res.json({
      data: data,
    })
  }

  let user = await prisma.Users.findUnique({
    where: {
      email: data.email 
    }
  })

  if(!user){
    user = await prisma.Users.create({
      data: {
        username: data.name,
        email: data.email 
      }
    })
  }

  // Save session asynchronously
  await new Promise((resolve) => {
    req.session.save(() => {
      const payload = {
        userId: user?.id,
        username: user?.name,
        email: user?.email,
        role: user?.role, // Include the user's role in the payload
      };

      const secret = process.env.ACCECS_TOKEN_SECRET;

      // Sign the JWT token with a secret key
      const token = jwt.sign(payload, secret, { expiresIn: '1h' });


      return res.redirect(`http://localhost:5173/userCatalog?token=${token}`)
    
      

      // return res.json({  
      //   data: {
      //     userId: user.id,
      //     username: user.name,
      //   },
      //   token: token
      // })
    });
  }).then((data) => {
    return res.json(data);
  });
}

export const getUsers = async(req,res)=>{
  try {
      const Users = await prisma.users.findMany({
        select: {
          user_id: true,
          username: true,
          password: true,
          email: true
        }
      });
      res.json(Users);
  } catch (error) {
      console.log(error)
  }
}


export const Register = async (req,res) => {

    const {email, password, username} = req.body;

    let user = await prisma.users.findUnique({where: {email}})
    if (user) {
      return res.status(400).json({ msg: 'Email sudah terdaftar' });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

     
    user = await prisma.users.create({
      data: {
        username,
        email, 
        password: hashPassword,
      }
    })
    return res.json({msg: 'Registrasi Berhasil' })    
}



export const Login = async (req, res) => {
    const user = await prisma.users.findUnique({
      where:{
          email: req.body.email
      }
    });

    if (!user) {
      return res.status(404).json({msg: "Email tidak ditemukan"});
    }

    const check = await bcrypt.compare(req.body.password, user.password);
    if (!check) {
        return res.status(400).json({msg: "Password salah"});
    }

    const userId = user.user_id;
    const name = user.username;
    const email = user.email;
    const role = user.role;

    const token =  jwt.sign({sub: userId, name, email, role}, process.env.ACCECS_TOKEN_SECRET, {
      expiresIn: '720h',
    });
    const refreshToken = jwt.sign({sub: userId, name, email, role}, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    });

    await prisma.users.update({ 
        where: {
            user_id: userId
        },
        data: {
          refresh_token: refreshToken
        }
    });

    return res.json({token})
}

export const Logout = async (req, res) => {
  try {
    const refreshToken = req.headers['authorization']?.split(' ')[1] || req.body.refresh_token;

    if (!refreshToken) {
      return res.status(204); // No refresh token provided, return success (204 No Content)
    }

    const userId = req.user.user_id;

    await prisma.users.update({
      where: {
        user_id: userId
      },
      data: {
        refresh_token: null
      }
    });

    return res.status(200).json({msg: "Berhasil Logout"}); // Logout successful, return success (204 No Content)
  } catch (error) {
    console.error('Error during logout:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


