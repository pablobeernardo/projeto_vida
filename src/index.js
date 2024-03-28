import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Somos from '../src/others/somos';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Atividades from './others/atividades';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/somos' element={<Somos />} />
      <Route path='/atividades' element={<Atividades />} />
    </Routes>
  </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
