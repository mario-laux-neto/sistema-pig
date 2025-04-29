import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PasswordRecovery.css'; // Arquivo CSS personalizado

const PasswordRecovery = () => {
  const [usuario, setUsuario] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('danger');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuario || !novaSenha) {
      setAlertVariant('danger');
      setAlertMessage('Preencha todos os campos!');
      setShowAlert(true);
      return;
    }
    setAlertVariant('success');
    setAlertMessage('Senha redefinida com sucesso!');
    setShowAlert(true);
  };

  return (
    <div className="admin-wrapper"> {/* Fundo laranja */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm border-0"> {/* Remove borda padrão */}
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <i className="bi bi-shield-lock fs-1 text-warning"></i>
                  <h2 className="mt-3">Recuperação de Senha</h2>
                </div>

                {showAlert && (
                  <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite seu usuário"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Nova Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Digite a nova senha"
                      value={novaSenha}
                      onChange={(e) => setNovaSenha(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button 
                    variant="warning" 
                    type="submit" 
                    className="w-100 mb-3 fw-bold"
                  >
                    <i className="bi bi-key-fill me-2"></i>
                    Redefinir Senha
                  </Button>

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

export default PasswordRecovery;