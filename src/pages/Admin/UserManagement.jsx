import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Form, ListGroup, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // 3. Buscar usuários do backend ao carregar a tela
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/usuarios');
        const data = await response.json();
        setUsers(data); // Atualiza a lista de usuários com os dados do backend
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  // 2. Alterar handleAddUser para enviar os dados via fetch
  const handleAddUser = async () => {
    if (newUser.trim() === '' || newPassword.trim() === '') {
      setShowAlert(true);
      return;
    }

    const userObj = { username: newUser.trim(), password: newPassword.trim() };

    try {
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj),
      });

      if (response.ok) {
        const newUser = await response.json();
        setUsers([...users, newUser]); // Adiciona o usuário à lista após sucesso
        setNewUser('');
        setNewPassword('');
        setShowAlert(false);
      } else {
        alert('Erro ao criar usuário');
      }
    } catch (err) {
      console.error('Erro de conexão:', err);
      alert('Erro ao se conectar com o servidor');
    }
  };

  // 4. Alterar a exclusão para fazer DELETE na API
  const handleDeleteUser = async (username) => {
    if (window.confirm(`Tem certeza que deseja excluir "${username}"?`)) {
      try {
        const response = await fetch(`http://localhost:3000/usuarios/${username}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setUsers(users.filter(u => u.username !== username)); // Atualiza a lista de usuários
        } else {
          alert('Erro ao excluir usuário');
        }
      } catch (error) {
        console.error('Erro ao excluir usuário:', error);
        alert('Erro ao se conectar com o servidor');
      }
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
                    Preencha o nome de usuário e a senha!
                  </Alert>
                )}

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Nome do usuário"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Row>
                    <Col md={9}>
                      <Form.Control
                        type="password"
                        placeholder="Senha"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
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
                            {user.username}
                          </span>
                          <Button 
                            variant="outline-danger" 
                            size="sm"
                            onClick={() => handleDeleteUser(user.username)}
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
