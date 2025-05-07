import Exportacao from '../models/Exportacoes.js';

export const criarExportacao = async (req, res) => {
    try {
        const { dataInicial, dataFinal, usuario, status } = req.body;
        const novaExportacao = await Exportacao.create({ dataInicial, dataFinal, usuario, status });
        res.status(201).json(novaExportacao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar exportação.' });
    }
};

export const listarExportacoes = async (req, res) => {
    try {
        const exportacoes = await Exportacao.findAll();
        res.status(200).json(exportacoes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar exportações.' });
    }
};

export const atualizarExportacao = async (req, res) => {
    try {
        const { id } = req.params;
        const { dataInicial, dataFinal, usuario, status } = req.body;
        const exportacao = await Exportacao.findByPk(id);

        if (!exportacao) {
            return res.status(404).json({ error: 'Exportação não encontrada.' });
        }

        await exportacao.update({ dataInicial, dataFinal, usuario, status });
        res.status(200).json(exportacao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar exportação.' });
    }
};

export const deletarExportacao = async (req, res) => {
    try {
        const { id } = req.params;
        const exportacao = await Exportacao.findByPk(id);

        if (!exportacao) {
            return res.status(404).json({ error: 'Exportação não encontrada.' });
        }

        await exportacao.destroy();
        res.status(200).json({ message: 'Exportação deletada com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar exportação.' });
    }
};