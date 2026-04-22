import { Icon } from '@iconify/react'
import './Nosotros.css'

// Assets de Certificaciones
import iso27001 from '../assets/iso27001.webp'
import sunat from '../assets/verificado-por-sunat.webp'
import nosotroscontent from '../assets/nosotroscont.jpg'

export default function Nosotros() {
    
    // Lista de certificaciones para el grid
    const certificacionesList = [
        { id: 1, name: 'ISO 9001:2015', src: null, placeholder: 'ISO 9001' },
        { id: 2, name: 'ISO 27001', src: iso27001 },
        { id: 3, name: 'Verificado por SUNAT', src: sunat },
        { id: 4, name: 'Osinergmin', src: null, placeholder: 'Osinergmin' },
        { id: 5, name: 'ISO 9001:2015', src: null, placeholder: 'ISO 9001' },
        { id: 6, name: 'ISO 27001', src: iso27001 },
        { id: 7, name: 'Verificado por SUNAT', src: sunat },
        { id: 8, name: 'Osinergmin', src: null, placeholder: 'Osinergmin' },
    ];

    return (
        <div className="nosotros-page">
            {/* ... resto del código ... */}
            {/* Hero Section para Nosotros */}
            <section className="nosotros-hero">
                <h1>Sobre Nosotros</h1>
                <p>
                    Innovación y excelencia en soluciones tecnológicas para la industria del combustible.
                </p>
            </section>

            {/* Contenido Principal */}
            <section className="nosotros-content">
                <div className="nosotros-grid">
                    <div className="nosotros-text">
                        <h1 className='nosotros-titulo1'>
                            Comprometidos con la<br />
                            <span className="nosotros-highlight">Excelencia</span>
                        </h1>
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
            <section className="nosotros-values">
                <div className="values-container">
                    <div className="values-header">
                        <h2>Pilares de Nuestra Empresa</h2>
                        <p>Los valores y objetivos que impulsan nuestra excelencia operativa diaria.</p>
                    </div>
                    <div className="values-grid">
                        
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Misión</h3>
                            <p>
                                Brindar soluciones tecnológicas más innovadoras a medida de las necesidades de nuestros clientes,
                                con el objetivo de incrementar la productividad y complejidad en el desarrollo de su empresa.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">👁️</div>
                            <h3>Visión</h3>
                            <p>
                                Ser reconocidos como el socio estratégico líder a nivel nacional  en el sector tecnológico,
                                 innovando continuamente en la implementación y gestión, garantizando la máxima eficiencia y
                                  crecimiento sostenible para el futuro de nuestros clientes.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">💎</div>
                            <h3>Valores</h3>
                            <p>
                                Integridad en cada acción, compromiso con el cliente, innovación constante y excelencia técnica 
                                en cada proyecto realizado.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Sección Certificaciones */}
            <section className='certificaciones'>
                <div className="certificaciones-container">
                    <div className="certificaciones-header">
                        <h2>Certificaciones y Reconocimientos</h2>
                        <p>Respaldados por los más altos estándares de calidad</p>
                    </div>
                    <div className="certificaciones-grid">
                        {certificacionesList.map((item) => (
                            <div className="certificacion-item" key={item.id}>
                                {item.src ? (
                                    <img src={item.src} alt={item.name} />
                                ) : (
                                    <div className="logo-placeholder">
                                        <Icon icon="solar:medal-ribbon-bold-duotone" style={{fontSize: '40px', color: '#123361'}} />
                                        <span>{item.placeholder}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}