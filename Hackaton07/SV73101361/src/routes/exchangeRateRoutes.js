import express from 'express';
import { getExchangeRate } from '../controllers/exchangeRateController.js';

const router = express.Router();

router.get('/', getExchangeRate);

export default router;
