import  Express  from "express";
const router = Express.Router();
import { getUsers,Register,Login,Logout} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

router.get('/users',verifyToken,getUsers);
router.post('/register',Register);
router.post('/login',Login);
router.delete('/logout',verifyToken,Logout);


export default router;