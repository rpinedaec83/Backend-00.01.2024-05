const express = require('express');
const router = express.Router();
const ordenesController = require('../controllers/ordenesController');


router.post('/', ordenesController.createOrdenes);
router.get('/', ordenesController.getOrdenes);
router.get('/:id', ordenesController.getOrdenesById);
router.put('/:id', ordenesController.updateOrdenes);
router.delete('/:id', ordenesController.deleteOrdenes);

module.exports = router;
