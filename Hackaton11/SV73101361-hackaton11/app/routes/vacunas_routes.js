const express = require('express');
const router = express.Router();
const VacunasController = require('../controllers/VacunasController');

router.get('/', VacunasController.getAllVacunas);
router.get('/:id', VacunasController.getVacunaById);
router.post('/', VacunasController.createVacuna);
router.put('/:id', VacunasController.updateVacuna);
router.delete('/:id', VacunasController.deleteVacuna);

module.exports = router;
