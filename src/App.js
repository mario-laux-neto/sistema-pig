import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin/Admin'; // Rota para página Admin
import UserManagement from './pages/Admin/UserManagement'; // Rota para Gerenciar Usuários
import ExportExcel from './pages/Admin/ExportExcel'; // Rota para Exportar Dados
import PasswordRecovery from './pages/Admin/PasswordRecovery'; // Rota para Recuperação de Senha
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota padrão para Home */}
        <Route path="/" element={<Home />} />
        {/* Rota de Login */}
        <Route path="/login" element={<Login />} />
        {/* Rota de Admin */}
        <Route path="/admin" element={<Admin />} />
        {/* Rota para Gerenciamento de Usuários */}
        <Route path="/admin/users" element={<UserManagement />} />
        {/* Rota para Exportar Dados */}
        <Route path="/admin/exportexcel" element={<ExportExcel />} />
        {/* Rota para Recuperação de Senha */}
        <Route path="/admin/passwordrecovery" element={<PasswordRecovery />} />
      </Routes>
    </Router>
  );
}

export default App;
