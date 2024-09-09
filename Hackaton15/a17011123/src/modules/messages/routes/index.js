import { Router } from 'express';
import { createMessage, getMessagesByPackage } from '../controller/index.js';

const router = Router();

router.post('/', createMessage);
router.get('/package/:packageId', getMessagesByPackage);

export default router;
