import express from "express";
import {updateHistory} from "../controllers/HistoryController.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/history',updateHistory);


export default router;
