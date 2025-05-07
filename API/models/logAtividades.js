import { DataTypes } from 'sequelize';
import { sequelize } from '../config/databaseConfig.js';

const LogAtividades = sequelize.define('log_atividades', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    usuario: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    freezeTableName: true,
    timestamps: false,
});

export default LogAtividades;