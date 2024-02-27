import express from "express";
import {createDataPeminjamBarang, getDataPeminjamBarang, deletetDataPeminjamBarang} from "../controllers/DataPeminjamBarangController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.post('/peminjamBarang',createDataPeminjamBarang);
router.get('/peminjamBarang',getDataPeminjamBarang);
router.delete('/peminjamBarang/:id_peminjam',deletetDataPeminjamBarang);


export default router;
