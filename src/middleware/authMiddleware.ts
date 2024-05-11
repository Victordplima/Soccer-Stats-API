import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const SECRET_KEY = process.env.SECRET_KEY || 'seu_valor_padrao';

declare global {
    namespace Express {
        interface Request {
            user?: { username: string; role: string };
        }
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        let tokenWithoutBearer = token;
        if (token.startsWith('Bearer ')) {
            tokenWithoutBearer = token.slice(7); // Remove os primeiros 7 caracteres ("Bearer ")
        }

        const decoded = jwt.verify(tokenWithoutBearer, SECRET_KEY) as { username: string; role: string };
        req.user = decoded;
        next();
    } catch (error) {
        console.log(token);
        res.status(401).json({ message: 'Token inválido' });
    }
};


export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
        return next();
    }

    return res.status(403).json({ message: 'Acesso não autorizado' });
};

