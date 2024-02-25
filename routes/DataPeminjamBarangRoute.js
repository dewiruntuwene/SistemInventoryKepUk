import express from "express";
import {createDataPeminjamBarang} from "../controllers/DataPeminjamBarangController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/peminjamBarang',createDataPeminjamBarang);


export default router;
