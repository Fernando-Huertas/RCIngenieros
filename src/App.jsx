import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import SoporteTecnico from './pages/SoporteTecnico'
import Apufact from './pages/Apufact'
import Apugescom from './pages/Apugescom'
import PozosTierra from './pages/PozosTierra'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Surtidores from './pages/Surtidores'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios/soporte-tecnico" element={<SoporteTecnico />} />
        <Route path="/servicios/facturacion-electronica" element={<Apufact />} />
        <Route path="/servicios/apugescom" element={<Apugescom />} />
        <Route path="/servicios/pozos-a-tierra" element={<PozosTierra />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/surtidores" element={<Surtidores />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  )
}

export default App
