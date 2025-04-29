import React, { useState } from 'react';
import { Container, Card, Button, Form, ListGroup, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState(['admin', 'jeanwarta', 'luisrosario', 'allanpaholski', 'rodrigodecezere', 'edivanvargas', 'joaopaulo', 'robertfigueira', 'arthurbiazuz', 'geraragro']);
  const [newUser, setNewUser] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleAddUser = () => {
    if (newUser.trim() === '') {
      setShowAlert(true);
      return;
    }
    setUsers([...users, newUser.trim()]);
    setNewUser('');
  };

  const handleDeleteUser = (user) => {
    if (window.confirm(`Tem certeza que deseja excluir "${user}"?`)) {
      setUsers(users.filter(u => u !== user));
    }
  };

  return (
    <div className="admin-wrapper">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm border-0 user-management-card">
              <Card.Body>
                <div className="text-center mb-4">
                  <i className="bi bi-people-fill fs-1 text-primary"></i>
                  <h2>Gerenciamento de Usuários</h2>
                </div>

                {showAlert && (
                  <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                    Digite um nome de usuário válido!
                  </Alert>
                )}

                <Form.Group className="mb-4">
                  <Row>
                    <Col md={9}>
                      <Form.Control
                        type="text"
                        placeholder="Adicionar novo usuário"
                        value={newUser}
                        onChange={(e) => setNewUser(e.target.value)}
                      />
                    </Col>
                    <Col md={3}>
                      <Button 
                        variant="primary" 
                        onClick={handleAddUser}
                        className="w-100"
                      >
                        <i className="bi bi-plus-circle me-2"></i>
                        Adicionar
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>

                <Card className="mb-4">
                  <Card.Header className="bg-light">
                    <h5 className="mb-0">Usuários Atuais ({users.length})</h5>
                  </Card.Header>
                  <ListGroup variant="flush">
                    {users.length > 0 ? (
                      users.map((user, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="bi bi-person-fill me-2"></i>
                            {user}
                          </span>
                          <Button 
                            variant="outline-danger" 
                            size="sm"
                            onClick={() => handleDeleteUser(user)}
                          >
                            <i className="bi bi-trash"></i>
                          </Button>
                        </ListGroup.Item>
                      ))
                    ) : (
                      <ListGroup.Item className="text-center text-muted">
                        Nenhum usuário cadastrado
                      </ListGroup.Item>
                    )}
                  </ListGroup>
                </Card>

                <div className="text-center">
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

export default UserManagement;