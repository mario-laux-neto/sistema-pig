import Usuario from '../models/usuario.js';

export const criarUsuario = async (req, res) => {
    try {
      const { nome, senha } = req.body;
  
      if (!nome || !senha) {
        return res.status(400).json({ error: "Nome e senha são obrigatórios." });
      }
  
      const novoUsuario = await Usuario.create({ nome, senha });
      res.status(201).json(novoUsuario); // Retorna o usuário criado
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ error: "Erro ao criar usuário." });
    }
  };

  export const listarUsuarios = async (req, res) => {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ['id', 'nome', 'senha'], // Inclua o campo 'senha' explicitamente
      });
      res.status(200).json(usuarios);
    } catch (error) {
      console.error('Erro ao listar usuários:', error);
      res.status(500).json({ error: 'Erro ao listar usuários.' });
    }
  };

export const deletarUsuario = async (req, res) => {
    try {
      const { nome } = req.params;
  
      const usuario = await Usuario.findOne({ where: { nome } });
      if (!usuario) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
  
      await usuario.destroy();
      res.status(200).json({ message: "Usuário deletado com sucesso." });
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      res.status(500).json({ error: "Erro ao excluir usuário." });
    }
  };

  export const redefinirSenha = async (req, res) => {
    try {
      const { username, newPassword } = req.body;
  
      if (!username || !newPassword) {
        return res.status(400).json({ error: "Usuário e nova senha são obrigatórios." });
      }
  
      const usuario = await Usuario.findOne({ where: { nome: username } });
  
      if (!usuario) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
  
      usuario.senha = newPassword; // Atualiza a senha
      await usuario.save();
  
      res.status(200).json({ message: "Senha redefinida com sucesso." });
    } catch (error) {
      console.error("Erro ao redefinir senha:", error);
      res.status(500).json({ error: "Erro ao redefinir senha." });
    }
  };