import { Icon } from '@iconify/react'
import './Apufact.css'
import heroImg from '../assets/servicio247.jpeg'
import bgCardImg from '../assets/imgapufact.png'
import heroapufact from '../assets/heroapufact.jpg'
import apufactmain from '../assets/apufactmain.jpg'
import logoApufact from '../assets/logoAPUFACT.webp'

export default function Apufact() {
    return (
        <div className="apufact-page">
            {/* HERO SECTION - Igual al de Soporte Técnico según la imagen */}
            <section className="apufact-hero" >
                <div className="apufact-hero-overlay"></div>
                <div className="apufact-hero-container">
                    <div className="apufact-hero-text">
                        <h1>Soporte Tecnico 24/7 a estaciones de servicio</h1>
                    </div>
                </div>
            </section>

            {/* SECCIÓN PRINCIPAL: GESTIÓN DE FACTURACIÓN */}
            <section className="apufact-main-section">
                <div className="apufact-main-container">
                    {/* El contenedor con fondo de imagen y overlay oscuro */}
                    <div className="apufact-card" style={{ backgroundImage: `url(${apufactmain})` }}>
                        <div className="apufact-card-overlay"></div>
                        
                        <div className="apufact-card-content">
                            <h2 className="apufact-title">Gestión de Facturación Electrónica</h2>
                            <h3 className="apufact-brand-title">APUFACT</h3>
                            
                            <div className="apufact-logo-container">
                                <img src={logoApufact} alt="Logo APUFACT" className="apufact-logo" />
                            </div>
                            
                            <p className="apufact-description">
                                La Gestión de Facturación Electrónica es el camino más seguro para mejorar la eficiencia de sus procesos contables y logísticos, este proceso implica la emisión, envío y validación segura de comprobantes de pago electrónicos (como facturas, boletas y guías de remisión) frente a la SUNAT. Con APUFACT tendrás la facturación de manera fácil, rápida y segura.
                            </p>
                            
                            <a href="#contacto" className="apufact-cta-button">
                                Contáctanos
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
