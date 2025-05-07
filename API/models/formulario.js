import { DataTypes } from 'sequelize';
import { sequelize } from '../config/databaseConfig.js';

const FormularioVacinacao = sequelize.define('formularios_vacinacao', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true, // Garante que o campo não seja vazio
        },
    },
    produtorUPD: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    produtorCreche: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    dataAplicacao: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true, // Garante que seja uma data válida
        },
    },
    vacinadorAjudante: {
        type: DataTypes.STRING(100),
        allowNull: true, // Explicitamente opcional
    },
    leitoasVacinadas: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    matrizesVacinadas: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    leitoesMaternidade: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    leitoesCreche: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    ajudante: {
        type: DataTypes.STRING(100),
        allowNull: true, // Explicitamente opcional
    },
    // Vacinas e quantidades
    coliRotavirus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    coliRotavirusQtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    coli: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    coliQtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    rinite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    riniteQtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    parvoviroseErisipela: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    parvoviroseErisipelaQtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    mycoplasmaCircovirus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    mycoplasmaCircovirusQtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    circovirus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    circovirusQtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    mycoplasma: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    mycoplasmaQtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    autogenaStreptococcus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    autogenaStreptococcusQtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    autogenaRespiratorio: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    autogenaRespiratorioQtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    lawsonia: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    lawsoniaQtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    influenza: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    influenzaQtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}, {
    freezeTableName: true,
    tableName: "formularios_vacinacao",
    timestamps: true,
});

export default FormularioVacinacao;