import express from 'express';
import { getTopMovies, getMovieDetails } from '../controllers/movieController.js';

const router = express.Router();

router.get('/top', getTopMovies);
router.get('/:id', getMovieDetails);

export default router;
