const reservationsController = require('../controllers/reservationsController');
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

router.post('/',auth,reservationsController.addReservation);

module.exports = router;