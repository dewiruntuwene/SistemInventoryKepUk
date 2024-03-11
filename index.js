import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DataPeminjamanRoute from "./routes/DataPeminjamanRoute.js";
import BarangRoute from "./routes/BarangRoute.js";
import UserRoute from "./routes/UserRoute.js";
import BarangMasukRoute from "./routes/BarangMasukRoute.js";
import BarangKeluarRoute from "./routes/BarangKeluarRoute.js";
import DashboardRoute from "./routes/DashboardRoute.js";
import HistoryRoute from "./routes/HistoryRoute.js";
import DataPeminjamBarangRoute from "./routes/DataPeminjamBarangRoute.js";
import fs from 'fs/promises'; 
import path from "path";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();
const app = express();
// Mendapatkan direktori kerja saat ini
const __filename = fileURLToPath(import.meta.url);
app.use('/uploads', express.static('uploads'));
app.use(cors({origin:'*'}));
app.use(express.json());
app.use(DataPeminjamanRoute);
app.use(BarangRoute);
app.use(UserRoute);
app.use(BarangMasukRoute);
app.use(BarangKeluarRoute);
app.use(DashboardRoute);
app.use(HistoryRoute);
app.use(DataPeminjamBarangRoute);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  next();
});


app.use((req, res, next) => {
    req.refresh_token = req.body.refreshToken; // Adjust based on how you send the refresh token
    next();
  });


export const JWT_SECRET = process.env.JWT_SECRET
export const PORT = process.env.PORT



app.listen(PORT, ()=> console.log('Server up and running'));