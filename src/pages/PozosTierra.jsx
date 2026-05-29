import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import './PozosTierra.css'

// Assets
import heroBg from '../assets/heropozoatierra.jpg'
import measuringImg from '../assets/measuring.jpeg'
import riskImg from '../assets/pozo-1.webp'
import normativeImg from '../assets/pozo-cumplimiento.jpg'
import equipmentImg from '../assets/pozo-vidautil.webp'
import ctaBg from '../assets/slide4.png'

export default function PozosTierra() {
    const [isVisible, setIsVisible] = useState({
        about: false,
        services: false,
        benefits: false,
        cta: false
    });

    const refs = {
        about: useRef(null),
        services: useRef(null),
        benefits: useRef(null),
        cta: useRef(null)
    };

    useEffect(() => {
        const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const key = Object.keys(refs).find(k => refs[k].current === entry.target);
                    if (key) {
                        setIsVisible(prev => ({ ...prev, [key]: true }));
                    }
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        Object.values(refs).forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="pozos-premium-page">
            {/* HERO */}
            <section className="pozos-hero">
                <div className="pozos-hero-overlay"></div>
                <div className="pozos-hero-container">
                    <div className="pozos-hero-text">
                        <h1>
                            Medición y Construcción de <br />
                            <span className="pozos-hero-highlight">Pozos a Tierra</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="pozos-premium-about" ref={refs.about}>
                <div className="pozos-bg-elements">
                    <div className="pozos-circle-element"></div>
                </div>
                <div className={`pozos-premium-about-container ${isVisible.about ? 'is-visible' : ''}`}>
                    <div className="pozos-about-glass-card">
                        <div className="pozos-about-glass-border"></div>
                        <div className="pozos-about-content">
                            <Icon icon="solar:shield-warning-bold-duotone" className="pozos-about-icon" />
                            <h2>Garantizamos el <span>cumplimiento normativo</span> y la <span>seguridad total</span></h2>
                            <p>
                                Especialistas en la Construcción, Medición y Mantenimiento de sistemas de
                                puesta a tierra. Garantizamos que tus instalaciones operen de forma eficiente
                                para salvaguardar la seguridad de individuos, maquinaria y estructuras frente
                                a descargas eléctricas. Nuestro grupo de profesionales calificados cuenta con vasta
                                trayectoria en normativas internacionales y nacionales.
                            </p>
                        </div>
                        <div className="pozos-about-stats">
                            <div className="pozos-stat">
                                <h3>15+</h3>
                                <span>Años de Experiencia</span>
                            </div>
                            <div className="pozos-stat">
                                <h3>100%</h3>
                                <span>Certificación Normativa</span>
                            </div>
                            <div className="pozos-stat">
                                <h3>24/7</h3>
                                <span>Soporte Técnico</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="pozos-premium-services" ref={refs.services}>
                <div className={`pozos-premium-services-container ${isVisible.services ? 'is-visible' : ''}`}>
                    <div className="pozos-services-layout">
                        <div className="pozos-services-visual">
                            <div className="pozos-visual-frame">
                                <img src={measuringImg} alt="Servicios de Pozos a Tierra" />
                                <div className="pozos-visual-overlay"></div>
                                <div className="pozos-floating-badge">
                                    <Icon icon="solar:verified-check-bold-duotone" />
                                    <span>Equipos Calibrados</span>
                                </div>
                            </div>
                        </div>
                        <div className="pozos-services-text">
                            <span className="pozos-section-badge">Nuestros Servicios</span>
                            <h2>Soluciones integrales en <span>Sistemas de Puesta a Tierra</span></h2>
                            <p className="pozos-services-desc">Ofrecemos un espectro completo de servicios para garantizar la disipación óptima
                                 de corrientes eléctricas.</p>
                            
                            <div className="pozos-services-cards">
                                <div className="pozos-service-item">
                                    <div className="pozos-service-icon">
                                        <Icon icon="solar:magnifer-zoom-in-bold-duotone" />
                                    </div>
                                    <div>
                                        <h4>Inspección y Diagnóstico</h4>
                                        <p>Análisis profundo del estado actual del pozo.</p>
                                    </div>
                                </div>
                                <div className="pozos-service-item">
                                    <div className="pozos-service-icon">
                                        <Icon icon="solar:settings-bold-duotone" />
                                    </div>
                                    <div>
                                        <h4>Mantenimiento Preventivo</h4>
                                        <p>Acciones correctivas para asegurar el valor de resistencia.</p>
                                    </div>
                                </div>
                                <div className="pozos-service-item">
                                    <div className="pozos-service-icon">
                                        <Icon icon="solar:bolt-circle-bold-duotone" />
                                    </div>
                                    <div>
                                        <h4>Medición de Resistencia</h4>
                                        <p>Uso de telurómetros especializados de alta precisión.</p>
                                    </div>
                                </div>
                                <div className="pozos-service-item">
                                    <div className="pozos-service-icon">
                                        <Icon icon="solar:document-text-bold-duotone" />
                                    </div>
                                    <div>
                                        <h4>Registro y Documentación</h4>
                                        <p>Emisión de protocolos firmados por ingenieros colegiados.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="pozos-premium-benefits" ref={refs.benefits}>
                <div className="pozos-benefits-bg-pattern"></div>
                <div className={`pozos-premium-benefits-container ${isVisible.benefits ? 'is-visible' : ''}`}>
                    <div className="pozos-benefits-header">
                        <h2>Pilares de nuestro servicio</h2>
                        <p>Diseñados para otorgar máxima protección y eficiencia en infraestructuras críticas.</p>
                    </div>
                    
                    <div className="pozos-benefits-grid">
                        <div className="pozos-premium-benefit-card group">
                            <div className="pozos-benefit-image-wrapper">
                                <img src={riskImg} alt="Seguridad garantizada" />
                                <div className="pozos-benefit-gradient-overlay"></div>
                            </div>
                            <div className="pozos-benefit-content">
                                <div className="pozos-benefit-icon-wrapper">
                                    <Icon icon="solar:shield-check-bold-duotone" />
                                </div>
                                <h3>Seguridad Garantizada</h3>
                                <p>Protección absoluta ante descargas y picos de voltaje imprevistos.</p>
                            </div>
                        </div>
                        
                        <div className="pozos-premium-benefit-card group">
                            <div className="pozos-benefit-image-wrapper">
                                <img src={normativeImg} alt="Cumplimiento normativo" />
                                <div className="pozos-benefit-gradient-overlay"></div>
                            </div>
                            <div className="pozos-benefit-content">
                                <div className="pozos-benefit-icon-wrapper">
                                    <Icon icon="solar:diploma-verified-bold-duotone" />
                                </div>
                                <h3>Cumplimiento Normativo</h3>
                                <p>Alineación total con normativas nacionales e internacionales vigentes.</p>
                            </div>
                        </div>
                        
                        <div className="pozos-premium-benefit-card group">
                            <div className="pozos-benefit-image-wrapper">
                                <img src={equipmentImg} alt="Larga vida útil" />
                                <div className="pozos-benefit-gradient-overlay"></div>
                            </div>
                            <div className="pozos-benefit-content">
                                <div className="pozos-benefit-icon-wrapper">
                                    <Icon icon="solar:cpu-bolt-bold-duotone" />
                                </div>
                                <h3>Vida Útil de Equipos</h3>
                                <p>Prevención de daños en hardware costoso y prolongación de vida útil.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pozos-premium-cta" ref={refs.cta} style={{ backgroundImage: `url(${ctaBg})` }}>
                <div className="pozos-cta-glass-overlay"></div>
                <div className={`pozos-premium-cta-container ${isVisible.cta ? 'is-visible' : ''}`}>
                    <div className="pozos-cta-inner">
                        <div className="pozos-cta-badge">
                            <Icon icon="solar:rocket-bold-duotone" /> Impulsa tu infraestructura
                        </div>
                        <h2>Construyamos algo <span>extraordinario</span></h2>
                        <p>Converse con nuestros ingenieros especializados sobre sus ideas y déjenos ayudarle a llevar su proyecto de ingeniería eléctrica al siguiente nivel.</p>
                        <a href="tel:+51943252468" className="pozos-btn-premium pozos-btn-cta">
                            Solicitar Asesoría Inmediata <Icon icon="solar:arrow-right-linear" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
