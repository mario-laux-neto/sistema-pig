import { DataTypes } from 'sequelize';
import { sequelize } from '../config/databaseConfig.js';

const Vacina = sequelize.define('vacinas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
}, {
    freezeTableName: true,
    timestamps: true,
});

export default Vacina;