import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin/Admin';
import UserManagement from './pages/Admin/UserManagement';
import ExportExcel from './pages/Admin/ExportExcel';
import PasswordRecovery from './pages/Admin/PasswordRecovery';
import Vacinas from './pages/Admin/vacinas';
import LogAtividades from './pages/Admin/logAtividades';
import LogSistema from './pages/Admin/logSistema';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PasswordReset from "./pages/Admin/PasswordRecovery"; // Certifique-se de que o caminho está correto

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/PasswordRecovery" element={<PasswordReset />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/exportexcel" element={<ExportExcel />} />
        <Route path="/admin/passwordrecovery" element={<PasswordRecovery />} />
        <Route path="/admin/vacinas" element={<Vacinas />} />
        <Route path="/admin/logs/atividades" element={<LogAtividades />} />
        <Route path="/admin/logs/sistema" element={<LogSistema />} />
      </Routes>
    </Router>
  );
}

export default App;
