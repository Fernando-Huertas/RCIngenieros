import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import './Nosotros.css'

// Assets de Certificaciones y Fundador
import iso27001 from '../assets/iso27001.webp'
import sunat from '../assets/verificado-por-sunat.webp'
import homologado from '../assets/homologado.webp'
import nosotroscontent from '../assets/nosotroscont.jpg'
import inge from '../assets/inge.webp'

export default function Nosotros() {
    
    // Lista de certificaciones para el grid
    const certificacionesList = [
        { id: 1, name: 'ISO 27001', desc: 'Seguridad Info', src: iso27001 },
        { id: 2, name: 'SUNAT', desc: 'Verificado por SUNAT', src: sunat },
        { id: 3, name: 'HODELPE', desc: 'Empresa Homologada', src: homologado },
    ];

    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isFounderVisible, setIsFounderVisible] = useState(true);
    const [isValuesVisible, setIsValuesVisible] = useState(false);
    const [isCertificacionesVisible, setIsCertificacionesVisible] = useState(false);

    const contentRef = useRef(null);
    const founderRef = useRef(null);
    const valuesRef = useRef(null);
    const certificacionesRef = useRef(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.05 };
        
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === contentRef.current) setIsContentVisible(true);
                    if (entry.target === founderRef.current) setIsFounderVisible(true);
                    if (entry.target === valuesRef.current) setIsValuesVisible(true);
                    if (entry.target === certificacionesRef.current) setIsCertificacionesVisible(true);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        if (contentRef.current) observer.observe(contentRef.current);
        if (founderRef.current) observer.observe(founderRef.current);
        if (valuesRef.current) observer.observe(valuesRef.current);
        if (certificacionesRef.current) observer.observe(certificacionesRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="nosotros-page">
            {/* ... resto del código ... */}
            {/* Hero Section para Nosotros */}
            <section className="nosotros-hero">
                <h1>¿Quiénes somos?</h1>
                <p>
                    Innovación y excelencia en soluciones tecnológicas para la industria del combustible.
                </p>
            </section>

            {/* Contenido Principal */}
            <section className="nosotros-content" ref={contentRef}>
                <div className={`nosotros-grid ${isContentVisible ? 'animate' : ''}`}>
                    <div className="nosotros-text">
                        <h2 className='nosotros-titulo1'>
                            Comprometidos con la<br />
                            <span className="nosotros-highlight">EXCELENCIA</span>
                        </h2>
                        <p>
                            Ricardo Calderón Ingenieros S.A.C., es una empresa peruana que ofrece servicios 
                            orientados a las Telecomunicaciones, Electricidad y Servicios de Informática a diversas
                             empresas, ofreciendo planes de desarrollo sostenido ajustado al contexto económico,
                              tecnológico y social de acuerdo a las necesidades de cada uno de nuestros clientes.
                        </p>

                        <div className="nosotros-features">
                            {[
                                {
                                    title: "Experiencia comprobada",
                                    desc: "Más de una década de dedicación al sector nos permite ejecutar proyectos de gran envergadura (GNV, GLP, Líquidos) con una precisión inigualable, minimizando riesgos y garantizando resultados que perduran.",
                                    icon: "solar:settings-bold-duotone"
                                },
                                {
                                    title: "Soluciones integrales",
                                    desc: "Ofrecemos una gama completa de servicios tecnológicos y de ingeniería, desde la consultoría inicial hasta el soporte técnico continuo, adaptándonos a las necesidades específicas de cada cliente.",
                                    icon: "solar:graph-up-bold-duotone"
                                },
                                {
                                    title: "Compromiso con la eficiencia",
                                    desc: "Nuestras soluciones están diseñadas para maximizar la operatividad de su negocio, asegurando procesos ágiles, reducción de costos y cumplimiento total de las normativas vigentes.",
                                    icon: "solar:rocket-bold-duotone"
                                }
                            ].map((item, index) => (
                                <div className="feature-item" key={index}>
                                    <div className="feature-icon-box">
                                        <Icon icon={item.icon} />
                                    </div>
                                    <div className="feature-info">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="nosotros-image-wrapper">
                        <img 
                            src={nosotroscontent} 
                            alt="Ingeniería RC" 
                        />
                    </div>
                </div>
            </section>

            {/* Misión, Visión, Valores con Card Design */}
            <section className="nosotros-values" ref={valuesRef}>
                <div className={`values-container ${isValuesVisible ? 'animate' : ''}`}>
                    <div className="values-header">
                        <span className="nosotros-section-badge">Nuestra Esencia</span>
                        <h2>Pilares de Nuestra Empresa</h2>
                        <p>Los valores y objetivos que impulsan nuestra excelencia operativa diaria y el compromiso con cada proyecto.</p>
                    </div>
                    <div className="values-grid">
                        
                        <div className="value-card">
                            <div className="value-card-glow"></div>
                            <div className="value-icon-container">
                                <Icon icon="solar:target-bold-duotone" className="v-icon" />
                            </div>
                            <h3>Misión</h3>
                            <p>
                                Brindar soluciones tecnológicas innovadoras a medida, incrementando la productividad 
                                y eficiencia en el desarrollo de cada uno de nuestros socios estratégicos.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-card-glow"></div>
                            <div className="value-icon-container">
                                <Icon icon="solar:eye-bold-duotone" className="v-icon" />
                            </div>
                            <h3>Visión</h3>
                            <p>
                                Ser el referente líder nacional en innovación tecnológica, garantizando crecimiento 
                                sostenible y excelencia en la gestión de servicios industriales para el futuro.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-card-glow"></div>
                            <div className="value-icon-container">
                                <Icon icon="solar:star-bold-duotone" className="v-icon" />
                            </div>
                            <h3>Valores</h3>
                            <p>
                                Nuestra cultura se basa en la integridad innegociable, el compromiso total con el 
                                éxito del cliente y la búsqueda constante de la perfección técnica.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Sección Fundador / Dirección General */}
            <section className="nosotros-founder" ref={founderRef}>
                <div className={`founder-grid ${isFounderVisible ? 'animate' : ''}`}>
                    <div className="founder-image-col">
                        <div className="founder-image-wrapper">
                            <img 
                                src={inge} 
                                alt="Ing. Ricardo Calderón - Fundador y Gerente General" 
                                className="founder-img"
                            />
                            <div className="founder-badge-experience">
                                <span className="exp-number">+18</span>
                                <span className="exp-text">Años de<br />Trayectoria</span>
                            </div>
                        </div>
                    </div>
                    <div className="founder-info-col">
                        <div className="founder-header">
                            <span className="nosotros-section-badge">Liderazgo & Dirección</span>
                            <h2>Ing. Ricardo Calderón</h2>
                            <h3 className="founder-role">Fundador & Gerente General</h3>
                        </div>
                        <div className="founder-quote-box">
                            <p className="founder-description">
                                Con más de 18 años de trayectoria en el sector tecnológico, eléctrico y de telecomunicaciones, el <strong>Ing. Ricardo Calderón</strong> ha liderado el crecimiento sostenido de <strong>RC Ingenieros</strong>, consolidándola como un referente de innovación y confiabilidad en el Perú. Su visión estratégica y riguroso estándar técnico han sido el pilar fundamental para desarrollar soluciones integrales de ingeniería, automatización y software especializado para la industria de estaciones de servicio y el sector industrial en todo el país.
                            </p>
                        </div>
                        <div className="founder-tags">
                            <span className="founder-tag">
                                <Icon icon="solar:shield-check-bold" /> Dirección Estratégica
                            </span>
                            <span className="founder-tag">
                                <Icon icon="solar:bolt-bold" /> Automatización & Electricidad
                            </span>
                            <span className="founder-tag">
                                <Icon icon="solar:server-square-bold" /> Infraestructura de Redes
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Certificaciones */}
            <section className='certificaciones' ref={certificacionesRef}>
                <div className={`certificaciones-container ${isCertificacionesVisible ? 'animate' : ''}`}>
                    <div className="certificaciones-header">
                        <h2>Certificaciones y Reconocimientos</h2>
                        <p>Respaldados por los más altos estándares de calidad</p>
                    </div>
                    <div className="certificaciones-grid">
                        {certificacionesList.map((item) => (
                            <div className="certificacion-item" key={item.id}>
                                <div className="cert-card-inner">
                                    <div className="cert-icon">
                                        {item.src ? (
                                            <img src={item.src} alt={item.name} />
                                        ) : (
                                            <Icon icon="solar:medal-ribbon-bold-duotone" />
                                        )}
                                    </div>
                                    <div className="cert-info">
                                        <h3 className="cert-name">{item.name}</h3>
                                        <p className="cert-desc">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}