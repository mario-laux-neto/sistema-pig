import express from 'express';
import usuarioRoutes from './usuarioRoutes.js';
import exportacoesRoutes from './exportacoesRoutes.js';
import vacinaRoutes from './vacinasRoute.js';
import logAtividadesRoutes from './logAtividadesRoutes.js';
import logSistemaRoutes from './logSistemaRoutes.js';
import formularioRoutes from './formularioRoutes.js';
import exportExcelRoutes from './exportExcelRoutes.js'; // Importação da nova rota

const router = express.Router();

// Rotas para usuários
router.use('/usuarios', usuarioRoutes);

// Rotas para exportações
router.use('/exportacoes', exportacoesRoutes);

// Rotas para vacinas
router.use('/vacinas', vacinaRoutes);

// Rotas para logs de atividades
router.use('/log-atividades', logAtividadesRoutes);

// Rotas para logs do sistema
router.use('/log-sistema', logSistemaRoutes);

// Rotas para formulários de vacinação
router.use('/formularios', formularioRoutes);

// Rota para exportação de Excel
router.use('/exportExcel', exportExcelRoutes); // Adicionando a nova rota

export default (app) => {
    app.use('/api', router); // Prefixo principal para todas as rotas da API
};