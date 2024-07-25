import express from 'express';
import { getTopCocktails } from '../controllers/cocktailController.js';

const router = express.Router();

router.get('/top', getTopCocktails);

export default router;
