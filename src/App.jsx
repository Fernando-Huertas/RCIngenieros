import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import SoporteTecnico from './pages/SoporteTecnico'
import Apufact from './pages/Apufact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios/soporte-tecnico" element={<SoporteTecnico />} />
        <Route path="/servicios/facturacion-electronica" element={<Apufact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
