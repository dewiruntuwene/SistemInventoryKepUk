import express from "express";
import {getHistory} from "../controllers/HistoryController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/history',getHistory);


export default router;
