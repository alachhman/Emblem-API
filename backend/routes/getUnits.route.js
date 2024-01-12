const express = require('express');
const router = express.Router();
const unitsController = require('../controllers/getUnits.controller');

router.get('/', unitsController.getDirectory);
router.get('/8', unitsController.getData);

module.exports = router;
