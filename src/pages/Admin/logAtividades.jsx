import React, { useState, useEffect } from 'react';
import { Container, Table, Card, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Importando Axios
import './logAtividades.css'; // Importando o CSS personalizado

const LogAtividades = () => {
  const [logs, setLogs] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('info');
  const [alertMessage, setAlertMessage] = useState('');

  // Função para buscar as atividades do log
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('/api/log-atividades'); // Substitua pela URL da sua API
        setLogs(response.data); // Supondo que a API retorna um array de logs
      } catch (error) {
        setAlertVariant('danger');
        setAlertMessage('Erro ao carregar os logs de atividades. Tente novamente.');
        setShowAlert(true);
      }
    };

    fetchLogs();
  }, []); // Carregar os logs ao montar o componente

  return (
    <div className="admin-wrapper">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <i className="bi bi-journal-text fs-1 text-warning"></i>
                  <h2 className="mt-3">Log de Atividades</h2>
                </div>

                {showAlert && (
                  <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                    {alertMessage}
                  </Alert>
                )}

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Descrição</th>
                      <th>Usuário</th>
                      <th>Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logs.length > 0 ? (
                      logs.map((log) => (
                        <tr key={log.id}>
                          <td>{log.id}</td>
                          <td>{log.descricao}</td>
                          <td>{log.usuario}</td>
                          <td>{log.data}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center text-muted">
                          Nenhuma atividade encontrada
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>

                <div className="text-center">
                  <Link to="/admin" className="text-decoration-none text-dark">
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

export default LogAtividades;
