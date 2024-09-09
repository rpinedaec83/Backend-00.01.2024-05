import { Router } from 'express';
import { addLocation } from '../controller/index.js';

const router = Router();

router.post('/', addLocation);

export default router;
