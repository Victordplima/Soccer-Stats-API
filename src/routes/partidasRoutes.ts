import express from 'express';
import { getPartidas, addPartida, updatePartida, deletePartida } from '../controllers/partidasController';

const router = express.Router();

router.get('/partidas', getPartidas);
router.post('/partidas', addPartida);
router.put('/partidas/:id', updatePartida);
router.delete('/partidas/:id', deletePartida);

export default router;
