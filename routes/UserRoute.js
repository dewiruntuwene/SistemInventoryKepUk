import  Express  from "express";
const router = Express.Router();
import { Register, Login, getUsers, Logout, getLoginGoogle, getLoginCallbackGoogle } from "../controllers/UserController.js";


router.get('/users',getUsers);
router.post('/login',Login);
router.post('/register',Register);
router.delete('/register',Logout);
router.get('/auth/google', getLoginGoogle)
router.get('/auth/google/callback', getLoginCallbackGoogle)



export default router;