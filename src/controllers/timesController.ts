import { Request, Response } from 'express';
import { getTimesService, addTimeService, deleteTimeService, updateLogoService } from '../services/timesService';
import { verifyToken } from '../middleware/authMiddleware';

export const getTimes = (req: Request, res: Response) => {
    const times = getTimesService();
    res.json(times);
};

export const addTime = (req: Request, res: Response) => {
    verifyToken(req, res, () => {
        const novoTime = req.body;
        addTimeService(novoTime);
        res.status(201).json({ message: 'Time adicionado com sucesso' });
    });
};

export const deleteTime = (req: Request, res: Response) => {
    verifyToken(req, res, () => {
        const id = parseInt(req.params.id, 10);

        try {
            deleteTimeService(id);
            res.json({ message: 'Time deletado com sucesso' });
        } catch (error) {
            res.status(404).json({ message: 'Time não encontrado' });
        }
    });
};

export const updateLogo = (req: Request, res: Response) => {
    verifyToken(req, res, () => {
        const id = parseInt(req.params.id, 10);
        const { logoUrl } = req.body;

        try {
            const updatedTime = updateLogoService(id, logoUrl);
            res.json(updatedTime);
        } catch (error) {
            res.status(404).json({ message: 'Time não encontrado' });
        }
    });
};
