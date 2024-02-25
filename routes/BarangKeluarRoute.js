import express from "express";
import {getBarangKeluar, getBarangKeluarById, createBarangKeluar, updateBarangKeluar, deleteBarangKeluar} from "../controllers/BarangKeluarController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/barangKeluar',getBarangKeluar);
router.get('/barangKeluar/:id_barang_keluar',getBarangKeluarById);
router.post('/barangKeluar',createBarangKeluar);
router.patch('/barangKeluar/:id_barang_keluar',updateBarangKeluar);
router.delete('/barangKeluar/:id_barang_keluar',deleteBarangKeluar);

export default router;
