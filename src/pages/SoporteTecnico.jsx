import { Icon } from '@iconify/react'
import './SoporteTecnico.css'

export default function SoporteTecnico() {
    return (
        <div className="soporte-page">
            <section className="soporte-hero">
                <div className="soporte-hero-container">
                    <div className="soporte-hero-text">
                        {/*<span className="soporte-badge">Personal Especializado</span>*/}
                        <h1>
                            Soporte Técnico a Estaciones <br />
                            <span className="soporte-highlight">GNV GLP GNL y Líquidos</span>
                        </h1>
                        {/*
                        <p>
                            Optimizamos la operatividad de su negocio con soluciones de ingeniería avanzada, 
                            mantenimiento preventivo y soporte especializado 24/7 en todo el territorio nacional.
                        </p>
                        */}
                        {/*
                        <div className="soporte-hero-actions">
                            <button className="btn-cotizar-soporte">
                                <Icon icon="solar:chat-round-dots-bold-duotone" className="btn-icon" />
                                Cotizar Ahora
                            </button>
                        </div>
                        */}
                    </div>
                </div>
            </section>
                
                {/* Elementos decorativos de fondo 
            <section className="soporte-services">
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
            </section>*/}
        </div>
    )
}
