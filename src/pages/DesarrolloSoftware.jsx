import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import './DesarrolloSoftware.css'

export default function DesarrolloSoftware() {
    const [isHeroVisible, setIsHeroVisible] = useState(false);
    const [isSistemasVisible, setIsSistemasVisible] = useState(false);
    const [isDiferencialesVisible, setIsDiferencialesVisible] = useState(false);
    const [isFlujoVisible, setIsFlujoVisible] = useState(false);

    const heroRef = useRef(null);
    const sistemasRef = useRef(null);
    const diferencialesRef = useRef(null);
    const flujoRef = useRef(null);

    useEffect(() => {
        setIsHeroVisible(true); // Trigger hero animation on mount

        const observerOptions = { threshold: 0.15 };
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === sistemasRef.current) setIsSistemasVisible(true);
                    if (entry.target === diferencialesRef.current) setIsDiferencialesVisible(true);
                    if (entry.target === flujoRef.current) setIsFlujoVisible(true);
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        if (sistemasRef.current) observer.observe(sistemasRef.current);
        if (diferencialesRef.current) observer.observe(diferencialesRef.current);
        if (flujoRef.current) observer.observe(flujoRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="software-page">
            {/* HERO */}
            <section className="software-hero" ref={heroRef}>
                <div className="software-hero-overlay"></div>
                <div className={`software-hero-container ${isHeroVisible ? 'animate' : ''}`}>
                    <div className="software-hero-text">
                        <h1>
                            Desarrollo de Software{' '}
                            <span className="software-hero-highlight">A Medida</span>
                        </h1>
                        <p className="software-hero-subtitle">
                            Transformamos tus ideas en soluciones tecnológicas escalables, seguras y de alto rendimiento.
                        </p>
                        <div className="software-hero-actions">
                            <a href="https://wa.me/51995910229?text=Hola%20estoy%20interesado%20en%20el%20desarrollo%20de%20un%20software" 
                               className="software-demo-btn" target="_blank" rel="noopener noreferrer">
                                <Icon icon="solar:programming-bold-duotone" className="demo-btn-icon" />
                                Cotizar mi Proyecto
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SISTEMAS ESTRELLA */}
            <section className="software-sistemas" ref={sistemasRef}>
                <div className={`software-sistemas-wrapper ${isSistemasVisible ? 'animate' : ''}`}>
                    <div className="software-section-header">
                        <span className="software-section-badge">Nuestros Sistemas Especializados</span>
                        <h2>Soluciones <span className="software-gradient-text">Listas para Implementar</span></h2>
                        <p>Plataformas robustas y probadas, diseñadas específicamente para maximizar la eficiencia de su rubro.</p>
                    </div>

                    <div className="software-sistemas-grid">
                        {/* RESTAURANTES */}
                        <div className="software-sistema-card">
                            <div className="software-sistema-icon-wrap rest">
                                <Icon icon="solar:chef-hat-bold-duotone" />
                            </div>
                            <h3>Sistema para Restaurantes</h3>
                            <p className="software-sistema-desc">
                                La solución definitiva para la gestión de tu restaurante, cafetería o bar. Agiliza la atención, controla tus mesas y optimiza tu cocina.
                            </p>
                            <ul className="software-sistema-features">
                                <li>
                                    <Icon icon="solar:shop-bold-duotone" className="feat-icon rest-icon" />
                                    <span><strong>Gestión de Mesas y Delivery:</strong> Controla el estado de las mesas en tiempo real y gestiona pedidos a domicilio de forma eficiente.</span>
                                </li>
                                <li>
                                    <Icon icon="solar:printer-bold-duotone" className="feat-icon rest-icon" />
                                    <span><strong>Comandas Rápidas:</strong> Envío de pedidos directo a la cocina o barra (impresión automática de tickets).</span>
                                </li>
                                <li>
                                    <Icon icon="solar:wallet-bold-duotone" className="feat-icon rest-icon" />
                                    <span><strong>Caja y Facturación:</strong> Arqueos de caja rápidos, control de propinas, métodos de pago y emisión de comprobantes.</span>
                                </li>
                            </ul>
                        </div>

                        {/* FARMACIAS */}
                        <div className="software-sistema-card">
                            <div className="software-sistema-icon-wrap farm">
                                <Icon icon="solar:pills-3-bold-duotone" />
                            </div>
                            <h3>Sistema para Farmacias y Boticas</h3>
                            <p className="software-sistema-desc">
                                Administra tu inventario de medicamentos de forma precisa, controla fechas de vencimiento y cumple con todas las normativas de salud.
                            </p>
                            <ul className="software-sistema-features">
                                <li>
                                    <Icon icon="solar:calendar-date-bold-duotone" className="feat-icon farm-icon" />
                                    <span><strong>Control de Lotes y Vencimientos:</strong> Alertas automáticas para evitar pérdidas de productos por caducidad.</span>
                                </li>
                                <li>
                                    <Icon icon="solar:minimalistic-magnifer-bold-duotone" className="feat-icon farm-icon" />
                                    <span><strong>Búsqueda Avanzada:</strong> Encuentra medicamentos por principio activo, marca o presentación en un segundo.</span>
                                </li>
                                <li>
                                    <Icon icon="solar:document-medicine-bold-duotone" className="feat-icon farm-icon" />
                                    <span><strong>Ventas y Recetas:</strong> Registro ágil de ventas con control de stock mínimo para reposiciones automáticas.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFERENCIALES 
            <section className="software-diferenciales" ref={diferencialesRef}>
                <div className={`software-diferenciales-wrapper ${isDiferencialesVisible ? 'animate' : ''}`}>
                    <div className="software-section-header center">
                        <h2>¿Por qué trabajar con <span className="software-gradient-text">RC Ingenieros</span>?</h2>
                        <p>No solo compran un software, compran el soporte y la seguridad técnica de un equipo experto.</p>
                    </div>

                    <div className="software-diferenciales-grid">
                        <div className="software-dif-item">
                            <Icon icon="solar:document-text-bold-duotone" className="dif-icon" />
                            <h4>Facturación Electrónica Integrada</h4>
                            <p>Sistemas listos para emitir boletas y facturas conectadas directamente a la SUNAT sin intermediarios complejos.</p>
                        </div>
                        <div className="software-dif-item">
                            <Icon icon="solar:shield-check-bold-duotone" className="dif-icon" />
                            <h4>Soporte Técnico Local</h4>
                            <p>Garantía de que el sistema siempre estará en línea y con soporte humano, rápido y en tu mismo idioma ante cualquier duda.</p>
                        </div>
                        <div className="software-dif-item">
                            <Icon icon="solar:devices-bold-duotone" className="dif-icon" />
                            <h4>Diseño Responsivo</h4>
                            <p>Acceso seguro, rápido y adaptable desde computadoras, tablets o celulares, estés donde estés.</p>
                        </div>
                        <div className="software-dif-item">
                            <Icon icon="solar:wifi-router-minimalistic-bold-duotone" className="dif-icon" />
                            <h4>Sistemas Offline / Online</h4>
                            <p>La seguridad y tranquilidad de que tu negocio puede seguir facturando incluso si se cae el internet localmente.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* FLUJO DE TRABAJO */}
            <section className="software-flujo" ref={flujoRef}>
                <div className={`software-flujo-wrapper ${isFlujoVisible ? 'animate' : ''}`}>
                    <div className="software-section-header">
                        <span className="software-section-badge">Proyectos a Medida</span>
                        <h2>Cómo Creamos <span className="software-gradient-text">Tu Software</span></h2>
                        <p>Nuestra metodología comprobada para desarrollar la solución exacta que tu empresa requiere.</p>
                    </div>

                    <div className="software-timeline">
                        <div className="timeline-item">
                            <div className="timeline-number">1</div>
                            <div className="timeline-content">
                                <h4>Reunión de Diagnóstico</h4>
                                <p>Entendemos tu negocio. Analizamos profundamente tus procesos actuales para descubrir qué y cómo necesitas optimizar.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-number">2</div>
                            <div className="timeline-content">
                                <h4>Diseño y Desarrollo</h4>
                                <p>Creamos una plataforma intuitiva utilizando tecnología moderna, estable y altamente segura, mostrando prototipos paso a paso.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-number">3</div>
                            <div className="timeline-content">
                                <h4>Pruebas y Capacitación</h4>
                                <p>Nos aseguramos de que todo el sistema funcione al 100% y capacitamos a tu equipo para aprovechar todas las herramientas.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-number">4</div>
                            <div className="timeline-content">
                                <h4>Soporte Continuo</h4>
                                <p>Te acompañamos en el crecimiento de tu sistema con actualizaciones, mejoras y soporte ininterrumpido.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}