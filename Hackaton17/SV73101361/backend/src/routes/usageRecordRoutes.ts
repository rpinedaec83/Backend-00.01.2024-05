import { Router } from 'express';
import { verifyToken } from '../middlewares/authMiddleware';
import {
  startUsage,
  endUsage,
  getUsageRecords,
} from '../controllers/usageRecordController';

const router = Router();

router.use(verifyToken);

router.post('/start', startUsage);
router.put('/end/:id', endUsage);
router.get('/', getUsageRecords);

export default router;
