import express from 'express';
import { getMarsPhotos } from '../controllers/marsController.js';

const router = express.Router();

router.get('/photos', getMarsPhotos);

export default router;
