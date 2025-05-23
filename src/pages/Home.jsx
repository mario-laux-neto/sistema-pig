import React from 'react';
import Header from '../components/Header';
import FormularioVacinacao from '../components/FormularioVacinacao';
import Footer from '../components/Footer';
import '../styles/global.css';  // Caminho correto a partir da pasta pages

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <FormularioVacinacao />
      </main>
      <Footer />
    </>
  );
};

export default Home;
