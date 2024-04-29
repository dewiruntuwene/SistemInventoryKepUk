import express from "express";
import {createDataPeminjamBarang, getDataPeminjamBarang, deletetDataPeminjamBarang, createKeranjang, getKeranjang, deleteKeranjang, updateKeranjang, getDataPeminjamBarangHistory} from "../controllers/DataPeminjamBarangController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.post('/peminjamBarang/',createDataPeminjamBarang);
router.post('/keranjang',createKeranjang);
router.get('/peminjamBarang',getDataPeminjamBarang);
router.get('/peminjamBarangHistory',getDataPeminjamBarangHistory);
router.get('/keranjang',getKeranjang);
router.patch('/keranjang/:id_keranjang',updateKeranjang);
router.delete('/peminjamBarang/:id_peminjam',deletetDataPeminjamBarang);
router.delete('/keranjang/:id_keranjang',deleteKeranjang);


export default router;
