import express from 'express'
import { signup } from './user.cont.js';
const router=express.Router()
router.post("/signup", signup)
export default router;