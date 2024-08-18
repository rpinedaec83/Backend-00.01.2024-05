const express = require('express');
const router = express.Router();
const SexoController = require('../controllers/SexoController');

router.get('/', SexoController.getAllSexos);
router.get('/:id', SexoController.getSexoById);
router.post('/', SexoController.createSexo);
router.put('/:id', SexoController.updateSexo);
router.delete('/:id', SexoController.deleteSexo);

module.exports = router;
