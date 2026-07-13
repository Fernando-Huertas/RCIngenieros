import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import './LibroReclamaciones.css';

export default function LibroReclamaciones() {
    // Generar un número correlativo simulado
    const [correlativo, setCorrelativo] = useState('');

    useEffect(() => {
        // En un entorno real, esto vendría del backend.
        // Aquí generamos uno aleatorio para el formato visual.
        const num = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        const year = new Date().getFullYear();
        setCorrelativo(`N° ${num}-${year}`);
    }, []);

    const [formData, setFormData] = useState({
        // 1. Identificación del Consumidor
        esMenor: false,
        nombre: '',
        tipoDocumento: 'DNI',
        numeroDocumento: '',
        domicilio: '',
        telefono: '',
        email: '',
        // Datos apoderado (si es menor)
        nombreApoderado: '',
        documentoApoderado: '',
        
        // 2. Identificación del Bien Contratado
        tipoBien: 'Producto', // Producto o Servicio
        montoReclamado: '',
        descripcionBien: '',
        
        // 3. Detalle de la Reclamación
        tipoReclamacion: 'Reclamo', // Reclamo o Queja
        detalleReclamacion: '',
        pedidoConsumidor: '',
        
        // Términos
        aceptaTerminos: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleRadioChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.aceptaTerminos) {
            alert('Debes aceptar la declaración de veracidad de la información.');
            return;
        }

        setIsSubmitting(true);

        // Simulamos un envío al backend o API de correos
        setTimeout(() => {
            console.log('--- ENVIANDO CORREO A: administracion@rcingenieros.com ---');
            console.log('--- ENVIANDO COPIA A:', formData.email, '---');
            console.log('DATOS DEL RECLAMO:', { correlativo, ...formData });
            
            setIsSubmitting(false);
            setSubmitSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 2000);
    };

    if (submitSuccess) {
        return (
            <div className="reclamaciones-page success-view">
                <div className="reclamaciones-success-card">
                    <Icon icon="solar:check-circle-bold-duotone" className="success-icon" />
                    <h2>Formulario Enviado con Éxito</h2>
                    <p className="success-correlativo">Tu número de seguimiento es: <strong>{correlativo}</strong></p>
                    <p>Hemos enviado una copia de tu hoja de reclamación al correo: <strong>{formData.email}</strong></p>
                    <p>RC Ingenieros atenderá tu caso y te responderá en el plazo establecido por ley.</p>
                    <button className="reclamaciones-btn-primary" onClick={() => window.location.href = '/'}>
                        Volver al Inicio
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="reclamaciones-page">
            {/* HERO SECTION */}
            <div className="reclamaciones-hero">
                <div className="reclamaciones-hero-overlay"></div>
                <div className="reclamaciones-hero-content">
                    <h1>Libro de Reclamaciones</h1>
                    <p>Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, esta institución cuenta con un Libro de Reclamaciones a tu disposición.</p>
                </div>
            </div>

            {/* MAIN FORM SECTION */}
            <div className="reclamaciones-main-container">
                <div className="reclamaciones-form-wrapper">
                    <div className="reclamaciones-header-info">
                        <div className="hoja-reclamacion-title">
                            <h2>Hoja de Reclamación</h2>
                            <span className="correlativo-badge">{correlativo}</span>
                        </div>
                        <p className="business-info">
                            <strong>RICARDO CALDERON INGENIEROS S.A.C.</strong><br/>
                            RUC: 20519069262<br/>
                            Av. Augusto B. Leguía 307 SMP - Lima - Perú
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="reclamaciones-form">
                        
                        {/* SECCIÓN 1: IDENTIFICACIÓN DEL CONSUMIDOR */}
                        <div className="form-section">
                            <div className="form-section-header">
                                <h3>1. Identificación del Consumidor Reclamante</h3>
                            </div>
                            
                            <div className="form-row">
                                <label className="checkbox-label minor-checkbox">
                                    <input 
                                        type="checkbox" 
                                        name="esMenor" 
                                        checked={formData.esMenor} 
                                        onChange={handleChange} 
                                    />
                                    <span>¿El reclamante es menor de edad?</span>
                                </label>
                            </div>

                            <div className="form-grid">
                                <div className="form-group full-width">
                                    <label>Nombre y Apellidos</label>
                                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder="Ingresa tu nombre completo" />
                                </div>
                                <div className="form-group">
                                    <label>Tipo de Documento</label>
                                    <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange}>
                                        <option value="DNI">DNI</option>
                                        <option value="CE">Carnet de Extranjería</option>
                                        <option value="Pasaporte">Pasaporte</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Número de Documento</label>
                                    <input type="text" name="numeroDocumento" value={formData.numeroDocumento} onChange={handleChange} required placeholder="Ej: 12345678" />
                                </div>
                                <div className="form-group full-width">
                                    <label>Domicilio</label>
                                    <input type="text" name="domicilio" value={formData.domicilio} onChange={handleChange} required placeholder="Dirección completa" />
                                </div>
                                <div className="form-group">
                                    <label>Teléfono / Celular</label>
                                    <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required placeholder="+51 999 999 999" />
                                </div>
                                <div className="form-group">
                                    <label>Correo Electrónico</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="tu@email.com" />
                                </div>
                            </div>

                            {formData.esMenor && (
                                <div className="apoderado-section">
                                    <h4>Datos del Apoderado o Representante Legal</h4>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label>Nombre y Apellidos del Apoderado</label>
                                            <input type="text" name="nombreApoderado" value={formData.nombreApoderado} onChange={handleChange} required={formData.esMenor} />
                                        </div>
                                        <div className="form-group">
                                            <label>DNI/CE del Apoderado</label>
                                            <input type="text" name="documentoApoderado" value={formData.documentoApoderado} onChange={handleChange} required={formData.esMenor} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* SECCIÓN 2: IDENTIFICACIÓN DEL BIEN CONTRATADO */}
                        <div className="form-section">
                            <div className="form-section-header">
                                <h3>2. Identificación del Bien Contratado</h3>
                            </div>
                            
                            <div className="radio-group-container">
                                <label className={`custom-radio ${formData.tipoBien === 'Producto' ? 'active' : ''}`}>
                                    <input type="radio" name="tipoBien" value="Producto" checked={formData.tipoBien === 'Producto'} onChange={(e) => handleRadioChange('tipoBien', e.target.value)} />
                                    <div className="radio-content">
                                        <Icon icon="solar:box-bold-duotone" />
                                        <span>Producto</span>
                                    </div>
                                </label>
                                <label className={`custom-radio ${formData.tipoBien === 'Servicio' ? 'active' : ''}`}>
                                    <input type="radio" name="tipoBien" value="Servicio" checked={formData.tipoBien === 'Servicio'} onChange={(e) => handleRadioChange('tipoBien', e.target.value)} />
                                    <div className="radio-content">
                                        <Icon icon="solar:settings-bold-duotone" />
                                        <span>Servicio</span>
                                    </div>
                                </label>
                            </div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Monto Reclamado (S/.)</label>
                                    <input type="number" step="0.01" name="montoReclamado" value={formData.montoReclamado} onChange={handleChange} required placeholder="0.00" />
                                </div>
                                <div className="form-group full-width">
                                    <label>Descripción del Bien Contratado</label>
                                    <textarea name="descripcionBien" value={formData.descripcionBien} onChange={handleChange} required rows="3" placeholder="Describe el producto o servicio adquirido..."></textarea>
                                </div>
                            </div>
                        </div>

                        {/* SECCIÓN 3: DETALLE DE LA RECLAMACIÓN Y PEDIDO */}
                        <div className="form-section">
                            <div className="form-section-header">
                                <h3>3. Detalle de la Reclamación y Pedido del Consumidor</h3>
                            </div>

                            <div className="radio-group-container type-reclamacion">
                                <label className={`custom-radio ${formData.tipoReclamacion === 'Reclamo' ? 'active' : ''}`}>
                                    <input type="radio" name="tipoReclamacion" value="Reclamo" checked={formData.tipoReclamacion === 'Reclamo'} onChange={(e) => handleRadioChange('tipoReclamacion', e.target.value)} />
                                    <div className="radio-content">
                                        <div className="radio-header">
                                            <strong>Reclamo</strong>
                                        </div>
                                        <p>Disconformidad relacionada a los productos o servicios.</p>
                                    </div>
                                </label>
                                <label className={`custom-radio ${formData.tipoReclamacion === 'Queja' ? 'active' : ''}`}>
                                    <input type="radio" name="tipoReclamacion" value="Queja" checked={formData.tipoReclamacion === 'Queja'} onChange={(e) => handleRadioChange('tipoReclamacion', e.target.value)} />
                                    <div className="radio-content">
                                        <div className="radio-header">
                                            <strong>Queja</strong>
                                        </div>
                                        <p>Malestar o descontento respecto a la atención al público.</p>
                                    </div>
                                </label>
                            </div>

                            <div className="form-grid">
                                <div className="form-group full-width">
                                    <label>Detalle de lo Sucedido</label>
                                    <textarea name="detalleReclamacion" value={formData.detalleReclamacion} onChange={handleChange} required rows="4" placeholder="Explica detalladamente lo sucedido..."></textarea>
                                </div>
                                <div className="form-group full-width">
                                    <label>Pedido / Solicitud del Consumidor</label>
                                    <textarea name="pedidoConsumidor" value={formData.pedidoConsumidor} onChange={handleChange} required rows="3" placeholder="¿Qué solicitas que hagamos al respecto?"></textarea>
                                </div>
                            </div>
                        </div>

                        {/* TÉRMINOS Y ENVÍO */}
                        <div className="form-footer">
                            <label className="checkbox-label terms-checkbox">
                                <input type="checkbox" name="aceptaTerminos" checked={formData.aceptaTerminos} onChange={handleChange} required />
                                <span>Declaro bajo juramento que los datos consignados en la presente hoja de reclamación son verdaderos y me someto a las disposiciones establecidas en el Código de Protección y Defensa del Consumidor y sus normas modificatorias.</span>
                            </label>

                            <button type="submit" className="reclamaciones-btn-submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Icon icon="eos-icons:loading" className="spin-icon" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <Icon icon="solar:paper-plane-bold" />
                                        Enviar Reclamo / Queja
                                    </>
                                )}
                            </button>
                            <p className="legal-disclaimer">
                                * La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
