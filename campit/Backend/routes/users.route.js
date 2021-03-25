const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/me', auth, usersController.userProfile);

router.post('/', usersController.registerUser);

router.post('/verify/:id',usersController.verifyUser);

module.exports= router;