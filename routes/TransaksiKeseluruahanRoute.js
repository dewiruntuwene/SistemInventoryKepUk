import express from "express";
import {
    getUserTransactions,
    getSisaBarang,
    getUserTransactionsAll
} from "../controllers/TransaksiKeseluruahanController.js";
import { PrismaClient } from "@prisma/client";
import multer, { diskStorage } from "multer";
import { verifyToken } from "../middleware/VerifyToken.js";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/transaction/", verifyToken, getUserTransactions);
router.get("/alltransaction/", getUserTransactionsAll);
router.get("/sisabarang/", verifyToken, getSisaBarang);



export default router;
