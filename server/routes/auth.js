const express = require('express');

const { validate, login } = require('../controllers/auth.js');

const router = express.Router();

router.post('/validate', validate);
router.post('/login', login);

module.exports = router;