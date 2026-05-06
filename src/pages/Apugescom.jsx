import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import './Apugescom.css'

// Assets
import sectionBg from '../assets/sectionapugescom.png'
import aboutImg from '../assets/img1header.jfif'
import diagramImg from '../assets/funcionapufact.jpg'
import soporteImg from '../assets/soporteabout.jpeg'
import eessImg from '../assets/EESS.webp'
import imgApugescom from '../assets/imgapugescom.png'

export default function Apugescom() {
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
    const [isDiagramVisible, setIsDiagramVisible] = useState(false);
    const [isSoporteVisible, setIsSoporteVisible] = useState(false);
    const [isProyectosVisible, setIsProyectosVisible] = useState(false);
    const [isQuoteVisible, setIsQuoteVisible] = useState(false);
    const [isCtaVisible, setIsCtaVisible] = useState(false);

    const aboutRef = useRef(null);
    const featuresRef = useRef(null);
    const diagramRef = useRef(null);
    const soporteRef = useRef(null);
    const proyectosRef = useRef(null);
    const quoteRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.15 };
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === aboutRef.current) setIsAboutVisible(true);
                    if (entry.target === featuresRef.current) setIsFeaturesVisible(true);
                    if (entry.target === diagramRef.current) setIsDiagramVisible(true);
                    if (entry.target === soporteRef.current) setIsSoporteVisible(true);
                    if (entry.target === proyectosRef.current) setIsProyectosVisible(true);
                    if (entry.target === quoteRef.current) setIsQuoteVisible(true);
                    if (entry.target === ctaRef.current) setIsCtaVisible(true);
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        if (aboutRef.current) observer.observe(aboutRef.current);
        if (featuresRef.current) observer.observe(featuresRef.current);
        if (diagramRef.current) observer.observe(diagramRef.current);
        if (soporteRef.current) observer.observe(soporteRef.current);
        if (proyectosRef.current) observer.observe(proyectosRef.current);
        if (quoteRef.current) observer.observe(quoteRef.current);
        if (ctaRef.current) observer.observe(ctaRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="apugescom-page">
            {/* HERO */}
            <section className="apugescom-hero">
                <div className="apugescom-hero-overlay"></div>
                <div className="apugescom-hero-container">
                    <div className="apugescom-hero-text">
                        <h1>
                            Sistema de Gestión de Combustible{' '}
                            <span className="apugescom-hero-highlight">APUGESCOM</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* ABOUT: LAYOUT EJECUTIVO (Imagen + Texto) */}
            <section className="apugescom-about" ref={aboutRef}>
                <div className={`apugescom-about-container ${isAboutVisible ? 'animate' : ''}`}>
                    <div className="apugescom-about-image-side">
                        <div className="apugescom-about-image-frame">
                            <img src={aboutImg} alt="Estación de servicio" />
                        </div>
                        <div className="apugescom-about-accent-box">
                            <img src={imgApugescom} alt="Logo APUGESCOM" />
                        </div>
                    </div>
                    <div className="apugescom-about-text-side">
                        <span className="apugescom-about-label">Sobre APUGESCOM</span>
                        <h2>Sistemas de Gestión de Combustibles <strong>APUGESCOM</strong></h2>
                        <p>
                            El sistema de gestión de combustibles APUGESCOM es un programa diseñado de manera
                            exclusiva con la finalidad de automatizar y administrar las Estaciones de Servicio.
                            Este programa reporta las ventas y operaciones de cada estación permitiéndole
                            conocer y administrar adecuadamente su negocio.
                        </p>
                        <div className="apugescom-about-highlights">
                            <div className="highlight-pill">
                                <Icon icon="solar:monitor-bold-duotone" />
                                <span>Fácil Manejo</span>
                            </div>
                            <div className="highlight-pill">
                                <Icon icon="solar:chart-2-bold-duotone" />
                                <span>Reportes Centralizados</span>
                            </div>
                            <div className="highlight-pill">
                                <Icon icon="solar:link-round-bold-duotone" />
                                <span>Integrado con APUFACT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES: CUADRÍCULA DE TARJETAS CON ÍCONO */}
            <section className="apugescom-features" ref={featuresRef}>
                <div className={`apugescom-features-wrapper ${isFeaturesVisible ? 'animate' : ''}`}>
                    <div className="apugescom-features-header">
                        <span className="apugescom-section-badge">Características</span>
                        <h2>¿Por qué elegir <span className="apugescom-gradient-text">APUGESCOM</span>?</h2>
                        <p>Solución integral para el control total de sus Estaciones de Servicios en GLP, GNV, Líquidos y Urea.</p>
                    </div>
                    <div className="apugescom-features-grid">
                        {[
                            { icon: "solar:server-bold-duotone", title: "Ventas Centralizadas", desc: "Centraliza las ventas de todas las islas de dispensadores en un solo panel." },
                            { icon: "solar:gas-station-bold-duotone", title: "Control de Inventario", desc: "Control exacto del inventario del combustible en tiempo real." },
                            { icon: "solar:tag-price-bold-duotone", title: "Cambio de Precios", desc: "Cambio de precios al instante en todos los dispensadores conectados." },
                            { icon: "solar:printer-bold-duotone", title: "Emisión de Tickets", desc: "Emisión automática de tickets al finalizar despacho en las islas." },
                            { icon: "solar:chart-bold-duotone", title: "Reportes de Ventas", desc: "Variedad de reportes de ventas, recaudaciones y control de ingresos." },
                            { icon: "solar:cart-large-2-bold-duotone", title: "Punto de Venta", desc: "Integración completa para el Punto de Venta (Market) de la estación." },
                            { icon: "solar:users-group-rounded-bold-duotone", title: "Fidelización", desc: "Control del Criss o Fidelización de Flotas para sus clientes frecuentes." },
                            { icon: "solar:settings-bold-duotone", title: "Multimarca", desc: "Compatible con Wayne, Gilbarco, Tokheim, Tatsumo, Datacontrol y Kraus." }
                        ].map((item, index) => (
                            <div className="apugescom-feature-card" key={index}>
                                <div className="apugescom-feature-card-icon">
                                    <Icon icon={item.icon} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DIAGRAMA: CÓMO FUNCIONA */}
            <section className="apugescom-how" ref={diagramRef}>
                <div className="apugescom-how-deco apugescom-how-deco-l"></div>
                <div className="apugescom-how-deco apugescom-how-deco-r"></div>
                <div className={`apugescom-how-wrapper ${isDiagramVisible ? 'animate' : ''}`}>
                    <div className="apugescom-how-header">
                        <span className="apugescom-section-badge">Flujo de Trabajo</span>
                        <h2>Como funciona <span className="apugescom-gradient-text">APUGESCOM</span></h2>
                        <p>Descubre cómo nuestro sistema gestiona de forma integral cada proceso operativo de su estación de servicio.</p>
                    </div>
                    <div className="apugescom-how-img-wrap">
                        <div className="apugescom-how-glass">
                            <img src={diagramImg} alt="Diagrama de funcionamiento APUGESCOM" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SOPORTE Y MANTENIMIENTO */}
            <section className="apugescom-module" ref={soporteRef}>
                <div className={`apugescom-module-container ${isSoporteVisible ? 'animate' : ''}`}>
                    <div className="apugescom-module-card">
                        <div className="apugescom-module-accent"></div>
                        <div className="apugescom-module-body">
                            <div className="apugescom-module-info">
                                <h3>Soporte y Mantenimiento para EESS</h3>
                                <p>Nuestro equipo técnico garantiza la continuidad operativa de su estación las 24 horas del día.</p>
                                <ul className="apugescom-module-list">
                                    <li><Icon icon="solar:verified-check-bold" className="mod-icon"/> Servicio de Soporte 24 x 7.</li>
                                    <li><Icon icon="solar:verified-check-bold" className="mod-icon"/> Backup de Equipos y Suministros de cómputo.</li>
                                    <li><Icon icon="solar:verified-check-bold" className="mod-icon"/> Backup de Equipos y Suministros Eléctricos.</li>
                                    <li><Icon icon="solar:verified-check-bold" className="mod-icon"/> Impresoras de backups.</li>
                                    <li><Icon icon="solar:verified-check-bold" className="mod-icon"/> Monitoreo constante de las EESS.</li>
                                    <li><Icon icon="solar:verified-check-bold" className="mod-icon"/> Realizamos migraciones y actualizaciones.</li>
                                </ul>
                            </div>
                            <div className="apugescom-module-img">
                                <img src={soporteImg} alt="Soporte EESS" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROYECTOS INTEGRALES */}
            <section className="apugescom-module" ref={proyectosRef}>
                <div className={`apugescom-module-container ${isProyectosVisible ? 'animate' : ''}`}>
                    <div className="apugescom-module-card">
                        <div className="apugescom-module-accent accent-green"></div>
                        <div className="apugescom-module-body reverse">
                            <div className="apugescom-module-info">
                                <h3>Proyectos Integrales para EESS</h3>
                                <p>Ejecutamos proyectos completos de infraestructura tecnológica y eléctrica a nivel nacional.</p>
                                <ul className="apugescom-module-list">
                                    <li><Icon icon="solar:verified-check-bold" className="mod-icon mod-green"/> Redes y cableado estructurado para comunicación.</li>
                                    <li><Icon icon="solar:verified-check-bold" className="mod-icon mod-green"/> Suministro e Instalación de Tableros Eléctricos.</li>
                                    <li><Icon icon="solar:verified-check-bold" className="mod-icon mod-green"/> Sistemas de Puesta a Tierra.</li>
                                    <li><Icon icon="solar:verified-check-bold" className="mod-icon mod-green"/> Instalaciones Eléctricas.</li>
                                    <li><Icon icon="solar:verified-check-bold" className="mod-icon mod-green"/> Suministro de Equipos: Cómputo, Redes.</li>
                                </ul>
                            </div>
                            <div className="apugescom-module-img">
                                <img src={eessImg} alt="Proyectos Integrales EESS" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUOTE BANNER */}
            <section className="apugescom-quote" ref={quoteRef}>
                <div className={`apugescom-quote-container ${isQuoteVisible ? 'animate' : ''}`}>
                    <div className="apugescom-quote-mark">"</div>
                    <p className="apugescom-quote-text">
                        No experimentes, invierte seguro. Nuestros más de 15 años de experiencia nos avalan
                        como los pioneros en EESS, brindando la garantía que tu inversión exige.
                    </p>
                    <span className="apugescom-quote-author">— RC Ingenieros S.A.C.</span>
                </div>
            </section>

            {/* CTA */}
            <section className="apugescom-cta" ref={ctaRef}>
                <div className={`apugescom-cta-container ${isCtaVisible ? 'animate' : ''}`}>
                    <h2>¿Listo para optimizar su estación?</h2>
                    <p>Contáctenos y un especialista le mostrará cómo APUGESCOM puede transformar su operación.</p>
                    <a href="tel:+51943853234" className="apugescom-cta-btn">
                        <Icon icon="solar:phone-bold" className="cta-phone-icon" />
                        Llámanos: +51 943 853 234
                    </a>
                </div>
            </section>
        </div>
    )
}
