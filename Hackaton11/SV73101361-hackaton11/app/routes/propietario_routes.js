const express = require('express');
const router = express.Router();
const PropietarioController = require('../controllers/PropietarioController');

router.get('/', PropietarioController.getAllPropietarios);
router.get('/:id', PropietarioController.getPropietarioById);
router.post('/', PropietarioController.createPropietario);
router.put('/:id', PropietarioController.updatePropietario);
router.delete('/:id', PropietarioController.deletePropietario); // Cambio de POST a DELETE

module.exports = router;
