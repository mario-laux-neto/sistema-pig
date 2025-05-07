import express from 'express';
import { redefinirSenha } from '../controllers/passwordController.js';

const router = express.Router();

// Rota para redefinir a senha
router.post('/redefinir', redefinirSenha);

export default router;