import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../styles/global.css'; 

const Header = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (handleLogout) handleLogout();
    navigate("/login");
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img
            src="https://gkpb.com.br/wp-content/uploads/2024/02/novo-logo-seara-png-sem-fundo-1024x699.png"
            alt="Logo Seara"
            className="header-logo"
          />
        </div>
        <div>
          <Container className="py-3">
            <Row className="align-items-center">
              <Col className="text-end">
                <Button
                  variant="danger"
                  onClick={handleClick}
                  className="logout-btn"
                >
                  <i className="bi bi-box-arrow-right me-1"></i>
                  Sair
                </Button>
              </Col>
            </Row>
          </Container>
        </div>

        <h1 className="text-center admin-title">
          Bem-vindo ao Formulário de Controle de Aplicação de Vacinas
        </h1>
      </header>
    </>
  );
};

export default Header;
