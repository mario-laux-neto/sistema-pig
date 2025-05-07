import LogAtividades from '../models/logAtividades.js';

export const criarLogAtividade = async (req, res) => {
    try {
        const log = await LogAtividades.create(req.body);
        res.status(201).json(log);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar log de atividade.' });
    }
};

export const listarLogsAtividades = async (req, res) => {
    try {
        const logs = await LogAtividades.findAll();
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar logs de atividades.' });
    }
};