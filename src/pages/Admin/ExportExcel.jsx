import React, { useState } from 'react';
import { Container, Card, Button, Row, Col, Form, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';
import * as ExcelJS from 'exceljs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ExportExcel.css';

const ExportExcel = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleExport = async () => {
    if (!startDate || !endDate) {
      setError('Por favor, selecione ambas as datas (inicial e final)');
      return;
    }

    if (startDate > endDate) {
      setError('A data final deve ser maior ou igual à data inicial');
      return;
    }

    setError('');
    setIsExporting(true);
    setExportSuccess(false);

    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Dados');

      // Cabeçalhos
      worksheet.columns = [
        { header: 'Data Inicial', key: 'startDate', width: 15 },
        { header: 'Data Final', key: 'endDate', width: 15 },
        { header: 'Usuário', key: 'user', width: 20 },
        { header: 'Status', key: 'status', width: 10 }
      ];

      // Formatar datas para exibição
      const formatDate = (date) => {
        if (!date) return '';
        return new Date(date).toLocaleDateString('pt-BR');
      };

      // Dados de exemplo
      worksheet.addRow({ 
        startDate: formatDate(startDate), 
        endDate: formatDate(endDate), 
        user: 'admin', 
        status: 'Ativo' 
      });

      const data = await workbook.xlsx.writeBuffer();
      const blob = new Blob([data], { 
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
      });
      saveAs(blob, `dados_${formatDate(startDate)}_a_${formatDate(endDate)}.xlsx`);

      setExportSuccess(true);
    } catch (err) {
      setError('Ocorreu um erro durante a exportação. Por favor, tente novamente.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="admin-wrapper">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm border-0 export-card">
              <Card.Body className="text-center p-4">
                <i className="bi bi-file-earmark-excel fs-1 text-success mb-3"></i>
                <h2 className="mb-4">Exportar Dados</h2>
                
                {error && (
                  <Alert variant="danger" className="mb-4">
                    {error}
                  </Alert>
                )}

                {exportSuccess && (
                  <Alert variant="success" className="mb-4">
                    Dados exportados com sucesso!
                  </Alert>
                )}

                <Form className="mb-4">
                  <Form.Group className="mb-3">
                    <Form.Label>Data Inicial</Form.Label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      placeholderText="Selecione a data inicial"
                      isClearable
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Data Final</Form.Label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      placeholderText="Selecione a data final"
                      isClearable
                    />
                  </Form.Group>
                </Form>

                <Button 
                  variant="success" 
                  onClick={handleExport}
                  size="lg"
                  className="mb-4"
                  disabled={!startDate || !endDate || isExporting}
                >
                  {isExporting ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Exportando...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-download me-2"></i>
                      Exportar para Excel
                    </>
                  )}
                </Button>

                <div className="mt-3">
                  <Link to="/admin" className="text-decoration-none">
                    <i className="bi bi-arrow-left me-2"></i>
                    Voltar ao Menu Inicial
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExportExcel;
