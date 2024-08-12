const express = require('express');
const router = express.Router();
const MascotaController = require('../controllers/MascotaController');

router.get('/', MascotaController.getAllMascotas);
router.get('/:id', MascotaController.getMascotaById);
router.post('/', MascotaController.createMascota);
router.put('/:id', MascotaController.updateMascota);
router.delete('/:id', MascotaController.deleteMascota);

module.exports = router;
