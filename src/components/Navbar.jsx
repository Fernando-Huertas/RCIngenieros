import { Link } from 'react-router-dom'
import './Navbar.css'
import logoprincipal from '../assets/logoprincipal.jpg'
import logorc1 from '../assets/logorc1.webp'
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {

  // --- ESTADOS ---
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isServiciosOpen, setIsServiciosOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // --- LÓGICA DEL SCROLL (Sticky Navbar) ---
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll); // Limpieza
    }, []);

    // --- FUNCIONES ---
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
      if (isSidebarOpen) setIsServiciosOpen(false); // Cierra submenú si cerramos sidebar
    };

    const navigate = useNavigate();
    const location = useLocation();

    // Cierra el menú y el sidebar automáticamente cada vez que cambiamos de ruta
    useEffect(() => {
        setIsSidebarOpen(false);
        setIsServiciosOpen(false);
    }, [location.pathname]);

   return (
    <>
     {/*Barra superior*/}
    <header 
      className={`main-header ${isScrolled ? "header--scrolled" : ""}`}
      style={isScrolled ? { boxShadow: "0 8px 30px rgba(0,0,0,0.18)", borderBottom: "1px solid rgba(0,0,0,0.05)" } : { transition: "box-shadow 0.3s ease-in-out" }}
    >
        <div className="topbar">
            <div className="topbar-content">
                <div className="top-left">
                    <div className="contact-item">
                        <div className="icon-circle">
                            <Icon icon="entypo:old-phone" />
                        </div>
                        <span className="font-contact">(01) 5005583</span>
                        
                    </div>
                    <div className="contact-item">
                        <div className="icon-circle">
                            <Icon icon="material-symbols:mail" />
                        </div>
                        <span className="font-contact">ventas01@rcingenieros.com</span>
                    </div>
                </div>

                {/* Cinta de productos deslizante (Solo Desktop) 
                <div className="top-center-ticker">
                    <div className="ticker-wrapper">
                        <div className="ticker-items">
                            <span className="ticker-intro">CONTAMOS CON UNA AMPLIA GAMA DE PRODUCTOS:</span>
                            <span>Servidores</span>
                            <span className="separator">•</span>
                            <span>Impresoras</span>
                            <span className="separator">•</span>
                            <span>Gabinetes</span>
                            <span className="separator">•</span>
                            <span>Patch cord</span>
                            <span className="separator">•</span>
                            <span>Cables UTP</span>
                            <span className="separator">•</span>
                            <span>Productos eléctricos</span>
                            <span className="separator">•</span>
                            <span>Luces LED antiexplosivos</span>
                            <span className="separator">•</span>
                            <span>Surtidores</span>
                            <span className="separator">•</span>
                            {/* Duplicado para loop infinito suave *
                            <span className="ticker-intro">CONTAMOS CON UNA AMPLIA GAMA DE PRODUCTOS:</span>
                            <span>Servidores</span>
                            <span className="separator">•</span>
                            <span>Impresoras</span>
                            <span className="separator">•</span>
                            <span>Gabinetes</span>
                            <span className="separator">•</span>
                            <span>Patch cord</span>
                            <span className="separator">•</span>
                            <span>Cables UTP</span>
                            <span className="separator">•</span>
                            <span>Productos eléctricos</span>
                            <span className="separator">•</span>
                        </div>
                    </div>
                </div>
                */}

                <div className="top-right">
                    <span className="font-contact">Av. Augusto B. Leguía 307 - S.M.P</span>
                </div>
            </div>
        </div>

        {/*Navbar principal con dinamica para el scroll*/}
        <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>

            {/*Botón Hamburguesa (Móviles)*/}
            <button className="hamburger-btn" id="openSidebarBtn" aria-label="Abrir menú" onClick={toggleSidebar}>
                <Icon icon="bx:menu-alt-left" />
            </button>

            {/*Logo*/}
            <Link to="/" className="logo">
                <img src={logoprincipal} alt="Logo RC ingenieros"/>
            </Link>

            {/*Overlay oscurecedor*/}
            <div className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`} 
        onClick={toggleSidebar}></div>

            {/*Contenedor del Sidebar y Menú*/}
            <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
                <button className="close-btn" id="closeSidebarBtn" aria-label="Cerrar menú" onClick={toggleSidebar}>
                    <Icon icon="carbon:close" />
                </button>

                {/*Logo dentro del Menú*/}
                <Link to="/" className="sidebar-logo">
                    <img src={logorc1} alt="Logo RC ingenieros"/>
                </Link>

                <ul className="menu">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li className={`servicios ${isServiciosOpen ? "activo" : ""}`}
                    onClick={() => {
                        setIsServiciosOpen(!isServiciosOpen); 
                        navigate("/servicios");
                    }}>
                        Servicios <Icon icon="bx:chevron-down" />

                        <div className="dropdown" onClick={(e) => e.stopPropagation()}>

                            <Link to="/servicios/soporte-tecnico" className="item">
                                <div className="icon-servicio">
                                    <Icon icon="fluent:person-settings-20-regular" />
                                </div>
                                <span>Soporte Técnico a Estaciones GNV GLP GNL y Líquidos</span>
                            </Link>

                            <Link to="/servicios/facturacion-electronica" className="item">
                                <div className="icon-servicio">
                                    <Icon icon="fluent:money-calculator-24-regular" />
                                </div>
                                <span>Facturación Electrónica APUFACT</span>
                            </Link>

                            <Link to="/servicios/apugescom" className="item">
                                <div className="icon-servicio">
                                    <Icon icon="mdi:gasoline" />
                                </div>
                                <span>Sistema de Gestión de Combustible APUGESCOM</span>
                            </Link>

                            <Link to="/servicios/pozos-a-tierra" className="item">
                                <div className="icon-servicio">
                                    <Icon icon="pepicons-pop:electricity-circle" />
                                </div>
                                <span>Medición y Construcción de Pozos a Tierra</span>
                            </Link>

                            <Link to="/servicios/DesarrolloSoftware" className="item">
                                <div className="icon-servicio">
                                    <Icon icon="lucide:code-2" />
                                </div>
                                <span>Desarrollo de Software</span>
                            </Link>

                        </div>
                    </li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>

                {/*Sección de contacto en el Sidebar*/}
                <div className="sidebar-contact">
                    <div className="contact-item">
                        <div className="icon-circle">
                            <Icon icon="entypo:old-phone" />
                        </div>
                        <span className="font-contact">(01) 500-5584</span>
                    </div>
                    <div className="contact-item">
                        <div className="icon-circle">
                            <Icon icon="material-symbols:mail" />
                        </div>
                        <span className="font-contact">ventas@rcingenieros.com</span>
                    </div>
                </div>

                {/*Redes sociales en el Sidebar*/}
                <div className="sidebar-socials">
                    <a href="https://www.facebook.com/profile.php?id=61567695884528" target="_blank"
                        className="facebook-icon">
                        <Icon icon="line-md:facebook" />
                    </a>
                    <a href="https://www.instagram.com/rcingenierosof/" target="_blank" className="ig-icon">
                        <Icon icon="line-md:instagram" />
                    </a>
                    <a href="https://www.tiktok.com/@rcingenierosoficial" target="_blank" className="tiktok-icon">
                        <Icon icon="line-md:tiktok" />
                    </a>
                    <a href="https://www.youtube.com/@RICARDOCALDERONINGENIEROSSAC" target="_blank"
                        className="youtube-icon">
                        <Icon icon="line-md:youtube" />
                    </a>
                </div>
            </div>


            <div className="nav-right">
                {/*Contacto*/}
                <div className="contacto">
                    <div className="icon-phone">
                        <Icon icon="mage:phone-call-fill" />
                    </div>
                    <div className="info-contact">
                        <span style={{fontSize: '15px', fontWeight: '600', color: 'black'}}> (01) 500 5583</span>
                        <span>Atencion: 8:00 am - 6:00 pm</span>
                    </div>
                </div>

                <div className="redes-sociales">
                    <a href="https://www.facebook.com/profile.php?id=61567695884528" target="_blank" className="facebook-icon">
                        <Icon icon="line-md:facebook" />
                    </a>
                    <a href="https://www.instagram.com/rcingenierosof/" target="_blank" className="ig-icon">
                        <Icon icon="line-md:instagram" />
                    </a>
                    <a href="https://www.tiktok.com/@rcingenierosoficial" target="_blank" className="tiktok-icon">
                        <Icon icon="line-md:tiktok" />
                    </a>
                    <a href="https://www.youtube.com/@RICARDOCALDERONINGENIEROSSAC" target="_blank" className="youtube-icon">
                        <Icon icon="line-md:youtube" />
                    </a>
                </div>

            </div>
        </nav>
        </header>
        </>
  );
}
