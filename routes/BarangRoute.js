import express from "express";
import {
  getBarang,
  getBarangById,
  createBarang,
  updateBarang,
  deleteBarang,
} from "../controllers/BarangController.js";
import { PrismaClient } from "@prisma/client";
import multer, { diskStorage } from "multer";

const prisma = new PrismaClient();

const router = express.Router();
const upload = multer({
  storage: diskStorage({
    destination: "./uploads",
    filename: (_, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`;
      return cb(null, filename);
    },
  }),
});

router.get("/barang", getBarang);
router.get("/barang/:id_barang", getBarangById);
router.post("/barang", upload.single("gambar_barang"), createBarang);
router.patch("/barang/:id_barang", updateBarang);
router.delete("/barang/:id_barang", deleteBarang);

export default router;
