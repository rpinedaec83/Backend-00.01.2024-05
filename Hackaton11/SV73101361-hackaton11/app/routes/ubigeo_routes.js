const express = require('express');
const router = express.Router();
const UbigeoController = require('../controllers/UbigeoController');

router.get('/', UbigeoController.getAllUbigeos);
router.get('/:id', UbigeoController.getUbigeoById);
router.post('/', UbigeoController.createUbigeo);
router.put('/:id', UbigeoController.updateUbigeo);
router.delete('/:id', UbigeoController.deleteUbigeo);

module.exports = router;
