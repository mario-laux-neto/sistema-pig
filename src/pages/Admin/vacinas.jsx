import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table, Card, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Importar Axios
import './vacinas.css'; // Importando o CSS personalizado

const Vacinas = () => {
  const [vacina, setVacina] = useState('');
  const [vacinas, setVacinas] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('danger');
  const [alertMessage, setAlertMessage] = useState('');

  // Função para buscar vacinas cadastradas no backend
  useEffect(() => {
    const fetchVacinas = async () => {
      try {
        const response = await axios.get('/api/vacinas'); // Substitua pela URL do seu backend
        setVacinas(response.data);
      } catch (error) {
        setAlertVariant('danger');
        setAlertMessage('Erro ao carregar as vacinas. Tente novamente.');
        setShowAlert(true);
      }
    };

    fetchVacinas();
  }, []); // Carregar vacinas ao montar o componente

  // Função para adicionar nova vacina
  const handleAdd = async (e) => {
    e.preventDefault();

    if (!vacina.trim()) {
      setAlertVariant('danger');
      setAlertMessage('Digite o nome da vacina!');
      setShowAlert(true);
      return;
    }

    try {
      const response = await axios.post('/api/vacinas', { nome: vacina.trim() }); // Substitua pela URL da sua API
      if (response.status === 201) {
        setVacinas([...vacinas, vacina.trim()]);
        setVacina('');
        setAlertVariant('success');
        setAlertMessage('Vacina adicionada com sucesso!');
        setShowAlert(true);
      }
    } catch (error) {
      setAlertVariant('danger');
      setAlertMessage('Erro ao adicionar vacina. Tente novamente.');
      setShowAlert(true);
    }
  };

  return (
    <div className="admin-wrapper">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <i className="bi bi-syringe fs-1 text-warning"></i>
                  <h2 className="mt-3">Cadastrar Tipos de Vacina</h2>
                </div>

                {showAlert && (
                  <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleAdd}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nome da vacina</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ex: Vacina contra febre suína"
                      value={vacina}
                      onChange={(e) => setVacina(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button type="submit" className="w-100 mb-3 fw-bold cyan-btn">
                    Adicionar Vacina
                  </Button>

                  {vacinas.length > 0 && (
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nome da Vacina</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vacinas.map((v, i) => (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}

                  <div className="text-center">
                    <Link to="/admin" className="text-decoration-none text-dark">
                      <i className="bi bi-arrow-left me-2"></i>
                      Voltar ao Menu Inicial
                    </Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vacinas;
