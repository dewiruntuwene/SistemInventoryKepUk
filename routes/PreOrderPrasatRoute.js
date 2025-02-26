import express from "express";
import {
    createPreOrderKeranjang,
    getPreOrderKeranjang,
    createDataPreOrderPrasat,
    getDataPreOrderPrasat,
    updateApproveKaprodiPreOrder,
    updateRejectedKaprodiPreOrder,
    getAllDataPreOrderPrasat,
    updateJumlahBarangPreOrderPrasat,
    getAllPreOrderDetailBarang,
    getPreOrderDetailsByPrasat,
    deletePreOrderKeranjang,
    deleteDataPreOrderPrasat
} from "../controllers/PreOrderPrasatController.js";
import { PrismaClient } from "@prisma/client";
import multer, { diskStorage } from "multer";
import { verifyToken } from "../middleware/VerifyToken.js";

const prisma = new PrismaClient();

const router = express.Router();

router.post("/preorderkeranjang", verifyToken, createPreOrderKeranjang);
router.delete("/preorderkeranjang/:id_preorder_keranjang", deletePreOrderKeranjang);
router.get("/preorderkeranjang", verifyToken, getPreOrderKeranjang);
router.post("/preorder", verifyToken, createDataPreOrderPrasat);
router.get("/preorder", verifyToken, getDataPreOrderPrasat);
router.delete("/preorder/:id_pre_order_paket", deleteDataPreOrderPrasat);
router.get("/allpreorder", verifyToken, getAllDataPreOrderPrasat);
router.patch("/preorder/:id_pre_order_paket", verifyToken, updateApproveKaprodiPreOrder);
router.patch("/cancelPreorder/:id_pre_order_paket", verifyToken, updateRejectedKaprodiPreOrder);
router.patch("/updateJumlahBarang/:id_preorder_detail", verifyToken, updateJumlahBarangPreOrderPrasat);
router.post("/preorderdetailbarang", getAllPreOrderDetailBarang);
router.get("/preorderdetailbyprasat/", verifyToken, getPreOrderDetailsByPrasat);


export default router;
