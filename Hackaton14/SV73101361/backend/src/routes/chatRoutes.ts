import { Router } from 'express';
import { getMessages, createMessage, deleteMessages } from '../controllers/chatController';

const router = Router();

router.get('/messages', getMessages);
router.post('/messages', createMessage);
router.delete('/messages', deleteMessages);

export default router;
