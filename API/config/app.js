import express from 'express';
import cors from 'cors';
import Routes from '../routes/index.js';
import passwordRoutes from '../routes/passwordRoutes.js';

const app = express();

// Configuração de middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registrar as rotas principais
Routes(app);

// Registrar as rotas de redefinição de senha
app.use('/api/password', passwordRoutes);

// Middleware para tratar erros 404
app.use((req, res) => {
    res.status(404).send('404 - Página não encontrada');
});

export default app;