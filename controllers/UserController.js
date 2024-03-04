import { PrismaClient } from "@prisma/client";
import bcrypt  from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

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

export const verifyToken = async (req, res) => {
  const {token} = req.query
  jwt.verify(token, 'secret key', (err)=>{
    if (err) {
      if(err.name=='TokenExpiredError'){
        return res.status(401).json({
          message:'Token Expired'
        })
      }
      return res.status(500).json
      ({message: 'Failed'})
    }
    return res.json({token})
  })
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

   
    const email = user.email;

    const token = jwt.sign({email}, 'secret key',
    {expiresIn:'10s'})

   
    return res.json({token:token})

}

export const Logout = async (req, res) => {
  try {
    const refreshToken = req.refresh_token;

    if (!refreshToken) {
      return res.sendStatus(204); // No refresh token provided, return success (204 No Content)
    }

    const user = await prisma.users.findOne({
      where: {
        refresh_token: refreshToken
      }   
    });
    
    if (!user) {
      return res.sendStatus(204); // No user found with the provided refresh token, return success
    }

    const userId = user.id;

    await prisma.users.update({ refresh_token: null }, {
      where: {
        id: userId
      }
    });

    return res.sendStatus(20); // Logout successful, return success (204 No Content)
  } catch (error) {
    console.error('Error during logout:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


