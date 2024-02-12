import express from "express";
import {getDataPeminjam, getDataPeminjamById, createDataPeminjam, updateDataPeminjam, deleteDataPeminjam} from "../controllers/DataPeminjamanController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/peminjam',getDataPeminjam);
router.get('/peminjam/:id_peminjam',getDataPeminjamById);
router.post('/peminjam',createDataPeminjam);
router.patch('/peminjam/:id_peminjam',updateDataPeminjam);
router.delete('/perminjam/:id_peminjam',deleteDataPeminjam);

export default router;
