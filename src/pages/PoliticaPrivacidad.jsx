import { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import './PoliticaPrivacidad.css'

function PoliticaPrivacidad() {
  const [isVisible, setIsVisible] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <div className="privacidad-page">
      {/* HERO SECTION */}
      <section className="privacidad-hero" ref={headerRef}>
        <div className="privacidad-hero-overlay"></div>
        <div className={`privacidad-hero-container ${isVisible ? 'animate' : ''}`}>
          <div className="privacidad-hero-text">
            <span className="privacidad-section-badge">Legal</span>
            <h1>Política de <span className="privacidad-highlight">Privacidad</span></h1>
            <p>Protección de sus datos personales conforme a la Ley N° 29733.</p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="privacidad-content">
        <div className="privacidad-container">
          <div className="privacidad-wrapper">
            
            {/* 1. INFORMACIÓN DE LA EMPRESA */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:building-bold-duotone" className="privacidad-icon" />
                <h2>1. Responsable del Tratamiento</h2>
              </div>
              <div className="privacidad-section-content">
                <p><strong>RC Ingenieros</strong> es responsable del tratamiento de sus datos personales.</p>
                <ul>
                  <li><strong>Razón Social:</strong> Ricardo Calderon Ingenieros SAC</li>
                  <li><strong>RUC:</strong> 20519069262</li>
                  <li><strong>Dirección:</strong> Av. Augusto B. Leguía 307 SMP - Lima - Perú</li>
                  <li><strong>Teléfono:</strong> (01) 500 5583 / +51 994 291 20</li>
                  <li><strong>Email:</strong> administracion@rcingenieros.com</li>
                  {/*<li><strong>DPO (Delegado de Protección de Datos):</strong> ventas@rcingenieros.com</li>*/}
                </ul>
              </div>
            </div>

            {/* 2. OBJETIVO DE LA POLÍTICA */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:shield-check-bold-duotone" className="privacidad-icon" />
                <h2>2. Objetivo de la Política</h2>
              </div>
              <div className="privacidad-section-content">
                <p>Esta Política de Privacidad establece los términos en que RC Ingenieros recopila, utiliza y protege los datos personales de nuestros clientes, usuarios y visitantes, conforme a la Ley de Protección de Datos Personales (Ley N° 29733) y su Reglamento.</p>
                <ul>
                  <li>Garantizar la confidencialidad de sus datos personales</li>
                  <li>Informar sobre el tratamiento de sus datos</li>
                  <li>Proteger sus derechos como titular de datos</li>
                  <li>Cumplir con la normativa peruana vigente</li>
                </ul>
              </div>
            </div>

            {/* 3. DATOS PERSONALES QUE RECOPILAMOS */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:database-bold-duotone" className="privacidad-icon" />
                <h2>3. Datos Personales que Recopilamos</h2>
              </div>
              <div className="privacidad-section-content">
                <p>Recopilamos los siguientes tipos de datos personales:</p>
                <ul>
                  <li><strong>Datos de identificación:</strong> Nombre completo, DNI, RUC</li>
                  <li><strong>Datos de contacto:</strong> Email, teléfono, dirección</li>
                  <li><strong>Datos comerciales:</strong> Nombre de empresa, cargo, sector</li>
                  <li><strong>Datos técnicos:</strong> Dirección IP, tipo de dispositivo, navegador</li>
                  <li><strong>Datos de transacción:</strong> Historial de compras, facturas</li>
                  <li><strong>Datos de comunicación:</strong> Correos enviados, llamadas</li>
                </ul>
              </div>
            </div>

            {/* 4. FINALIDAD DEL TRATAMIENTO */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:target-bold-duotone" className="privacidad-icon" />
                <h2>4. Finalidad del Tratamiento</h2>
              </div>
              <div className="privacidad-section-content">
                <p>Sus datos personales son utilizados para las siguientes finalidades:</p>
                <ul>
                  <li><strong>Prestación de servicios:</strong> Gestionar sus contratos y servicios</li>
                  <li><strong>Facturación:</strong> Emitir facturas y comprobantes de pago</li>
                  <li><strong>Comunicación:</strong> Enviar información sobre servicios y promociones</li>
                  <li><strong>Soporte técnico:</strong> Brindar asistencia técnica</li>
                  <li><strong>Mejora de servicios:</strong> Analizar el uso para mejorar nuestros productos</li>
                  <li><strong>Cumplimiento legal:</strong> Cumplir obligaciones con SUNAT y autoridades</li>
                </ul>
              </div>
            </div>

            {/* 5. BASE LEGAL DEL TRATAMIENTO */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:scales-bold-duotone" className="privacidad-icon" />
                <h2>5. Base Legal del Tratamiento</h2>
              </div>
              <div className="privacidad-section-content">
                <p>El tratamiento de sus datos personales se fundamenta en:</p>
                <ul>
                  <li><strong>Consentimiento del titular:</strong> Usted autoriza el tratamiento de sus datos</li>
                  <li><strong>Ejecución de contrato:</strong> Para cumplir con el contrato de servicios</li>
                  <li><strong>Obligaciones legales:</strong> Para cumplir con la normativa peruana</li>
                  <li><strong>Interés legítimo:</strong> Para fines comerciales legítimos de la empresa</li>
                </ul>
              </div>
            </div>

            {/* 6. DERECHOS ARCO */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:user-hand-bold-duotone" className="privacidad-icon" />
                <h2>6. Derechos ARCO</h2>
              </div>
              <div className="privacidad-section-content">
                <p>Como titular de datos personales, usted tiene los siguientes derechos:</p>
                <ul>
                  <li><strong>Acceso:</strong> Conocer qué datos tenemos y cómo los usamos</li>
                  <li><strong>Rectificación:</strong> Solicitar corrección de datos inexactos</li>
                  <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos</li>
                  <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                </ul>
                <p>Para ejercer estos derechos, envíe un correo a administracion@rcingenieros.com con el asunto "Ejercicio de Derechos ARCO".</p>
              </div>
            </div>

            {/* 7. SEGURIDAD DE LOS DATOS */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:lock-bold-duotone" className="privacidad-icon" />
                <h2>7. Seguridad de los Datos</h2>
              </div>
              <div className="privacidad-section-content">
                <p>Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos:</p>
                <ul>
                  <li><strong>Encriptación:</strong> Datos encriptados en transmisión y almacenamiento</li>
                  <li><strong>Control de acceso:</strong> Solo personal autorizado puede acceder a los datos</li>
                  <li><strong>Firewalls:</strong> Sistemas de protección contra accesos no autorizados</li>
                  <li><strong>Backups:</strong> Copias de seguridad regulares</li>
                  <li><strong>Capacitación:</strong> Personal capacitado en protección de datos</li>
                </ul>
              </div>
            </div>

            {/* 8. COMPARTICIÓN DE DATOS */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:share-bold-duotone" className="privacidad-icon" />
                <h2>8. Compartición de Datos</h2>
              </div>
              <div className="privacidad-section-content">
                <p>Sus datos personales pueden ser compartidos con:</p>
                <ul>
                  <li><strong>Autoridades:</strong> SUNAT y otras autoridades cuando sea requerido por ley</li>
                  <li><strong>Proveedores:</strong> Proveedores de servicios técnicos necesarios para la prestación del servicio</li>
                  <li><strong>Entidades financieras:</strong> Para procesamiento de pagos</li>
                </ul>
                <p><strong>No vendemos sus datos personales a terceros.</strong></p>
              </div>
            </div>

            {/* 9. COOKIES Y TECNOLOGÍAS */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:cookie-bold-duotone" className="privacidad-icon" />
                <h2>9. Cookies y Tecnologías</h2>
              </div>
              <div className="privacidad-section-content">
                <p>Nuestro sitio web utiliza cookies para mejorar su experiencia:</p>
                <ul>
                  <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
                  <li><strong>Cookies de rendimiento:</strong> Analizan el uso del sitio</li>
                  <li><strong>Cookies de funcionalidad:</strong> Recuerdan sus preferencias</li>
                </ul>
                <p>Puede configurar su navegador para rechazar cookies. Tenga en cuenta que esto puede afectar la funcionalidad del sitio.</p>
              </div>
            </div>

            {/* 10. RETENCIÓN DE DATOS */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:clock-circle-bold-duotone" className="privacidad-icon" />
                <h2>10. Retención de Datos</h2>
              </div>
              <div className="privacidad-section-content">
                <p>Conservamos sus datos personales durante el tiempo necesario para:</p>
                <ul>
                  <li><strong>Datos contractuales:</strong> 6 años después de terminar el contrato (obligación legal)</li>
                  <li><strong>Datos fiscales:</strong> 6 años (obligación SUNAT)</li>
                  <li><strong>Datos de marketing:</strong> Hasta que revoque su consentimiento</li>
                  <li><strong>Datos técnicos:</strong> 2 años para fines de seguridad</li>
                </ul>
                <p>Una vez cumplido el plazo, los datos son eliminados de forma segura.</p>
              </div>
            </div>

            {/* 11. CAMBIOS A LA POLÍTICA */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:refresh-bold-duotone" className="privacidad-icon" />
                <h2>11. Cambios a la Política</h2>
              </div>
              <div className="privacidad-section-content">
                <p>Podemos actualizar esta Política de Privacidad periódicamente.</p>
                <ul>
                  <li>Notificaremos los cambios significativos por email</li>
                  <li>La fecha de última actualización se indica al final</li>
                  <li>El uso continuado del sitio implica aceptación de los cambios</li>
                </ul>
              </div>
            </div>

            {/* 12. CONTACTO PARA CONSULTAS */}
            <div className="privacidad-section">
              <div className="privacidad-section-header">
                <Icon icon="solar:phone-bold-duotone" className="privacidad-icon" />
                <h2>12. Contacto para Consultas</h2>
              </div>
              <div className="privacidad-section-content">
                <p>Para cualquier consulta, reclamación o ejercicio de derechos ARCO:</p>
                <ul>
                  <li><strong>Email:</strong> administracion@rcingenieros.com</li>
                  <li><strong>Teléfono:</strong> (01) 500 5583 / +51 994 291 20</li>
                  <li><strong>Horario de atención:</strong> Lunes a Viernes, 8:00 AM - 6:00 PM</li>
                  <li><strong>Tiempo de respuesta:</strong> Máximo 30 días hábiles</li>
                </ul>
                <p>Para reclamaciones, también puede presentarlas ante la Autoridad de Protección de Datos Personales (APDP).</p>
              </div>
            </div>

            {/* FOOTER NOTE */}
            <div className="privacidad-footer-note">
              <p><strong>Última actualización:</strong> Mayo 2026</p>
              <p>Esta política cumple con la Ley de Protección de Datos Personales (Ley N° 29733) y su Reglamento.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default PoliticaPrivacidad
