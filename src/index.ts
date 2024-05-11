import express from 'express';
import bodyParser from 'body-parser';
import partidasRoutes from './routes/partidasRoutes';
import jogadoresRoutes from './routes/jogadoresRoutes';
import timesRoutes from './routes/timesRoutes';
import authRoutes from './routes/authRoutes';
import { verifyToken } from './middleware/authMiddleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para fazer o parsing do corpo das requisições como JSON
app.use(bodyParser.json());

// Configuração das rotas
app.use(partidasRoutes);
app.use(jogadoresRoutes);
app.use(timesRoutes);
app.use('/auth', authRoutes);

app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Rota protegida alcançada!' });
});

// Rota de teste
app.get('/', (req, res) => {
    res.send('API Soccer Stats está funcionando!');
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
