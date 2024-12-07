
import express from 'express';
import ServiceController from '../controllers/serviceController.js'; 

const router = express.Router();

router.get('/', ServiceController.getAllServices); 

export default router;
