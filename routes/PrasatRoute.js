import express from "express";
import {
  createPrasat,
  updatePrasat
} from "../controllers/PrasatController.js";
import { PrismaClient } from "@prisma/client";
import multer, { diskStorage } from "multer";
import { verifyToken } from "../middleware/VerifyToken.js";

const prisma = new PrismaClient();

const router = express.Router();

router.post("/prasat", createPrasat);
router.post("/prasat", createPrasat);
router.put("/prasat/:id_prasat", updatePrasat);


export default router;
