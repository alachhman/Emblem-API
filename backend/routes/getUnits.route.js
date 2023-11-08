const express = require('express');
const router = express.Router();
const unitsController = require('../controllers/getUnits.controller');

router.get('/', unitsController.getData);

module.exports = router;
