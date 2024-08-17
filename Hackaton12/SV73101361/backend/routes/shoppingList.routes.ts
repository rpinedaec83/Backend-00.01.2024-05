import { Router } from 'express';
import * as shoppingListController from '../controllers/shoppingList.controller';

const router = Router();

router.post('/crear-lista', shoppingListController.create);
router.get('/pendientes', shoppingListController.findAllPending);
router.get('/completados', shoppingListController.findAllCompleted);

export default router;
