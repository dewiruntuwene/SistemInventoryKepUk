import express from "express";
import {createDataPeminjamBarang, getDataPeminjamBarang, deletetDataPeminjamBarang, createKeranjang, getKeranjang, deleteKeranjang, updateKeranjang, barangKeluarPeminjam, barangPeminjam} from "../controllers/DataPeminjamBarangController.js"
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/VerifyToken.js";


const prisma = new PrismaClient();

const router = express.Router();

router.post('/peminjamBarang/',verifyToken,createDataPeminjamBarang);
router.post('/keranjang',verifyToken,createKeranjang);
router.get('/peminjamBarang',verifyToken,getDataPeminjamBarang);
router.get('/keranjang',verifyToken,getKeranjang);
router.patch('/keranjang/:id_keranjang',updateKeranjang);
router.delete('/peminjamBarang/:id_peminjam',deletetDataPeminjamBarang);
router.delete('/keranjang/:id_keranjang',deleteKeranjang);
router.patch('/peminjamBarang/:id_peminjam',barangKeluarPeminjam);
router.patch('/peminjam/:id_peminjam',barangPeminjam);

export default router;
