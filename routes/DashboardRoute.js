import express from "express";
import {dashboardNotif} from "../controllers/Dashboard.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/dashboardNotif',dashboardNotif);

export default router;
