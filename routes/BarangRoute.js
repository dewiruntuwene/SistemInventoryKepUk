import express from "express";
import {getBarang, getBarangById, createBarang, updateBarang, deleteBarang} from "../controllers/BarangController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/barang',getBarang);
router.get('/barang/:id_barang',getBarangById);
router.post('/barang',createBarang);
router.patch('/barang/:id_barang',updateBarang);
router.delete('/barang/:id_barang',deleteBarang);

export default router;
