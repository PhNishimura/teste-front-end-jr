import React from 'react';
import './App.css';
import Header from './components/header';
import Marketplace from './components/marketPlace'; // Ajuste o caminho conforme a estrutura do seu projeto
import ProductList from './components/ProductList';
import Photos from './components/Photos';




function App() {
  return (
    <div className="App">
      <Header />
      <Marketplace />
      <ProductList /> 
      <Photos />

    </div>


  );
}

export default App;
