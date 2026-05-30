import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import SoporteTecnico from './pages/SoporteTecnico'
import Apufact from './pages/Apufact'
import Apugescom from './pages/Apugescom'
import PozosTierra from './pages/PozosTierra'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Surtidores from './pages/Surtidores'
import TerminosCondiciones from './pages/TerminosCondiciones'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  )
}

export default App
