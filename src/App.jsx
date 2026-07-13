import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import SoporteTecnico from './pages/SoporteTecnico'
import Apufact from './pages/Apufact'
import Apugescom from './pages/Apugescom'
import PozosTierra from './pages/PozosTierra'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Surtidores from './pages/Surtidores'
import TerminosCondiciones from './pages/TerminosCondiciones'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import LibroReclamaciones from './pages/LibroReclamaciones'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      const element = document.getElementById(hash.substring(1))
      if (element) {
        const offset = window.innerWidth >= 1920 ? 350 : 120
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        })
      }
    }
  }, [pathname, hash])

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
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/soporte-tecnico" element={<SoporteTecnico />} />
        <Route path="/servicios/facturacion-electronica" element={<Apufact />} />
        <Route path="/servicios/apugescom" element={<Apugescom />} />
        <Route path="/servicios/pozos-a-tierra" element={<PozosTierra />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/surtidores" element={<Surtidores />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/libro-reclamaciones" element={<LibroReclamaciones />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  )
}

export default App
