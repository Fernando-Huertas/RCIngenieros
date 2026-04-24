import { Icon } from '@iconify/react'
import './SoporteTecnico.css'
import soporteabout from '../assets/soporteabout.jpeg'

export default function SoporteTecnico() {
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
            <section className="soporte-about">
                <div className="soporte-about-container">
                    <div className="soporte-about-image">                                                                
                        <img src={soporteabout} alt="Técnico de servicio" />
                    </div>
                    
                    <div className="soporte-about-content">
                        <span className="soporte-about-subtitle">Soporte Técnico</span>
                        <h2>Estaciones de servicio GNV/GLP/GNL Líquidos y Urea</h2>
                        <p>
                            Nuestro servicio de Soporte y Mantenimiento garantiza la continuidad total de su operación.
                             Entendemos que su negocio nunca se detiene, por ello, ofrecemos atención 24 horas al día,
                              los 7 días de la semana. Brindamos un soporte personalizado que se adapta a su necesidad,
                               ya sea mediante asistencia presencial inmediata en sitio o a través de una asistencia remota
                                eficiente para resolver cualquier incidencia con rapidez.
                        </p>
            
                        <div className="soporte-about-features">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="about-feature-item">
                                    <Icon icon="solar:check-circle-bold" className="feature-check-icon" />
                                    <span>Personal altamente capacitado para resolver incidencias.</span>
                                </div>
                            ))}
                        </div>
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
        </div>
    )
}
