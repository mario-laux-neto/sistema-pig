import Vacina from '../models/vacinas.js';

export const criarVacina = async (req, res) => {
    try {
        const vacina = await Vacina.create(req.body);
        res.status(201).json(vacina);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar vacina.' });
    }
};

export const listarVacinas = async (req, res) => {
    try {
        const vacinas = await Vacina.findAll();
        res.status(200).json(vacinas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar vacinas.' });
    }
};

export const deletarVacina = async (req, res) => {
    try {
        const { id } = req.params;
        const vacina = await Vacina.findByPk(id);

        if (!vacina) {
            return res.status(404).json({ error: 'Vacina não encontrada.' });
        }

        await vacina.destroy();
        res.status(200).json({ message: 'Vacina deletada com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar vacina.' });
    }
};