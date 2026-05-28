import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import './SoporteTecnico.css'
import soporteabout from '../assets/soporteabout.jpeg'
import integracion from '../assets/integracion.jpg'
import accion2 from '../assets/accion2.jpg'
import logognv from '../assets/gnvcontainer.jpg'
import eess from '../assets/EESS.webp'



export default function SoporteTecnico() {
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);
    const [isApufactVisible, setIsApufactVisible] = useState(false);
    const [isCtaVisible, setIsCtaVisible] = useState(false);
    const [isGnvVisible, setIsGnvVisible] = useState(false);
    const [isMantenimientoVisible, setIsMantenimientoVisible] = useState(false);

    const aboutRef = useRef(null);
    const galleryRef = useRef(null);
    const apufactRef = useRef(null);
    const ctaRef = useRef(null);
    const gnvRef = useRef(null);
    const mantenimientoRef = useRef(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.15 };
        
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === aboutRef.current) setIsAboutVisible(true);
                    if (entry.target === galleryRef.current) setIsGalleryVisible(true);
                    if (entry.target === apufactRef.current) setIsApufactVisible(true);
                    if (entry.target === ctaRef.current) setIsCtaVisible(true);
                    if (entry.target === gnvRef.current) setIsGnvVisible(true);
                    if (entry.target === mantenimientoRef.current) setIsMantenimientoVisible(true);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        if (aboutRef.current) observer.observe(aboutRef.current);
        if (galleryRef.current) observer.observe(galleryRef.current);
        if (apufactRef.current) observer.observe(apufactRef.current);
        if (ctaRef.current) observer.observe(ctaRef.current);
        if (gnvRef.current) observer.observe(gnvRef.current);
        if (mantenimientoRef.current) observer.observe(mantenimientoRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="soporte-page">
            <section className="soporte-hero">
                <div className="soporte-hero-container">
                    <div className="soporte-hero-text">
                       
                        <h1>
                            Soporte Técnico a Estaciones <br />
                            <span className="soporte-highlight">GNV GLP GNL y Líquidos</span>
                        </h1>
                                   
                    </div>
                </div>
            </section>
            <section className="soporte-about" ref={aboutRef}>
                <div className={`soporte-about-container ${isAboutVisible ? 'animate' : ''}`}>
                    <div className="soporte-about-image">                                                                
                        <img src={soporteabout} alt="Técnico de servicio" />
                    </div>
                    
                    <div className="soporte-about-content">
                        <span className="soporte-section-badge">Soporte Técnico</span>
                        <h2>Estaciones de servicio GNV/GLP/GNL Líquidos y Urea</h2>
                        <p>
                            Nuestro servicio de Soporte y Mantenimiento garantiza la continuidad total de su operación.
                             Entendemos que su negocio nunca se detiene, por ello, ofrecemos atención 24 horas al día,
                              los 7 días de la semana. Brindamos un soporte personalizado que se adapta a su necesidad,
                               ya sea mediante asistencia presencial inmediata en sitio o a través de una asistencia remota
                                eficiente para resolver cualquier incidencia con rapidez.
                        </p>
            
                        <div className="soporte-about-features">
                            {[
                                "Personal altamente capacitado para resolver incidencias.",
                                "Asistencia técnica remota 24 x 7.",
                                "Asistencia técnica presencial, realizado por medio de herramientas automatizadas.",
                                "Personal motorizados para un asistencia rápida donde se requiera.",
                                "Especialistas en el sistema GAS STATION, APUGESCOM y APUFACT",
                                "Contamos con Backup de equipos."                              
                            ].map((texto, index) => (
                                <div key={index} className="about-feature-item">
                                    <Icon icon="solar:check-circle-bold" className="feature-check-icon" />
                                    <span>{texto}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN PREMIUM: GALERÍA DE TRABAJOS (16:9) */}
            <section className="soporte-gallery" ref={galleryRef}>
                <div className={`gallery-container ${isGalleryVisible ? 'animate' : ''}`}>
                    <div className="gallery-header">
                        <span className="soporte-section-badge">Nuestro Trabajo</span>
                        <h2>Excelencia en Acción</h2>
                        <p>Descubra la calidad y precisión técnica que aplicamos en cada uno de nuestros proyectos de mantenimiento e instalación.</p>
                    </div>

                    <div className="gallery-grid">
                        {/* Placeholder 1 */}
                        <div className="gallery-item">
                            <div className="gallery-image-wrapper">
                                {/* Cuando tengas la foto, cambia el src por tu imagen importada */}
                                <img src="https://placehold.co/1920x1080/1a2b4c/ffffff?text=FOTO+1+(16:9)" alt="Trabajo en estación 1" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <Icon icon="solar:camera-bold-duotone" className="overlay-icon" />
                                        <h3>Mantenimiento de Surtidores</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder 2 */}
                        <div className="gallery-item">
                            <div className="gallery-image-wrapper">
                                <img src="https://placehold.co/1920x1080/2a3b5c/ffffff?text=FOTO+2+(16:9)" alt="Trabajo en estación 2" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <Icon icon="solar:settings-bold-duotone" className="overlay-icon" />
                                        <h3>Configuración de Software</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder 3 */}
                        <div className="gallery-item">
                            <div className="gallery-image-wrapper">
                                <img src="https://placehold.co/1920x1080/10b981/ffffff?text=FOTO+3+(16:9)" alt="Trabajo en estación 3" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <Icon icon="solar:shield-check-bold-duotone" className="overlay-icon" />
                                        <h3>Calibración de Equipos</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Placeholder 4 */}
                        <div className="gallery-item">
                            <div className="gallery-image-wrapper">
                                <img src="https://placehold.co/1920x1080/36A6EB/ffffff?text=FOTO+4+(16:9)" alt="Trabajo en estación 4" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <Icon icon="solar:bolt-bold-duotone" className="overlay-icon" />
                                        <h3>Asistencia Técnica</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="soporte-apufact" ref={apufactRef}>
                <div className={`apufact-container ${isApufactVisible ? 'animate' : ''}`}>
                    <div className="apufact-header">
                        <h2>Integración con <span className="apufact-highlight">APUGESCOM</span> <strong>Y</strong> <span className="apufact-highlight">APUFACT</span></h2>
                        <p>Sistemas avanzados para el control total y facturación electrónica de su estación de servicio.</p>
                    </div>
                    <div className="apufact-image-wrapper">
                        <img src={integracion} alt="Integración APUGESCOM y APUFACT" />
                    </div>
                </div>
            </section>

            {/* <section className="soporte-services">
                <div className="services-container">
                    <div className="services-header">
                        <span className="services-subtitle">Especialistas a su Servicio</span>
                        <h2>Soporte Integral para su Estación</h2>
                        <p>Brindamos soluciones técnicas de alta precisión para asegurar que su negocio nunca se detenga.</p>
                    </div>
                    
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon-box">
                                <Icon icon="solar:settings-bold-duotone" />
                            </div>
                            <h3>Software y Configuración</h3>
                            <p>Instalación y mantenimiento de software especializado para el control de ventas y gestión de combustible.</p>
                            <ul className="service-list">
                                <li>Configuración de surtidores</li>
                                <li>Actualización de licencias</li>
                                <li>Backup de datos críticos</li>
                            </ul>
                        </div>

                        <div className="service-card">
                            <div className="service-icon-box">
                                <Icon icon="solar:tools-bold-duotone" />
                            </div>
                            <h3>Mantenimiento Preventivo</h3>
                            <p>Programas de revisión técnica periódica para evitar fallos inesperados y prolongar la vida útil de sus equipos.</p>
                            <ul className="service-list">
                                <li>Limpieza de tarjetas electrónicas</li>
                                <li>Calibración de sistemas</li>
                                <li>Revisión de conexiones</li>
                            </ul>
                        </div>

                        <div className="service-card">
                            <div className="service-icon-box">
                                <Icon icon="solar:shield-check-bold-duotone" />
                            </div>
                            <h3>Asistencia 24/7</h3>
                            <p>Contamos con un equipo de guardia listo para atender emergencias críticas en cualquier momento del día.</p>
                            <ul className="service-list">
                                <li>Soporte remoto inmediato</li>
                                <li>Visitas técnicas de urgencia</li>
                                <li>Monitoreo de sistemas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="soporte-cta" ref={ctaRef}>
                <div className={`cta-container ${isCtaVisible ? 'animate' : ''}`}>
                    <div className="cta-content">
                        <div className="cta-text">
                            <h2>INVIERTE CON SEGURIDAD:</h2>
                            <p>Más de 15 años de experiencia nos respaldan como pioneros en EESS.</p>
                        </div>
                        <div className="cta-action">
                            <a href="tel:+51943853234" className="cta-button-phone">
                                <div className="cta-icon-wrapper">
                                    <Icon icon="solar:phone-bold" />
                                </div>
                                <span>+51 943853234</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="soporte-gnv" ref={gnvRef}>
                <div className={`gnv-container ${isGnvVisible ? 'animate' : ''}`}>
                    <div className="gnv-header">
                        <h2>Sistema de Carga Inteligente de GNV</h2>
                        <span className="soporte-section-badge">SISTEMA GAS STATION – AUTORIZADO POR COFIDE-INFOGAS</span>
                    </div>
                    
                    <div className="gnv-content-grid">
                        <div className="gnv-image">
                            <img src={logognv} alt="Gas Natural Vehicular GNV" />
                        </div>
                        
                        <div className="gnv-info">
                            <p className="gnv-intro">
                                Somos pioneros en la Instalación del Sistema de Carga Inteligente de GNV en el mercado peruano, el sistema Gas Station con una base de datos centralizada que permite brindar información fidedigna a la entidad competente con la finalidad de permitir el despacho de GNV en tiempo real.
                            </p>
                            
                            <div className="gnv-features">
                                {[
                                    "Beneficios Ecológicos: El GNV es un combustible ecoamigable porque permite al vehículo generar menos emisiones CO2 por cada kilómetro recorrido. De esta manera contribuye a la conservación de la naturaleza y el medio ambiente.",
                                    "Beneficios Económicos:  Con el GNV se ahorra en promedio 60% frente a la gasolina de 90 octanos.",
                                    "Beneficios de Seguridad: Se distribuye y comercializa en un sistema seguro, controlado por un software informático que le da confianza a los usuarios, lo realizan con los parámetros de seguridad que dicta la norma."
                                ].map((feature, index) => {
                                    const [title, desc] = feature.split(': ');
                                    return (
                                        <div key={index} className="gnv-feature-item">
                                            <div className="gnv-feature-icon">
                                                <Icon icon="el:check" />
                                            </div>
                                            <p className="gnv-feature-text">
                                                <strong>{title}:</strong> {desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Soporte y Mantenimiento para EESS */}
            <section className="soporte-mantenimiento" ref={mantenimientoRef}>
                <div className={`mantenimiento-container ${isMantenimientoVisible ? 'animate' : ''}`}>
                    <div className="mantenimiento-content">
                        <h2>Soporte y Mantenimiento<br/>para EESS</h2>
                        
                        <h3 className="mantenimiento-subtitle">Beneficios:</h3>
                        
                        <div className="mantenimiento-features-list">
                            {[
                                "Servicio de Soporte 24 x 7.",
                                "Backup de Equipos y Suministros de computo",
                                "Backup de Equipos y Suministros Eléctricos.",
                                "Impresoras de backups.",
                                "Monitoreo constante de las EESS.",
                                "Realizamos migraciones y actualizaciones."
                            ].map((item, index) => (
                                <div key={index} className="mantenimiento-feature-item">
                                    <div className="mantenimiento-feature-icon">
                                        <Icon icon="solar:verified-check-bold" />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mantenimiento-image">
                        {/* Reemplazar con la imagen real de la estación de servicio */}
                        <img src={eess} alt="Soporte y Mantenimiento EESS" />
                    </div>
                </div>
            </section>
        </div>
    )
}
