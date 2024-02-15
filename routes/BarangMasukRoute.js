import express from "express";
import {getBarangMasuk, getBarangMasukById, createBarangMasuk, updateBarangMasuk, deleteBarangMasuk} from "../controllers/BarangMasukController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/barangMasuk',getBarangMasuk);
router.get('/barangMasuk/:id_barangMasuk',getBarangMasukById);
router.post('/barangMasuk',createBarangMasuk);
router.patch('/barangMasuk/:id_barangMasuk',updateBarangMasuk);
router.delete('/barangMasuk/:id_barangMasuk',deleteBarangMasuk);

export default router;
