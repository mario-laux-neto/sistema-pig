import express from 'express';
import { criarLogSistema, listarLogsSistema } from '../controllers/logSistemaController.js';

const router = express.Router();

// Criar um novo log do sistema
router.post('/', criarLogSistema);

// Listar todos os logs do sistema
router.get('/', listarLogsSistema);

export default router;