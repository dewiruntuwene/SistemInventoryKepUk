import express from "express";
import { approvedDataBarangPreOrderKaprodi, 
    approvedDataBarangPreOrderdekan, 
    approvedDataBarangPreOrderWarek1,
    approvedDataBarangPreOrderWarek2,
    approvedDataBarangPreOrderPm,
    approvedDataBarangPreOrderAdmin,
    updateStatusDekan,
    updateStatusWarek1,
    updateStatusWarek2,
    updateStatusPm,
    updateStatusAdmin,
    approvedDataBarangPreOrder,
    updateSudahDiBeli,
    updateSudahDiTerima } from "../controllers/DataBarangPreOrderController.js";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/VerifyToken.js";

const prisma = new PrismaClient();

const router = express.Router();

router.patch("/databarangpreorderdekan/:id_container", verifyToken, updateStatusDekan);
router.patch("/databarangpreorderwarek1/:id_container", verifyToken, updateStatusWarek1);
router.patch("/databarangpreorderwarek2/:id_container", verifyToken, updateStatusWarek2);
router.patch("/databarangpreorderpm/:id_container", verifyToken, updateStatusPm);
router.patch("/databarangpreorderadmin/:id_container", verifyToken, updateStatusAdmin);

router.get("/barangpreoderapproved", verifyToken, approvedDataBarangPreOrder);
router.get("/barangpreoderapproveddekan", verifyToken, approvedDataBarangPreOrderKaprodi);
router.get("/barangpreoderapprovedwarek1", verifyToken, approvedDataBarangPreOrderdekan);
router.get("/barangpreoderapprovedwarek2", verifyToken, approvedDataBarangPreOrderWarek1);
router.get("/barangpreoderapprovedpm", verifyToken, approvedDataBarangPreOrderWarek2);
router.get("/barangpreoderapprovedadmin", verifyToken, approvedDataBarangPreOrderPm);

router.patch("/barangsudahdibeli/:id_barang_preorder", verifyToken, updateSudahDiBeli);
router.patch("/barangsudahditerima/:id_barang_preorder", verifyToken, updateSudahDiTerima);


export default router;
