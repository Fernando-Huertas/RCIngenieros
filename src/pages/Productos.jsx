import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import './Productos.css'

// Assets
import heroBg from '../assets/hero.png'
import servidoresImg from '../assets/categorias/servidores-rc.webp'
import impresorasImg from '../assets/categorias/impresoras-termicas-rc.webp'
import gabinetesImg from '../assets/categorias/gabinetes-rc.webp'
import patchCordImg from '../assets/categorias/patch-cord-rc.webp'
import cablesUtpImg from '../assets/categorias/cable-de-red-rc.webp'
import productosElectricosImg from '../assets/categorias/suministros-electricos-rc.webp'
import lucesLedImg from '../assets/categorias/luces-led-antiexplosiva-rc.webp'
import surtidoresImg from '../assets/categorias/surtidores.webp'

export default function Productos() {
    const [isHeroVisible, setIsHeroVisible] = useState(false);
    const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
    const [isCtaVisible, setIsCtaVisible] = useState(false);

    const heroRef = useRef(null);
    const categoriesRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.15 };
        
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === heroRef.current) setIsHeroVisible(true);
                    if (entry.target === categoriesRef.current) setIsCategoriesVisible(true);
                    if (entry.target === ctaRef.current) setIsCtaVisible(true);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        if (heroRef.current) observer.observe(heroRef.current);
        if (categoriesRef.current) observer.observe(categoriesRef.current);
        if (ctaRef.current) observer.observe(ctaRef.current);

        return () => observer.disconnect();
    }, []);

    const categories = [
        {
            id: 1,
            name: 'Servidores',
            image: servidoresImg,
            description: 'Servidores de alta performance para infraestructura crítica',
            products: '12 productos'
        },
        {
            id: 2,
            name: 'Impresoras',
            image: impresorasImg,
            description: 'Impresoras térmicas y de tickets para puntos de venta',
            products: '8 productos'
        },
        {
            id: 3,
            name: 'Gabinetes',
            image: gabinetesImg,
            description: 'Racks y gabinetes para equipamiento de red',
            products: '15 productos'
        },
        {
            id: 4,
            name: 'Patch Cord',
            image: patchCordImg,
            description: 'Cables de red patch cord de diversas longitudes',
            products: '20 productos'
        },
        {
            id: 5,
            name: 'Cables UTP',
            image: cablesUtpImg,
            description: 'Cables UTP Cat5e, Cat6 para instalaciones de red',
            products: '25 productos'
        },
        {
            id: 6,
            name: 'Productos Eléctricos',
            image: productosElectricosImg,
            description: 'Componentes eléctricos para instalaciones industriales',
            products: '30 productos'
        },
        {
            id: 7,
            name: 'Luces LED Antiexplosivas',
            image: lucesLedImg,
            description: 'Iluminación certificada para zonas peligrosas',
            products: '10 productos'
        },
        {
            id: 8,
            name: 'Surtidores',
            image: surtidoresImg,
            description: 'Surtidores de combustible de última generación',
            products: '6 productos'
        }
    ];

    return (
        <div className="productos-page">
            {/* HERO SECTION */}
            <section className="productos-hero" ref={heroRef}>
                <div className="productos-hero-overlay"></div>
                <div className="productos-hero-container">
                    <div className={`productos-hero-content ${isHeroVisible ? 'animate' : ''}`}>
                        <span className="productos-hero-badge">Catálogo de Productos</span>
                        <h1>
                            Soluciones Tecnológicas e <br />
                            <span className="productos-hero-highlight">Infraestructura Integral</span>
                        </h1>
                        <p className="productos-hero-description">
                            Contamos con una amplia gama de productos de alta calidad para estaciones de servicio, 
                            redes de datos, infraestructura eléctrica y más. Equipos certificados y garantizados.
                        </p>
                        <div className="productos-hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">100+</span>
                                <span className="stat-label">Productos</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">8</span>
                                <span className="stat-label">Categorías</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Soporte</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORIES SECTION */}
            <section className="productos-categories" ref={categoriesRef}>
                <div className={`productos-categories-container ${isCategoriesVisible ? 'animate' : ''}`}>
                    <div className="productos-categories-header">
                        <span className="productos-section-badge">Nuestro Catálogo</span>
                        <h2>Explora Nuestras <span className="productos-gradient-text">Categorías</span></h2>
                        <p>
                            Encuentra el equipo perfecto para tu proyecto. Ofrecemos productos de las mejores marcas 
                            con garantía y soporte técnico especializado.
                        </p>
                    </div>

                    <div className="productos-categories-grid">
                        {categories.map((category) => (
                            <div className="productos-category-card" key={category.id}>
                                <div className="category-image-wrapper">
                                    <img src={category.image} alt={category.name} className="category-image" />
                                </div>
                                <h3>{category.name}</h3>
                                <p className="category-description">{category.description}</p>
                                <div className="category-footer">
                                    <span className="category-products-count">{category.products}</span>
                                    <button className="category-view-btn">
                                        Ver productos <Icon icon="line-md:arrow-right" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="productos-cta" ref={ctaRef}>
                <div className={`productos-cta-container ${isCtaVisible ? 'animate' : ''}`}>
                    <div className="productos-cta-content">
                        <div className="cta-badge">
                            <Icon icon="solar:rocket-bold-duotone" />
                            <span>¿Necesitas una cotización?</span>
                        </div>
                        <h2>Encuentra el Producto Perfecto para tu Proyecto</h2>
                        <p>
                            Nuestro equipo de especialistas te ayudará a seleccionar el equipo adecuado según 
                            tus necesidades y presupuesto. Contáctanos para una asesoría personalizada.
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:+51943252468" className="cta-button-primary">
                                <Icon icon="solar:phone-bold" />
                                Solicitar Cotización
                            </a>
                            <a href="mailto:ventas@rcingenieros.com" className="cta-button-secondary">
                                <Icon icon="material-symbols:mail" />
                                Enviar Correo
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
