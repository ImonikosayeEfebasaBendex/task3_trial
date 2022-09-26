const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController.js');
const userController = new UserController();
const UserValidator = require('../validation/user.js');
const {validate} = require('express-validation');

router.post('/profile',validate(UserValidator.createUser), userController.createUser);
router.get('/profiles', userController.GetAllUser);
router.get('/search', userController.GetUserByFirstName);
router.delete('/profile/id', userController.DeleteUserById);


module.exports = router;