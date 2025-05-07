import express from 'express';
import { criarVacina, listarVacinas } from '../controllers/vacinasController.js';

const router = express.Router();

// Criar uma nova vacina
router.post('/', criarVacina);

// Listar todas as vacinas
router.get('/', listarVacinas);

export default router;