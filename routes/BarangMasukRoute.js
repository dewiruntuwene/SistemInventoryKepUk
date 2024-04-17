import express from "express";
import {getBarangMasuk, getBarangMasukById, createBarangMasuk, updateBarangMasuk, deleteBarangMasuk } from "../controllers/BarangMasukController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/barangMasuk',getBarangMasuk);
router.get('/barangMasuk/:id_transaksi_barang',getBarangMasukById);
router.post('/barangMasuk',createBarangMasuk);
router.patch('/barangMasuk/:id_transaksi_barang',updateBarangMasuk);
router.delete('/barangMasuk/:id_transaksi_barang',deleteBarangMasuk);

export default router;
