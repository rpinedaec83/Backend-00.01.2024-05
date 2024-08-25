import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleWare } from '../middlewares/authMiddleware';

const router = Router();
const userController = new UserController();

router.get('/:id', authMiddleWare, userController.getUserById.bind(userController));
router.put('/:id', authMiddleWare, userController.updateUser.bind(userController));
router.delete('/:id', authMiddleWare, userController.deleteUser.bind(userController));

export default router;
