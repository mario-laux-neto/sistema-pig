import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Admin.css'; // Arquivo CSS personalizado

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aqui você pode adicionar lógica de logout se necessário (limpar tokens, etc.)
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div className="admin-wrapper">
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="text-center admin-title">Bem-vindo ao Painel de Administração</h1>
            <div className="text-end mb-3">
              <Button 
                variant="danger" 
                onClick={handleLogout}
                className="logout-btn"
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Sair
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Card: Gerenciar Usuários */}
          <Col md={4}>
            <Card className="h-100 shadow-sm admin-card">
              <Card.Body className="text-center">
                <i className="bi bi-people-fill fs-1 text-primary mb-3"></i>
                <Card.Title>Gerenciar Usuários</Card.Title>
                <Card.Text>
                  Adicione, edite ou remova usuários do sistema.
                </Card.Text>
                <Link 
                  to="/admin/users" 
                  className="btn btn-primary stretched-link"
                >
                  Acessar
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Card: Exportar Dados */}
          <Col md={4}>
            <Card className="h-100 shadow-sm admin-card">
              <Card.Body className="text-center">
                <i className="bi bi-file-earmark-excel-fill fs-1 text-success mb-3"></i>
                <Card.Title>Exportar Dados</Card.Title>
                <Card.Text>
                  Exporte relatórios em Excel ou CSV.
                </Card.Text>
                <Link 
                  to="/admin/exportexcel" 
                  className="btn btn-success stretched-link"
                >
                  Acessar
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Card: Recuperação de Senha */}
          <Col md={4}>
            <Card className="h-100 shadow-sm admin-card">
              <Card.Body className="text-center">
                <i className="bi bi-shield-lock-fill fs-1 text-warning mb-3"></i>
                <Card.Title>Recuperação de Senha</Card.Title>
                <Card.Text>
                  Gerencie solicitações de redefinição de senha.
                </Card.Text>
                <Link 
                  to="/admin/passwordrecovery" 
                  className="btn btn-warning stretched-link"
                >
                  Acessar
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <img 
          src="https://gkpb.com.br/wp-content/uploads/2024/02/novo-logo-seara-png-sem-fundo-1024x699.png" 
          alt="Logo Seara" 
          className="body-logo"
        />
    </div>
  );
};

export default Admin;