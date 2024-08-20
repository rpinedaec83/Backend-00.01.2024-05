const express = require('express');
const router = express.Router();
const RazaController = require('../controllers/RazaController');

router.get('/', RazaController.getAllRazas);
router.get('/:id', RazaController.getRazaById);
router.post('/', RazaController.createRaza);
router.put('/:id', RazaController.updateRaza);
router.delete('/:id', RazaController.deleteRaza);

module.exports = router;
