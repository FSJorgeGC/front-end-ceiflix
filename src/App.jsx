import { useState } from 'react'
import './App.css'
import Buscador from './pages/Buscador.jsx'
import { Header } from './pages/Header.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails.jsx'
import { Login } from './pages/Login.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <h1>🎬 Mi App de Cine</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/Buscador" replace />} />
          <Route path="/Buscador" element={<Buscador />} />
          <Route path="/MovieDetails" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
