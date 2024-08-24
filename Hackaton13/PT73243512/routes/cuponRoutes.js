const express = require('express');
const router = express.Router();
const cuponController = require('../controllers/cuponController');


router.post('/', cuponController.createCupon);
router.get('/', cuponController.getCupon);
router.get('/:id', cuponController.getCuponById);
router.put('/:id', cuponController.updateCupon);
router.delete('/:id', cuponController.deleteCupon);

module.exports = router;
