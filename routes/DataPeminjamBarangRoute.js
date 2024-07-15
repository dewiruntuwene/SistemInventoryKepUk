import express from "express";
import {
  createDataOrderBarang,
  getDataOrderBarang,
  deletetDataOrderBarang,
  createKeranjang,
  getKeranjang,
  deleteKeranjang,
  updateKeranjang,
  barangKeluarOrder,
  barangPinjam,
  getDataOrderBarangAdmin
} from "../controllers/DataPeminjamBarangController.js";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/VerifyToken.js";

const prisma = new PrismaClient();

const router = express.Router();

router.post("/orderBarang/", verifyToken, createDataOrderBarang);
router.post("/keranjang", verifyToken, createKeranjang);
router.get("/orderBarang", verifyToken, getDataOrderBarang);
router.get("/dataOrderBarang", getDataOrderBarangAdmin);
router.get("/keranjang", verifyToken, getKeranjang);
router.patch("/keranjang/:id_keranjang", updateKeranjang);
router.delete("/orderBarang/:id_peminjam", deletetDataOrderBarang);
router.delete("/keranjang/:id_keranjang", deleteKeranjang);
router.patch("/orderBarang/:id_peminjam", barangKeluarOrder);
router.patch("/pinjamBarang/:id_peminjam", barangPinjam);

export default router;
