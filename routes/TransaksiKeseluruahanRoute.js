import express from "express";
import {
    getUserTransactions,
    getSisaBarang
} from "../controllers/TransaksiKeseluruahanController.js";
import { PrismaClient } from "@prisma/client";
import multer, { diskStorage } from "multer";
import { verifyToken } from "../middleware/VerifyToken.js";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/transaction/", verifyToken, getUserTransactions);
router.get("/sisabarang/", verifyToken, getSisaBarang);



export default router;
