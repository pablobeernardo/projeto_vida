import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Somos from '../src/others/somos';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Atividades from './others/atividades';
import Eventos from './others/eventos';
import ConexaoTeen from './others/teen';
import Kids from './others/kids';
import Louvor from './others/louvor';
import Rede from './others/rede';
import Doacoes from './others/doacoes';
import Contato from './others/contato';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/somos' element={<Somos />} />
      <Route path='/atividades' element={<Atividades />} />
      <Route path='/eventos' element={<Eventos />} />
      <Route path='/conexaoteen' element={<ConexaoTeen />} />
      <Route path='/kids' element={<Kids />} />
      <Route path='/louvor' element={<Louvor />} />
      <Route path='/rede' element={<Rede />} />
      <Route path='/doacoes' element={<Doacoes />} />
      <Route path='/contato' element={<Contato />} />
    </Routes>
  </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
