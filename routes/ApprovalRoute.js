import express from "express";
import {
  approvePreOrder,
} from "../controllers/ApprovalController.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/barangKeluar", approvePreOrder);

export default router;
