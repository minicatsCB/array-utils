import express from 'express';
const router = express.Router();
import dataController from '../controllers/data.js';
import { header } from 'express-validator';

router.get('/', dataController.getData);
router.get('/:id', dataController.getDataById);
router.post('/', [header('X-Plugin-Name').notEmpty(), header('X-Machine-Id').notEmpty()], dataController.saveData);

export default router;