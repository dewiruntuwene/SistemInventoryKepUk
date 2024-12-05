import express from "express";
import {
    getUserTransactions,
} from "../controllers/TransaksiKeseluruahanController.js";
import { PrismaClient } from "@prisma/client";
import multer, { diskStorage } from "multer";
import { verifyToken } from "../middleware/VerifyToken.js";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/transaction/:user_id", getUserTransactions);



export default router;
