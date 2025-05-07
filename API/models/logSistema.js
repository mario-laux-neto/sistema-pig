import { DataTypes } from 'sequelize';
import { sequelize } from '../config/databaseConfig.js';

const LogSistema = sequelize.define('log_sistema', {
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
    },
    data: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    freezeTableName: true,
    timestamps: false,
});

export default LogSistema;