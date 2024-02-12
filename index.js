import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DataPeminjamanRoute from "./routes/DataPeminjamanRoute.js";
import BarangRoute from "./routes/BarangRoute.js";
import UserRoute from "./routes/UserRoute.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(DataPeminjamanRoute);
app.use(BarangRoute);
app.use(UserRoute);

app.use((req, res, next) => {
    req.refresh_token = req.body.refreshToken; // Adjust based on how you send the refresh token
    next();
  });

app.listen(5000, ()=> console.log('Server up and running'));