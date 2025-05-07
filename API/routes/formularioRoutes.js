import express from 'express';
import { criarFormulario, listarFormularios } from '../controllers/formularioController.js';

const router = express.Router();

// Rota para criar um novo formulário
router.post('/', criarFormulario);

// Rota para listar todos os formulários
router.get('/', listarFormularios);

export default router;