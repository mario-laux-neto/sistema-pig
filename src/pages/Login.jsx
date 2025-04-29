import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [usuario, setUsuario] = useState('');  // Alterei a variável para "usuario"
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você coloca a lógica de autenticação
    console.log('Usuário:', usuario);  // Agora está mostrando o nome de usuário
    console.log('Senha:', senha);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <img 
          src="https://gkpb.com.br/wp-content/uploads/2024/02/novo-logo-seara-png-sem-fundo-1024x699.png" 
          alt="Logo Seara" 
          className="header-logo"
        />
        <h2>Login</h2>
        <input
          type="text"  // Alterei para "text" já que será um nome de usuário
          placeholder="Nome de usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}  // Atualiza o estado para nome de usuário
          required
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
