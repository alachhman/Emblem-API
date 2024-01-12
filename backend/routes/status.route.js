const {getData, getStatus} = require("../controllers/getStatus.controller.js")
const express = require('express');
const router = express.Router();


router.get('/', getData);
router.get('/health', getStatus)

module.exports = router;
