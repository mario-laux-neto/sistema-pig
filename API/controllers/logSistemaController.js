import LogSistema from '../models/logSistema.js';

export const criarLogSistema = async (req, res) => {
    try {
        const log = await LogSistema.create(req.body);
        res.status(201).json(log);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar log do sistema.' });
    }
};

export const listarLogsSistema = async (req, res) => {
    try {
        const logs = await LogSistema.findAll();
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar logs do sistema.' });
    }
};