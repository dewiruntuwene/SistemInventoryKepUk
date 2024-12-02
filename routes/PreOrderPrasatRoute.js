import express from "express";
import {
    createPreOrderKeranjang,
    getPreOrderKeranjang,
    createDataPreOrderPrasat,
    getDataPreOrderPrasat
} from "../controllers/PreOrderPrasatController.js";
import { PrismaClient } from "@prisma/client";
import multer, { diskStorage } from "multer";
import { verifyToken } from "../middleware/VerifyToken.js";

const prisma = new PrismaClient();

const router = express.Router();

router.post("/preorderkeranjang", verifyToken, createPreOrderKeranjang);
router.get("/preorderkeranjang", verifyToken, getPreOrderKeranjang);
router.post("/preorder", verifyToken, createDataPreOrderPrasat);
router.get("/preorder", verifyToken, getDataPreOrderPrasat);



export default router;
