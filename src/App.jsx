import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import SoporteTecnico from './pages/SoporteTecnico'
import Apufact from './pages/Apufact'
import Apugescom from './pages/Apugescom'
import PozosTierra from './pages/PozosTierra'
import DesarrolloSoftware from './pages/DesarrolloSoftware'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Surtidores from './pages/Surtidores'
import TerminosCondiciones from './pages/TerminosCondiciones'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import LibroReclamaciones from './pages/LibroReclamaciones'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const PAGE_TITLES = {
  '/': 'RC Ingenieros | Ricardo Calderón Ingenieros - Soluciones Tecnológicas',
  '/nosotros': 'Sobre Nosotros | Ing. Ricardo Calderón - Fundador | RC Ingenieros',
  '/servicios': 'Servicios de Ingeniería y Tecnología | RC Ingenieros',
  '/servicios/soporte-tecnico': 'Soporte Técnico Especializado GNV y GLP | RC Ingenieros',
  '/servicios/facturacion-electronica': 'APUFACT - Facturación Electrónica SUNAT | RC Ingenieros',
  '/servicios/apugescom': 'APUGESCOM - Gestión y Control de Combustibles | RC Ingenieros',
  '/servicios/pozos-a-tierra': 'Pozos a Tierra y Certificación Técnica | RC Ingenieros',
  '/servicios/DesarrolloSoftware': 'Desarrollo de Software a Medida | RC Ingenieros',
  '/productos': 'Productos & Equipamiento Industrial | RC Ingenieros',
  '/productos/surtidores': 'Surtidores y Dispensadores de Combustibles | RC Ingenieros',
  '/contacto': 'Contacto y Asesoría Comercial | RC Ingenieros',
  '/terminos-condiciones': 'Términos y Condiciones | RC Ingenieros',
  '/politica-privacidad': 'Políticas de Privacidad | RC Ingenieros',
  '/libro-reclamaciones': 'Libro de Reclamaciones | Ricardo Calderón Ingenieros S.A.C.'
};

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Dynamic SEO Page Title
    if (PAGE_TITLES[pathname]) {
      document.title = PAGE_TITLES[pathname];
    } else {
      document.title = 'RC Ingenieros | Ricardo Calderón Ingenieros';
    }

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
    <Router basename="/">
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
        <Route path="/servicios/DesarrolloSoftware" element={<DesarrolloSoftware />} />
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
