import express from "express";
import {getBarangKeluar, getBarangKeluarById, createBarangKeluar, updateBarangKeluar, deleteBarangKeluar } from "../controllers/BarangKeluarController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/barangKeluar',getBarangKeluar);
router.get('/barangKeluar/:id_transaksi_barang',getBarangKeluarById);
router.post('/barangKeluar',createBarangKeluar);
router.patch('/barangKeluar/:id_transaksi_barang',updateBarangKeluar);
router.delete('/barangKeluar/:id_transaksi_barang',deleteBarangKeluar);

export default router;
