import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Admin.css';

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="admin-wrapper">
      <Container className="py-5">
        <Row className="mb-4 text-center">
          <Col>
            <h1 className="admin-title">Bem-vindo ao Painel de Administração</h1>
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
          {/* Gerenciar Usuários */}
          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm admin-card">
              <Card.Body className="text-center">
                <i className="bi bi-people-fill fs-1 text-primary mb-3" aria-hidden="true"></i>
                <Card.Title>Gerenciar Usuários</Card.Title>
                <Card.Text>
                  Adicione ou remova usuários do sistema.
                </Card.Text>
                <Link to="/admin/users" className="btn btn-primary stretched-link" aria-label="Acessar Gerenciamento de Usuários">
                  Acessar
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Exportar Dados */}
          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm admin-card">
              <Card.Body className="text-center">
                <i className="bi bi-file-earmark-excel-fill fs-1 text-success mb-3" aria-hidden="true"></i>
                <Card.Title>Exportar Dados</Card.Title>
                <Card.Text>
                  Exporte relatórios em Excel.
                </Card.Text>
                <Link to="/admin/exportexcel" className="btn btn-success stretched-link" aria-label="Acessar Exportação de Dados">
                  Acessar
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Recuperação de Senha */}
          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm admin-card">
              <Card.Body className="text-center">
                <i className="bi bi-shield-lock-fill fs-1 text-warning mb-3" aria-hidden="true"></i>
                <Card.Title>Recuperação de Senha</Card.Title>
                <Card.Text>
                  Gerencie solicitações de redefinição de senha.
                </Card.Text>
                <Link to="/admin/passwordrecovery" className="btn btn-warning stretched-link" aria-label="Acessar Recuperação de Senha">
                  Acessar
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Cadastrar Tipos de Vacina */}
          {/* <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm admin-card">
              <Card.Body className="text-center">
                <i className="bi bi-capsule-pill fs-1 text-info mb-3" aria-hidden="true"></i>
                <Card.Title>Cadastrar Tipos de Vacina</Card.Title>
                <Card.Text>
                  Adicione vacinas no sistema.
                </Card.Text>
                <Link to="/admin/vacinas" className="btn btn-info stretched-link" aria-label="Acessar Cadastro de Tipos de Vacina">
                  Acessar
                </Link>
              </Card.Body>
            </Card>
          </Col> */}

          {/* Log de Atividades */}
          {/* <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm admin-card">
              <Card.Body className="text-center">
                <i className="bi bi-clock-history fs-1 text-secondary mb-3" aria-hidden="true"></i>
                <Card.Title>Atividades</Card.Title>
                <Card.Text>
                  Visualize as ações realizadas pelos usuários no sistema.
                </Card.Text>
                <Link to="/admin/logs/atividades" className="btn btn-secondary stretched-link" aria-label="Acessar Log de Atividades">
                  Acessar
                </Link>
              </Card.Body>
            </Card>
          </Col> */}

          {/* Logs do Sistema */}
          {/* <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm admin-card">
              <Card.Body className="text-center">
                <i className="bi bi-journal-text fs-1 text-dark mb-3" aria-hidden="true"></i>
                <Card.Title>Sistema</Card.Title>
                <Card.Text>
                  Acesse os registros técnicos e de erro do sistema.
                </Card.Text>
                <Link to="/admin/logs/sistema" className="btn btn-dark stretched-link" aria-label="Acessar Logs do Sistema">
                  Acessar
                </Link>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>

        <div className="text-center mt-5">
          <img 
            src="https://gkpb.com.br/wp-content/uploads/2024/02/novo-logo-seara-png-sem-fundo-1024x699.png" 
            alt="Logo Seara" 
            className="body-logo"
          />
        </div>
      </Container>
    </div>
  );
};

export default Admin;
