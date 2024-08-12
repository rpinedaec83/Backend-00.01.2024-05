const express = require('express');
const router = express.Router();
const NacionalidadController = require('../controllers/NacionalidadController');

router.get('/', NacionalidadController.getAllNacionalidades);
router.get('/:id', NacionalidadController.getNacionalidadById);
router.post('/', NacionalidadController.createNacionalidad);
router.put('/:id', NacionalidadController.updateNacionalidad);
router.delete('/:id', NacionalidadController.deleteNacionalidad);

module.exports = router;
