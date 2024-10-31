import express from 'express';
import  { getBook } from "../controller/bookcont.js";

const router = express.Router()
router.get("/", getBook);
export default router;