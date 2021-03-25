const siteController = require('../controllers/sitesController');
const express = require('express');
const router = express.Router();

const host = require('../middleware/host');
const auth = require('../middleware/auth');

router.get('/',auth,siteController.getSites);

router.post('/',[auth,host],siteController.addSite);

module.exports = router;