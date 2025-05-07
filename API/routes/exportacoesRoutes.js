import express from 'express';
import { criarExportacao, listarExportacoes } from '../controllers/exportacoesController.js';

const router = express.Router();

// Criar uma nova exportação
router.post('/', criarExportacao);

// Listar todas as exportações
router.get('/', listarExportacoes);

export default router;