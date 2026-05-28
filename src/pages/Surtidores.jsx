import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import './Surtidores.css'

// Assets
import blueskyLogo from '../assets/blueskylogo.jpg';
import blueskyImage from '../assets/blueskylogo.jpg'

export default function Surtidores() {
    const [isBrandVisible, setIsBrandVisible] = useState(false);
    const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
    const [isProductsVisible, setIsProductsVisible] = useState(false);

    const brandRef = useRef(null);
    const featuresRef = useRef(null);
    const productsRef = useRef(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.15 };
        
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === brandRef.current) setIsBrandVisible(true);
                    if (entry.target === featuresRef.current) setIsFeaturesVisible(true);
                    if (entry.target === productsRef.current) setIsProductsVisible(true);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        if (brandRef.current) observer.observe(brandRef.current);
        if (featuresRef.current) observer.observe(featuresRef.current);
        if (productsRef.current) observer.observe(productsRef.current);

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: 'solar:verified-check-bold-duotone',
            title: 'Certificación',
            description: 'Hemos obtenido múltiples certificaciones internacionales, incluídas ISO/OIML/CE/ATEX/MID/RoHS'
        },
        {
            icon: 'solar:buildings-bold-duotone',
            title: 'Fábrica propia',
            description: 'Bluesky dispone de una fábrica y un taller de producción de nueva generación para fabricar sus propios equipos.'
        },
        {
            icon: 'solar:headphones-round-bold-duotone',
            title: 'Soporte Online',
            description: 'Bluesky te ofrece servicios en línea 7/24. Puedes contactarnos cuando lo necesites.'
        }
    ];

    // Placeholder para productos - el usuario agregará info después
    const products = [
        {
            id: 1,
            name: 'Surtidor Modelo A',
            description: 'Descripción del producto',
            image: 'placeholder',
            price: 'Consultar'
        },
        {
            id: 2,
            name: 'Surtidor Modelo B',
            description: 'Descripción del producto',
            image: 'placeholder',
            price: 'Consultar'
        },
        {
            id: 3,
            name: 'Surtidor Modelo C',
            description: 'Descripción del producto',
            image: 'placeholder',
            price: 'Consultar'
        }
    ];

    return (
        <div className="surtidores-page">
            {/* BRAND SECTION */}
            <section className="surtidores-brand" ref={brandRef}>
                <div className={`surtidores-brand-container ${isBrandVisible ? 'animate' : ''}`}>
                    <div className="surtidores-brand-content">
                        <span className="surtidores-section-badge">Nuestra Marca</span>
                        <h1>Bluesky</h1>
                        <p>
                          Fabricante y proveedor líder de equipos y sistemas de gestión para estaciones de servicios, estaciones
                           de GLP/GNC/GNL, estaciones de hidrógeno y estaciones de carga de vehículos eléctricos en china, con más
                            de 30 años de experiencia en fabricación y más de 50,000 estaciones en todo el mundo que utilizan
                             productos BlueSky. 
                        </p>
                        <p>
                            Bluesky cuenta con más de 50,000 m2 de talleres, más de 200 empleados y puede suministrarle más de 2,000
                             equipos de repostaje al mes. Su amplia gama de productos le ofrece una solución integral para sus
                              necesidades de equipos de repostaje de energía. Bluesky acepta pedidos de fabricantes de equipos
                               originales (ODM) y fabricantes de equipos originales (OEM). 
                        </p>
                    </div>
                    <div className="surtidores-brand-image">
                        <img src={blueskyImage} alt="Bluesky Brand" />
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="surtidores-features" ref={featuresRef}>
                <div className={`surtidores-features-container ${isFeaturesVisible ? 'animate' : ''}`}>
                    <div className="surtidores-features-header">
                        <span className="surtidores-section-badge">Características</span>
                        <h2>¿Por qué elegir <span className="surtidores-gradient-text">Bluesky</span>?</h2>
                    </div>
                    <div className="surtidores-features-grid">
                        {features.map((feature, index) => (
                            <div className="surtidores-feature-card" key={index}>
                                <div className="surtidores-feature-icon">
                                    <Icon icon={feature.icon} />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRODUCTS SECTION */}
            <section className="surtidores-products" ref={productsRef}>
                <div className={`surtidores-products-container ${isProductsVisible ? 'animate' : ''}`}>
                    <div className="surtidores-products-header">
                        <span className="surtidores-section-badge">Productos</span>
                        <h2>Nuestra <span className="surtidores-gradient-text">Línea de Surtidores</span></h2>
                        <p>Descubre nuestra gama completa de surtidores Bluesky</p>
                    </div>
                    <div className="surtidores-products-grid">
                        {products.map((product) => (
                            <div className="surtidores-product-card" key={product.id}>
                                <div className="surtidores-product-image">
                                    <div className="surtidores-product-placeholder">
                                        <Icon icon="solar:box-bold-duotone" />
                                        <span>Imagen del producto</span>
                                    </div>
                                </div>
                                <div className="surtidores-product-info">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <div className="surtidores-product-price">
                                        <span>{product.price}</span>
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
