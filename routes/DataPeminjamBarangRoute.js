import express from "express";
import {createDataPeminjamBarang, getDataPeminjamBarang, deletetDataPeminjamBarang, createKeranjang, getKeranjang, deleteKeranjang} from "../controllers/DataPeminjamBarangController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.post('/peminjamBarang/',createDataPeminjamBarang);
router.post('/keranjang',createKeranjang);
router.get('/peminjamBarang',getDataPeminjamBarang);
router.get('/keranjang',getKeranjang);
router.delete('/peminjamBarang/:id_peminjam',deletetDataPeminjamBarang);
router.delete('/keranjang/:id_keranjang',deleteKeranjang);


export default router;
