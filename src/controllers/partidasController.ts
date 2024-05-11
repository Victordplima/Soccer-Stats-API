import { Request, Response } from 'express';
import { getPartidasService, addPartidaService, updatePartidaService, deletePartidaService } from '../services/partidasService';
import { verifyToken } from '../middleware/authMiddleware';

export const getPartidas = (req: Request, res: Response) => {
    verifyToken(req, res, () => {
        const partidas = getPartidasService();
        res.json(partidas);
    });
};

export const addPartida = (req: Request, res: Response) => {
    verifyToken(req, res, () => {
        const novaPartida = req.body;
        addPartidaService(novaPartida);
        res.status(201).json({ message: 'Partida adicionada com sucesso' });
    });
};

export const updatePartida = (req: Request, res: Response) => {
    verifyToken(req, res, () => {
        const id = parseInt(req.params.id, 10);
        const partidaData = req.body;

        try {
            updatePartidaService(id, partidaData);
            res.json({ message: 'Partida atualizada com sucesso' });
        } catch (error) {
            res.status(404).json({ message: 'Partida não encontrada' });
        }
    });
};

export const deletePartida = (req: Request, res: Response) => {
    verifyToken(req, res, () => {
        const id = parseInt(req.params.id, 10);

        try {
            deletePartidaService(id);
            res.json({ message: 'Partida deletada com sucesso' });
        } catch (error) {
            res.status(404).json({ message: 'Partida não encontrada' });
        }
    });
};
