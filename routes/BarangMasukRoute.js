import express from "express";
import {getBarangMasuk, getBarangMasukById, createBarangMasuk, updateBarangMasuk, deleteBarangMasuk} from "../controllers/BarangMasukController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/barangMasuk',getBarangMasuk);
router.get('/barangMasuk/:id_barang_masuk',getBarangMasukById);
router.post('/barangMasuk',createBarangMasuk);
router.patch('/barangMasuk/:id_barang_masuk',updateBarangMasuk);
router.delete('/barangMasuk/:id_barang_masuk',deleteBarangMasuk);

export default router;
