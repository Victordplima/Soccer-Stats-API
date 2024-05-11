import express from 'express';
import { getJogadores, addJogador, updateJogador, deleteJogador } from '../controllers/jogadoresController';
import { verifyToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/jogadores', verifyToken, getJogadores);
router.post('/jogadores', verifyToken, addJogador);
router.put('/jogadores/:id', verifyToken, updateJogador);
router.delete('/jogadores/:id', verifyToken, deleteJogador);

export default router;
