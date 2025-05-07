import express from 'express';
import { criarLogAtividade, listarLogsAtividades } from '../controllers/logAtividadesController.js';

const router = express.Router();

// Criar um novo log de atividade
router.post('/', criarLogAtividade);

// Listar todos os logs de atividades
router.get('/', listarLogsAtividades);

export default router;