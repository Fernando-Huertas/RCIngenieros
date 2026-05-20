import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import './Apufact.css'
import heroImg from '../assets/servicio247.jpeg'
import bgCardImg from '../assets/imgapufact.png'
import heroapufact from '../assets/heroapufact.jpg'
import apufactmain from '../assets/apufactmain.jpg'
import logoAPUFACT from '../assets/LogoAPUFACT.webp'
import imgFeatures from '../assets/apufactfeatures.jpg'
import funcionaApufact from '../assets/funcionapufact.jpg'
import logoSunat from '../assets/verificado-por-sunat.webp'

export default function Apufact() {
    const [isMainVisible, setIsMainVisible] = useState(false);
    const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
    const [isHowItWorksVisible, setIsHowItWorksVisible] = useState(false);
    const [isTrustVisible, setIsTrustVisible] = useState(false);

    const mainRef = useRef(null);
    const featuresRef = useRef(null);
    const howItWorksRef = useRef(null);
    const trustRef = useRef(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.15 };
        
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === mainRef.current) setIsMainVisible(true);
                    if (entry.target === featuresRef.current) setIsFeaturesVisible(true);
                    if (entry.target === howItWorksRef.current) setIsHowItWorksVisible(true);
                    if (entry.target === trustRef.current) setIsTrustVisible(true);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        if (mainRef.current) observer.observe(mainRef.current);
        if (featuresRef.current) observer.observe(featuresRef.current);
        if (howItWorksRef.current) observer.observe(howItWorksRef.current);
        if (trustRef.current) observer.observe(trustRef.current);

        return () => observer.disconnect();
    }, []);

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
            <section className="apufact-main-section" ref={mainRef}>
                <div className={`apufact-main-container ${isMainVisible ? 'animate' : ''}`}>
                    {/* El contenedor con fondo de imagen y overlay oscuro */}
                    <div className="apufact-card" style={{ backgroundImage: `url(${apufactmain})` }}>
                        <div className="apufact-card-overlay"></div>
                        
                        <div className="apufact-card-content">
                            <h2 className="apufact-title">Gestión de Facturación Electrónica</h2>
                            <h3 className="apufact-brand-title">APUFACT</h3>
                            
                            <div className="apufact-logo-container">
                                <img src={logoAPUFACT} alt="Logo APUFACT" className="apufact-logo" />
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

            {/* CARACTERISTICAS DE APUFACT */}
            <section className="apufact-features-section" ref={featuresRef}>
                <div className={`apufact-features-container ${isFeaturesVisible ? 'animate' : ''}`}>
                    <div className="apufact-features-text">
                        <h2 className="apufact-features-subtitle">Caracteristicas de</h2>
                        <h2 className="apufact-features-maintitle">APUFACT</h2>
                        <p className="apufact-features-description">
                            APUFACT es un sistema de Gestión de Comprobantes Electrónicos (CPE) perfecto para tu empresa, el cual permite la emisión y el envío de los CPE a SUNAT de la manera más fácil y dinámica, el sistema es cloud y está hecho para todo tipo de negocios y empresas
                        </p>
                        <h3 className="apufact-features-benefits-title">Beneficios:</h3>
                        <ul className="apufact-features-list">
                            <li><Icon icon="mdi:check-decagram-outline" className="apufact-feature-icon" /> Optimiza y agiliza el proceso de envío de tus CPE.</li>
                            <li><Icon icon="mdi:check-decagram-outline" className="apufact-feature-icon" /> Visualiza tu información desde tu celular, tablet o PC</li>
                            <li><Icon icon="mdi:check-decagram-outline" className="apufact-feature-icon" /> Integracion con tu punyo de venta o ERP</li>
                            <li><Icon icon="mdi:check-decagram-outline" className="apufact-feature-icon" /> Autorizados por SUNAT, somos proveedor de servicios electrónicos(PSE-OSE)</li>
                            <li><Icon icon="mdi:check-decagram-outline" className="apufact-feature-icon" /> Certificación ISO 27001(seguridad de la información)</li>
                            <li><Icon icon="mdi:check-decagram-outline" className="apufact-feature-icon" /> Información segura en Amazon Web Service (AWS)</li>
                        </ul>
                    </div>
                    <div className="apufact-features-image">
                        <img src={imgFeatures} alt="Sistema APUFACT en monitor" />
                    </div>
                </div>
            </section>

            {/* COMO FUNCIONA APUFACT */}
            <section className="apufact-how-it-works-section" ref={howItWorksRef}>
                <div className="apufact-how-it-works-bg-decoration dec-left"></div>
                <div className="apufact-how-it-works-bg-decoration dec-right"></div>
                
                <div className={`apufact-how-it-works-container ${isHowItWorksVisible ? 'animate' : ''}`}>
                    <div className="how-it-works-header">
                        <span className="how-it-works-badge">Flujo de Trabajo</span>
                        <h2 className="how-it-works-title">
                            Como funciona <span className="highlight-blue">APUFACT</span>
                        </h2>
                        <p className="how-it-works-subtitle">
                            Descubre lo fácil que es gestionar tus comprobantes electrónicos en tiempo real y con total seguridad.
                        </p>
                    </div>
                    
                    <div className="how-it-works-image-wrapper">
                        <div className="how-it-works-glass-card">
                            <img src={funcionaApufact} alt="Flujo de cómo funciona APUFACT" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN RESPALDOS Y CERTIFICACIONES */}
            <section className="apufact-trust-section" ref={trustRef}>
                <div className={`apufact-trust-container ${isTrustVisible ? 'animate' : ''}`}>
                    
                    {/* Tarjeta 1: SUNAT */}
                    <div className="trust-card">
                        <div className="trust-card-image">
                            <img src={logoSunat} alt="Verificado por SUNAT" className="trust-logo-sunat" />
                        </div>
                        <div className="trust-card-content">
                            <h3 className="trust-card-title">Certificados por SUNAT</h3>
                            <p className="trust-card-text">
                                Somos Proveedor de Servicios Electrónicos (PSE), autorizados por SUNAT para el servicio de Facturación Electrónica, contamos con Certificación ISO 27001 garantizando así la seguridad de su información.
                            </p>
                        </div>
                    </div>

                    {/* Tarjeta 2: AWS */}
                    <div className="trust-card reverse">
                        <div className="trust-card-image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="Amazon Web Services" className="trust-logo-aws" />
                        </div>
                        <div className="trust-card-content">
                            <h3 className="trust-card-title">Infraestructura de Clase Mundial</h3>
                            <p className="trust-card-text">
                                Nuestra plataforma está alojada en la infraestructura cloud de Amazon Web Services (AWS), garantizando disponibilidad 24/7, escalabilidad y protección de datos a nivel mundial.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
