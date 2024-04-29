import jwt from "jsonwebtoken";

// Function to generate JWT token with user role included
export function generateToken(user) {
    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role // Include the user's role in the payload
    };
  
    // Sign the JWT token with a secret key
    const token = jwt.sign(payload,{ expiresIn: '1h' });
    return token;
}

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader &&  authHeader.split(' ')[1];
    if(token==null) return res.status(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, decoded)=>{
        if(err) return res.status(403);
        
        req.email = decoded.email;
        req.role = decoded.role
        next()
    })
}


