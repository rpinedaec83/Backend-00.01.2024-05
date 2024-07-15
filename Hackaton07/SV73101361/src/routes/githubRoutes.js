import express from 'express';
import { getUser } from '../controllers/githubController.js';

const router = express.Router();

router.get('/:username', getUser);

export default router;
