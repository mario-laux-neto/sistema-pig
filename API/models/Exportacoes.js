import { DataTypes } from 'sequelize';
import { sequelize } from '../config/databaseConfig.js';

const Exportacao = sequelize.define('exportacoes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dataInicial: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    dataFinal: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    usuario: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(50),
        defaultValue: 'Ativo',
    },
}, {
    freezeTableName: true,
    timestamps: true,
});

export default Exportacao;