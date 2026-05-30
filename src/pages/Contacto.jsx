import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import './Contacto.css'

export default function Contacto() {
    const [isMapVisible, setIsMapVisible] = useState(false);
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const mapRef = useRef(null);
    const infoRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.15 };
        
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === mapRef.current) setIsMapVisible(true);
                    if (entry.target === infoRef.current) setIsInfoVisible(true);
                    if (entry.target === formRef.current) setIsFormVisible(true);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        if (mapRef.current) observer.observe(mapRef.current);
        if (infoRef.current) observer.observe(infoRef.current);
        if (formRef.current) observer.observe(formRef.current);

        return () => observer.disconnect();
    }, []);

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            asunto: '',
            mensaje: ''
        });
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const contactInfo = [
        {
            icon: 'solar:map-point-bold',
            title: 'Dirección',
            content: 'Av. Augusto B. Leguía 307 - S.M.P',
            color: '#36A6EB'
        },
        {
            icon: 'solar:phone-bold',
            title: 'Teléfono',
            content: '(01) 500-5584',
            color: '#84cc16'
        },
        {
            icon: 'solar:letter-bold',
            title: 'Email',
            content: 'ventas@rcingenieros.com',
            color: '#f59e0b'
        }
    ];

    const faqs = [
        {
            question: '¿Cuál es el tiempo de respuesta?',
            answer: 'Respondemos a todas las consultas en un plazo máximo de 24 horas hábiles.'
        },
        {
            question: '¿Ofrecen soporte técnico?',
            answer: 'Sí, ofrecemos soporte técnico 24/7 para todos nuestros productos y servicios.'
        },
        {
            question: '¿Cuáles son los métodos de pago?',
            answer: 'Aceptamos transferencias bancarias, tarjetas de crédito/débito y pago contra entrega.'
        },
        {
            question: '¿Realizan envíos a todo el país?',
            answer: 'Sí, realizamos envíos a todo el Perú con las mejores empresas de logística.'
        },
        {
            question: '¿Ofrecen garantía en los productos?',
            answer: 'Todos nuestros productos cuentan con garantía de fábrica y soporte técnico incluido.'
        }
    ];

    return (
        <div className="contacto-page">
            {/* CONTACT INFO CARDS */}
            <section className="contacto-info" ref={infoRef}>
                <div className={`contacto-info-container ${isInfoVisible ? 'animate' : ''}`}>
                    <div className="contacto-info-header">
                        <span className="contacto-section-badge">Información de Contacto</span>
                        <h2>Encuéntranos <span className="contacto-gradient-text">Aquí</span></h2>
                    </div>
                    <div className="contacto-info-grid">
                        {contactInfo.map((info, index) => (
                            <div className="contacto-info-card" key={index}>
                                <div className="info-icon-wrapper" style={{ background: `${info.color}15` }}>
                                    <Icon icon={info.icon} className="info-icon" style={{ color: info.color }} />
                                </div>
                                <h3>{info.title}</h3>
                                <p>{info.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ AND FORM SECTION */}
            <section className="contacto-form-section" ref={formRef}>
                <div className={`contacto-form-container ${isFormVisible ? 'animate' : ''}`}>
                    <div className="contacto-form-header">
                        <span className="contacto-section-badge">Preguntas y Contacto</span>
                        <h2>¿Tienes <span className="contacto-gradient-text">Preguntas?</span></h2>
                        <p>
                            Resolvemos tus dudas o envíanos un mensaje directo para una atención personalizada.
                        </p>
                    </div>

                    <div className="contacto-form-grid">
                        {/* FAQ SECTION */}
                        <div className="contacto-faq">
                            <h3>Preguntas Frecuentes</h3>
                            <div className="faq-list">
                                {faqs.map((faq, index) => (
                                    <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={index}>
                                        <div className="faq-question" onClick={() => toggleFaq(index)}>
                                            <Icon icon="solar:question-circle-bold" className="faq-icon" />
                                            <span>{faq.question}</span>
                                            <Icon icon={`solar:alt-arrow-${openFaq === index ? 'up' : 'down'}-bold`} className="faq-arrow" />
                                        </div>
                                        <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                                            {faq.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CONTACT FORM */}
                        <div className="contacto-form-wrapper" id="contacto-formulario">
                            <h3>Envíanos un Mensaje</h3>
                            <form className="contacto-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre Completo</label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tu nombre completo"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="telefono">Teléfono</label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            placeholder="+51 999 999 999"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="asunto">Asunto</label>
                                        <input
                                            type="text"
                                            id="asunto"
                                            name="asunto"
                                            value={formData.asunto}
                                            onChange={handleChange}
                                            required
                                            placeholder="Asunto de tu mensaje"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Escribe tu mensaje aquí..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="form-submit-btn">
                                    <Icon icon="solar:paper-plane-bold" />
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP SECTION */}
            <section className="contacto-map" ref={mapRef}>
                <div className={`contacto-map-container ${isMapVisible ? 'animate' : ''}`}>
                    <div className="map-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9776987654321!2d-77.0326560846115!3d-12.046373645123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sAv.%20Augusto%20B.%20Legu%C3%ADa%20307%2C%20Santiago%20de%20Surco!5e0!3m2!1ses!2spe!4v1234567890123"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación RC Ingenieros"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}
