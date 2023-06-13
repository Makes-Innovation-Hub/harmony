import { generateToken } from "../controllers/generateTokenController";
import express from "express";

const router = express.Router();

router.post("/auth/token", generateToken);
