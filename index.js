import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import BarangRoute from "./routes/BarangRoute.js";
import UserRoute from "./routes/UserRoute.js";
import BarangMasukRoute from "./routes/BarangMasukRoute.js";
import BarangKeluarRoute from "./routes/BarangKeluarRoute.js";
import DashboardRoute from "./routes/DashboardRoute.js";
import HistoryRoute from "./routes/HistoryRoute.js";
import DataPeminjamBarangRoute from "./routes/DataPeminjamBarangRoute.js";
import BarangPinjamRoute from "./routes/BarangPinjamRoute.js";
import PrasatRoute from "./routes/PrasatRoute.js";
import PreOrderPrasatRoute from "./routes/PreOrderPrasatRoute.js";
import TransaksiKeseluruahanRoute from "./routes/TransaksiKeseluruahanRoute.js";
import ApprovalRoute from "./routes/ApprovalRoute.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import bodyParser from "body-parser";
import session from "express-session";
import memorystore from "memorystore";

const prisma = new PrismaClient();
const MemoryStore = memorystore(session);

dotenv.config();
const app = express();

// Setup session middleware
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    store: new MemoryStore({
      checkPeriod: 86400000, // 24 hours
    }),
  }),
);

// const { DB_HOST, DB_USER, DB_PASS, DB_PORT, DB_NAME } = process.env;
// process.env.DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Mendapatkan direktori kerja saat ini
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Melayani file statis dari folder uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Pastikan rute ini tidak memerlukan autentikasi
app.get("/uploads/:filename", (req, res) => {
  const filePath = path.join(__dirname, "uploads", req.params.filename);
  res.sendFile(filePath);
});
// console.log(app.use(cors({ origin: "*", 
//   credentials: true
//  })));
// Izinkan permintaan dari asal yang sesuai
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(BarangRoute);
app.use(UserRoute);
app.use(BarangMasukRoute);
app.use(BarangKeluarRoute);
app.use(DashboardRoute);
app.use(HistoryRoute);
app.use(DataPeminjamBarangRoute);
app.use(BarangPinjamRoute);
app.use(PrasatRoute);
app.use(PreOrderPrasatRoute);
app.use(TransaksiKeseluruahanRoute);
app.use(ApprovalRoute);
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://inventoryfkep-46301.portmap.io:46301");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use((req, res, next) => {
  req.refresh_token = req.body.refreshToken; // Adjust based on how you send the refresh token
  next();
});

//console.log("DATABASE_URL:", process.env.DATABASE_URL);

export const JWT_SECRET = process.env.JWT_SECRET;
export const PORT = process.env.PORT;

export default app;

app.listen(PORT, () => console.log(`Server up and running ${PORT}`));
