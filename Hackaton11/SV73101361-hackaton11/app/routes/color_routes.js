const express = require('express');
const router = express.Router();
const ColorController = require('../controllers/ColorController');

router.get('/', ColorController.getAllColores);
router.get('/:id', ColorController.getColorById);
router.post('/', ColorController.createColor);
router.put('/:id', ColorController.updateColor);
router.delete('/:id', ColorController.deleteColor);

module.exports = router;
