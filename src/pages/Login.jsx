import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');  // Estado para exibir erros de autenticação

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica simples de validação
    if (!usuario || !senha) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode colocar a lógica de autenticação real
    console.log('Usuário:', usuario);  // Exibe apenas o nome de usuário

    // Se a autenticação falhar, exiba uma mensagem de erro
    // setErro('Usuário ou senha inválidos.');
    // Caso contrário, redireciona ou faz outra ação

    setErro('');  // Limpa erros anteriores
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

        {/* Exibição de erro */}
        {erro && <div className="error-message">{erro}</div>}

        <input
          type="text"
          placeholder="Nome de usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
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
