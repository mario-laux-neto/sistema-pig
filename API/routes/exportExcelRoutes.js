import express from "express";
import { exportarFormulariosParaExcel } from "../controllers/exportExcelController.js";

const router = express.Router();

// Rota para exportar dados do formulário para Excel
router.get("/formularios", exportarFormulariosParaExcel);

export default router;