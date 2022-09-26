const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController.js');
const userController = new UserController();

router.post('/profile', userController.createUser);
router.get('/profiles', userController.GetAllUser);
router.get('/search', userController.GetUserByFirstName);


module.exports = router;