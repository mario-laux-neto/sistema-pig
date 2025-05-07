import Formulario from "../models/formulario.js";
import ExcelJS from "exceljs";
import { Op } from "sequelize";

export const exportarFormulariosParaExcel = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;

        if (!startDate || !endDate) {
            return res.status(400).json({ error: "Datas inicial e final são obrigatórias." });
        }

        const formularios = await Formulario.findAll({
            where: {
                dataAplicacao: {
                    [Op.between]: [new Date(startDate), new Date(endDate)],
                },
            },
        });

        if (formularios.length === 0) {
            return res.status(404).json({ error: "Nenhum dado encontrado para o intervalo de datas fornecido." });
        }

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Formularios");

        // Cabeçalhos
        worksheet.columns = [
            { header: "ID", key: "id", width: 10 },
            { header: "Nome", key: "nome", width: 30 },
            { header: "Produtor UPD", key: "produtorUPD", width: 30 },
            { header: "Produtor Creche", key: "produtorCreche", width: 30 },
            { header: "Data Aplicação", key: "dataAplicacao", width: 20 },
            { header: "Leitões Maternidade", key: "leitoesMaternidade", width: 25 },
            { header: "Leitoas Vacinadas", key: "leitoasVacinadas", width: 25 },
            { header: "Matrizes Vacinadas", key: "matrizesVacinadas", width: 25 },
            { header: "Leitões Creche", key: "leitoesCreche", width: 25 },
            { header: "1ª Dose", key: "primeiraDose", width: 15 },
            { header: "2ª Dose", key: "segundaDose", width: 15 },
            { header: "Coli Rotavirus", key: "coliRotavirus", width: 20 },
            { header: "Coli Rotavirus Qtd", key: "coliRotavirusQtd", width: 20 },
            { header: "Coli", key: "coli", width: 15 },
            { header: "Coli Qtd", key: "coliQtd", width: 15 },
            { header: "Rinite", key: "rinite", width: 15 },
            { header: "Rinite Qtd", key: "riniteQtd", width: 15 },
            { header: "Parvovirose Erisipela", key: "parvoviroseErisipela", width: 25 },
            { header: "Parvovirose Erisipela Qtd", key: "parvoviroseErisipelaQtd", width: 25 },
            { header: "Mycoplasma Circovirus", key: "mycoplasmaCircovirus", width: 25 },
            { header: "Mycoplasma Circovirus Qtd", key: "mycoplasmaCircovirusQtd", width: 25 },
            { header: "Circovirus", key: "circovirus", width: 20 },
            { header: "Circovirus Qtd", key: "circovirusQtd", width: 20 },
            { header: "Mycoplasma", key: "mycoplasma", width: 20 },
            { header: "Mycoplasma Qtd", key: "mycoplasmaQtd", width: 20 },
            { header: "Autógena Streptococcus", key: "autogenaStreptococcus", width: 25 },
            { header: "Autógena Streptococcus Qtd", key: "autogenaStreptococcusQtd", width: 25 },
            { header: "Autógena Respiratório", key: "autogenaRespiratorio", width: 25 },
            { header: "Autógena Respiratório Qtd", key: "autogenaRespiratorioQtd", width: 25 },
            { header: "Lawsonia", key: "lawsonia", width: 20 },
            { header: "Lawsonia Qtd", key: "lawsoniaQtd", width: 20 },
            { header: "Influenza", key: "influenza", width: 20 },
            { header: "Influenza Qtd", key: "influenzaQtd", width: 20 },
        ];

        // Adiciona os dados à planilha
        formularios.forEach((formulario) => {
            const data = formulario.toJSON();

            // Substituir valores booleanos por "Sim" e "Não"
            Object.keys(data).forEach((key) => {
                if (typeof data[key] === "boolean") {
                    data[key] = data[key] ? "Sim" : "Não";
                }
            });

            // Formatar a data no formato DD/MM/YYYY
            if (data.dataAplicacao) {
                const dataAplicacao = new Date(data.dataAplicacao);
                data.dataAplicacao = dataAplicacao.toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                });
            }

            worksheet.addRow(data);
        });

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader(
            "Content-Disposition",
            `attachment; filename=formularios_${startDate}_a_${endDate}.xlsx`
        );

        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        console.error("Erro ao exportar dados:", error);
        res.status(500).json({ error: "Erro ao exportar dados para Excel." });
    }
};