import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buscador from './pages/Buscador.jsx'
import { Header } from './pages/Header.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
       <div>
      <h1>🎬 Mi App de Cine</h1>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Buscador />} />
              <Route path="/MovieDetails" element={<MovieDetails />} />
            </Routes>
          </BrowserRouter>
  
    </div>
    </>
  )
}

export default App
