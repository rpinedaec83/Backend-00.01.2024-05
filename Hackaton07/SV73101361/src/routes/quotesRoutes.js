import express from 'express';
import { getQuotes } from '../controllers/quotesController.js';

const router = express.Router();

router.get('/quotes', getQuotes);

export default router;
