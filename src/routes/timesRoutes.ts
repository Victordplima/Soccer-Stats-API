import express from 'express';
import { getTimes, addTime, deleteTime, updateLogo } from '../controllers/timesController';
import { verifyToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/times', verifyToken, getTimes);
router.post('/times', verifyToken, addTime);
router.delete('/times/:id', verifyToken, deleteTime);
router.put('/times/:id/logo', verifyToken, updateLogo);

export default router;
