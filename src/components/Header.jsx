import React from 'react';
import '../styles/global.css'; // Importando do diretório styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img 
          src="https://gkpb.com.br/wp-content/uploads/2024/02/novo-logo-seara-png-sem-fundo-1024x699.png" 
          alt="Logo Seara" 
          className="header-logo"
        />
      </div>
      <h1 className="header-title">Sistema de Controle de Aplicação de Vacinas</h1>
    </header>
  );
};

export default Header;