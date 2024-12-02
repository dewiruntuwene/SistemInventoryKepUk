import express from "express";
import {
  createPrasat,
  updatePrasat,
  getDataPrasat
} from "../controllers/PrasatController.js";
import { PrismaClient } from "@prisma/client";
import multer, { diskStorage } from "multer";
import { verifyToken } from "../middleware/VerifyToken.js";

const prisma = new PrismaClient();

const router = express.Router();

router.post("/prasat", verifyToken, createPrasat);
router.put("/prasat/:id_prasat", updatePrasat);
router.get("/prasat", getDataPrasat);


export default router;
