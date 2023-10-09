import express, { Router } from 'express'
import signup from "../controllers/signup.js";

const router = express.Router()

router.post("/signup",signup)

export default router