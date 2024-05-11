import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || 'seu_valor_padrao';

interface User {
    username: string;
    password: string;
}

const users: User[] = [];

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (users.find(user => user.username === username)) {
            return res.status(400).json({ message: 'Nome de usuário já existe' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser: User = { username, password: hashedPassword };
        users.push(newUser);

        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = users.find(user => user.username === username);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '24h' }); // Token expira em 24 horas

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
};
