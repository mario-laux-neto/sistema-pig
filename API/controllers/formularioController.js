import FormularioVacinacao from '../models/formulario.js';

export const criarFormulario = async (req, res) => {
    try {
      const data = req.body;
  
      // Converte strings vazias para null
      Object.keys(data).forEach((key) => {
        if (data[key] === "") {
          data[key] = null;
        }
      });
  
      const formulario = await FormularioVacinacao.create(data);
      res.status(201).json(formulario);
    } catch (error) {
      console.error("Erro no servidor:", error);
      res.status(500).json({ error: "Erro ao criar formulário de vacinação." });
    }
  };

export const listarFormularios = async (req, res) => {
    try {
        const formularios = await FormularioVacinacao.findAll();
        res.status(200).json(formularios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar formulários de vacinação.' });
    }
};

export const atualizarFormulario = async (req, res) => {
    try {
        const { id } = req.params;
        const formulario = await FormularioVacinacao.findByPk(id);

        if (!formulario) {
            return res.status(404).json({ error: 'Formulário não encontrado.' });
        }

        await formulario.update(req.body);
        res.status(200).json(formulario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar formulário de vacinação.' });
    }
};

export const deletarFormulario = async (req, res) => {
    try {
        const { id } = req.params;
        const formulario = await FormularioVacinacao.findByPk(id);

        if (!formulario) {
            return res.status(404).json({ error: 'Formulário não encontrado.' });
        }

        await formulario.destroy();
        res.status(200).json({ message: 'Formulário deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar formulário de vacinação.' });
    }
};