import  Express  from "express";
const router = Express.Router();
import { Register, Login, getUsers, Logout } from "../controllers/UserController.js";


router.get('/users',getUsers);
router.post('/login',Login);
router.post('/register',Register);
router.delete('/register',Logout);



export default router;