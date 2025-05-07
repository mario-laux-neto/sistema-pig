import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Button,
  Form,
  ListGroup,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./UserManagement.css";
import api from "../../services/api"; // Importa o serviço de API

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [visiblePasswords, setVisiblePasswords] = useState({}); // Estado para controlar a visibilidade das senhas

  // 1. Buscar usuários do backend ao carregar a tela
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/usuarios");
        setUsers(response.data); // Atualiza a lista de usuários com os dados do backend
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  // 2. Adicionar um novo usuário
  const handleAddUser = async () => {
    if (newUser.trim() === "" || newPassword.trim() === "") {
      setShowAlert(true);
      return;
    }

    const userObj = { nome: newUser.trim(), senha: newPassword.trim() };

    try {
      await api.post("/usuarios", userObj);
      const response = await api.get("/usuarios"); // Atualiza a lista de usuários após criar
      setUsers(response.data);
      setNewUser("");
      setNewPassword("");
      setShowAlert(false);
    } catch (err) {
      console.error("Erro ao criar usuário:", err);
      alert("Erro ao criar usuário");
    }
  };

  // 3. Excluir um usuário
  const handleDeleteUser = async (nome) => {
    if (window.confirm(`Tem certeza que deseja excluir "${nome}"?`)) {
      try {
        await api.delete(`/usuarios/${nome}`);
        setUsers(users.filter((u) => u.nome !== nome)); // Atualiza a lista de usuários
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
        alert("Erro ao excluir usuário");
      }
    }
  };

  // Alternar visibilidade da senha de um usuário
  const togglePasswordVisibility = (nome) => {
    setVisiblePasswords((prevState) => ({
      ...prevState,
      [nome]: !prevState[nome], // Alterna o estado de visibilidade da senha
    }));
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
                  <Alert
                    variant="danger"
                    onClose={() => setShowAlert(false)}
                    dismissible
                  >
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
                        <ListGroup.Item
                          key={index}
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span>
                            <i className="bi bi-person-fill me-2"></i>
                            {user.nome}
                          </span>
                          <div className="d-flex align-items-center">
                            <Form.Control
                              type={
                                visiblePasswords[user.nome]
                                  ? "text"
                                  : "password"
                              } // Alterna entre "text" e "password"
                              value={user.senha || ""} // Exibe a senha do usuário
                              readOnly
                              className="me-2"
                              style={{ width: "150px" }}
                            />
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() =>
                                togglePasswordVisibility(user.nome)
                              } // Alterna visibilidade
                            >
                              <i
                                className={`bi ${
                                  visiblePasswords[user.nome]
                                    ? "bi-eye-slash"
                                    : "bi-eye"
                                }`}
                              ></i>
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              className="ms-2"
                              onClick={() => handleDeleteUser(user.nome)}
                            >
                              <i className="bi bi-trash"></i>
                            </Button>
                          </div>
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
