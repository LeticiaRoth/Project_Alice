import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

//Importando a Navbar
import Navbar from './components/Navbar';
// Importando as páginas
import Home from './pages/Home';
import Sobre from './pages/Sobre';

export default function App() {
  
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
    </Router>
    </>
  );

}
