import Usuario from '../models/usuario.js';

export const redefinirSenha = async (req, res) => {
  const { nome, novaSenha } = req.body;

  try {
    // Verifica se o usuário existe
    const usuario = await Usuario.findOne({ where: { nome } });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Atualiza a senha do usuário
    usuario.senha = novaSenha;
    await usuario.save();

    res.status(200).json({ message: 'Senha redefinida com sucesso.' });
  } catch (error) {
    console.error('Erro ao redefinir senha:', error);
    res.status(500).json({ error: 'Erro ao redefinir senha.' });
  }
};