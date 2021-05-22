const express = require('express');
const router = express.Router();
const UsersController = require('../controller/UsersController')
const Auth = require('../middleware/Auth')

router.post('/create', Auth, UsersController.create);

router.post('/login', UsersController.login);

module.exports = router;