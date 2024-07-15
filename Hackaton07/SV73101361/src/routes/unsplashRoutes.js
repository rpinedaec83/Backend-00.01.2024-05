import express from 'express';
import { getPhotos } from '../controllers/unsplashController.js';

const router = express.Router();

router.get('/photos', getPhotos);

export default router;
