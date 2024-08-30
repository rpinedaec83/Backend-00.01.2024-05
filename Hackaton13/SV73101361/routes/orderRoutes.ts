import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';
import { authMiddleWare } from '../middlewares/authMiddleware';

const router = Router();
const orderController = new OrderController();

router.post('/', authMiddleWare, orderController.createOrder.bind(orderController));
router.get('/:id', authMiddleWare, orderController.getOrderById.bind(orderController));
router.get('/', authMiddleWare, orderController.getAllOrders.bind(orderController));
router.put('/:id', authMiddleWare, orderController.updateOrder.bind(orderController));
router.delete('/:id', authMiddleWare, orderController.deleteOrder.bind(orderController));

export default router;
