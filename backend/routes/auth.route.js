import express, { Router } from 'express'
import signup, { signin } from "../controllers/signup.js";

const router = express.Router()

router.post("/signup",signup)
router.post("/signin",signin)

export default router