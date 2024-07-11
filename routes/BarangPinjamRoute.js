import express from "express";
import { PrismaClient } from "@prisma/client";
import {
  getBarangPinjam,
  getBarangPinjamById,
  createBarangPinjam,
  updateBarangPinjam,
  deleteBarangPinjam,
} from "../controllers/BarangPinjamController.js";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/peminjam", getBarangPinjam);
router.get("/peminjam/:id_transaksi_barang", getBarangPinjamById);
router.post("/peminjam", createBarangPinjam);
router.patch("/peminjam/:id_transaksi_barang", updateBarangPinjam);
router.delete("/peminjam/:id_transaksi_barang", deleteBarangPinjam);

export default router;
