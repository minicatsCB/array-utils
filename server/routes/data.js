const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data');
const { header } = require('express-validator');

router.get('/', dataController.getData);
router.get('/:id', dataController.getDataById);
router.post('/', [header('X-Plugin-Name').notEmpty(), header('X-Machine-Id').notEmpty()], dataController.saveData);

module.exports = router;