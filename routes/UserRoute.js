import Express from "express";
const router = Express.Router();
import {
  Register,
  Login,
  getUsers,
  Logout,
  handleGoogleAuthPost,
  handleGoogleAuthGet,
} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

router.get("/users", verifyToken, getUsers);
router.post("/login", Login);
router.post("/register", Register);
router.delete("/logout", verifyToken, Logout);
// router.get('/auth/google', getLoginGoogle)
// router.get('/auth/google/callback', getLoginCallbackGoogle)

router.post("/auth/google", handleGoogleAuthPost);
router.get("/auth/google/callback", handleGoogleAuthGet);
router.post("/verify-token", verifyToken);

export default router;
