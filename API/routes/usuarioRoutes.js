import express from 'express';
import { criarUsuario, listarUsuarios, deletarUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

// Criar um novo usuário
router.post('/', criarUsuario);

// Listar todos os usuários
router.get('/', listarUsuarios);

// Deletar um usuário pelo ID
router.delete('/:nome', deletarUsuario);

export default router;