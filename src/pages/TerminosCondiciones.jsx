import { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import './TerminosCondiciones.css'

function TerminosCondiciones() {
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
    <div className="terminos-page">
      {/* HERO SECTION */}
      <section className="terminos-hero" ref={headerRef}>
        <div className="terminos-hero-overlay"></div>
        <div className={`terminos-hero-container ${isVisible ? 'animate' : ''}`}>
          <div className="terminos-hero-text">
            <span className="terminos-section-badge">Legal</span>
            <h1>Términos y <span className="terminos-highlight">Condiciones</span></h1>
            <p>Conoce los términos de uso de nuestros servicios y productos tecnológicos.</p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="terminos-content">
        <div className="terminos-container">
          <div className="terminos-wrapper">
            
            {/* 1. INFORMACIÓN DE LA EMPRESA */}
            <div className="terminos-section">
              <div className="terminos-section-header">
                <Icon icon="solar:building-bold-duotone" className="terminos-icon" />
                <h2>1. Información de la Empresa</h2>
              </div>
              <div className="terminos-section-content">
                <p><strong>RC Ingenieros</strong> es una empresa dedicada a la provisión de soluciones tecnológicas para estaciones de servicio, sistemas de facturación electrónica y servicios técnicos especializados.</p>
                <ul>
                  <li><strong>Razón Social:</strong>  Ricardo Calderon Ingenieros SAC</li>
                  <li><strong>RUC:</strong> 20519069262</li>
                  <li><strong>Dirección:</strong> Av. Augusto B. Leguía 307 SMP - Lima - Perú</li>
                  <li><strong>Teléfono:</strong> (01) 500 5583 / +51 994 291 205</li>
                  <li><strong>Email:</strong> administracion@rcingenieros.com</li>
                </ul>
              </div>
            </div>

            {/* 2. OBJETO DEL ACUERDO */}
            <div className="terminos-section">
              <div className="terminos-section-header">
                <Icon icon="solar:document-text-bold-duotone" className="terminos-icon" />
                <h2>2. Objeto del Acuerdo</h2>
              </div>
              <div className="terminos-section-content">
                <p>Estos términos y condiciones regulan el uso de los servicios y productos ofrecidos por RC Ingenieros:</p>
                <ul>
                  <li><strong>APUGESCOM:</strong> Sistema de control para estaciones de servicio</li>
                  <li><strong>APUFACT:</strong> Sistema de facturación electrónica</li>
                  <li><strong>Soporte Técnico:</strong> Servicios de mantenimiento especializado en GNV/GLP</li>
                  <li><strong>Pozos a Tierra:</strong> Sistemas de puesta a tierra</li>
                  <li><strong>Productos:</strong> Dispensadores, surtididores y equipos industriales</li>
                </ul>
              </div>
            </div>

            {/* 3. CONDICIONES DE USO */}
            <div className="terminos-section">
              <div className="terminos-section-header">
                <Icon icon="solar:shield-check-bold-duotone" className="terminos-icon" />
                <h2>3. Condiciones de Uso</h2>
              </div>
              <div className="terminos-section-content">
                <p>Para utilizar nuestros servicios, el cliente debe:</p>
                <ul>
                  <li>Ser mayor de edad o tener autorización legal</li>
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Cumplir con las normativas peruanas vigentes</li>
                  <li>No utilizar los servicios para fines ilegales</li>
                  <li>Mantener la confidencialidad de credenciales de acceso</li>
                </ul>
              </div>
            </div>

            {/* 4. PROPIEDAD INTELECTUAL */}
            <div className="terminos-section">
              <div className="terminos-section-header">
                <Icon icon="solar:copyright-bold-duotone" className="terminos-icon" />
                <h2>4. Propiedad Intelectual</h2>
              </div>
              <div className="terminos-section-content">
                <p>Todos los derechos de propiedad intelectual sobre el software, sistemas, diseños y contenido proporcionados por RC Ingenieros son propiedad exclusiva de la empresa.</p>
                <ul>
                  <li>El cliente recibe una licencia de uso no exclusiva</li>
                  <li>Prohibida la copia, modificación o distribución no autorizada</li>
                  <li>Las marcas y logotipos son propiedad de RC Ingenieros</li>
                  <li>El código fuente es propiedad confidencial de RC Ingenieros</li>
                </ul>
              </div>
            </div>

            {/* 5. PRECIOS Y PAGOS */}
            <div className="terminos-section">
              <div className="terminos-section-header">
                <Icon icon="solar:wallet-money-bold-duotone" className="terminos-icon" />
                <h2>5. Precios y Pagos</h2>
              </div>
              <div className="terminos-section-content">
                <p>Los precios de nuestros servicios y productos están establecidos en soles (PEN) y pueden variar según el tipo de servicio y ubicación.</p>
                <ul>
                  <li><strong>Formas de pago:</strong> Transferencia bancaria, tarjetas de crédito/débito, pago contra entrega</li>
                  <li><strong>Facturación:</strong> Se emitirá factura electrónica conforme a normativa SUNAT</li>
                  <li><strong>Plazos:</strong> Los plazos de pago se establecen en cada contrato específico</li>
                  <li><strong>Moras:</strong> Intereses por mora según ley peruana vigente</li>
                </ul>
              </div>
            </div>

            {/* 6. GARANTÍAS Y SOPORTE */}
            <div className="terminos-section">
              <div className="terminos-section-header">
                <Icon icon="solar:medal-ribbon-bold-duotone" className="terminos-icon" />
                <h2>6. Garantías y Soporte</h2>
              </div>
              <div className="terminos-section-content">
                <p>RC Ingenieros ofrece garantías y soporte técnico según el tipo de producto o servicio contratado.</p>
                <ul>
                  <li><strong>Garantía de hardware:</strong> Según especificaciones del fabricante</li>
                  <li><strong>Garantía de software:</strong> 12 meses desde la instalación</li>
                  <li><strong>Soporte técnico:</strong> 24/7 para clientes con contrato de mantenimiento</li>
                  <li><strong>Tiempo de respuesta:</strong> Máximo 24 horas hábiles para consultas</li>
                  <li><strong>Limitaciones:</strong> La garantía no cubre daños por mal uso o fuerza mayor</li>
                </ul>
              </div>
            </div>

            {/* 7. PRIVACIDAD Y DATOS */}
            <div className="terminos-section">
              <div className="terminos-section-header">
                <Icon icon="solar:lock-password-bold-duotone" className="terminos-icon" />
                <h2>7. Privacidad y Datos</h2>
              </div>
              <div className="terminos-section-content">
                <p>RC Ingenieros se compromete a proteger la privacidad de los datos personales de sus clientes conforme a la Ley de Protección de Datos Personales (Ley N° 29733).</p>
                <ul>
                  <li>Los datos se utilizan exclusivamente para los fines del servicio contratado</li>
                  <li>No compartimos información con terceros sin consentimiento</li>
                  <li>Implementamos medidas de seguridad para proteger la información</li>
                  <li>El cliente puede solicitar la eliminación de sus datos en cualquier momento</li>
                  <li>Para más detalles, consultar nuestra Política de Privacidad</li>
                </ul>
              </div>
            </div>

            {/* 8. MODIFICACIONES DEL SERVICIO */}
            <div className="terminos-section">
              <div className="terminos-section-header">
                <Icon icon="solar:settings-bold-duotone" className="terminos-icon" />
                <h2>8. Modificaciones del Servicio</h2>
              </div>
              <div className="terminos-section-content">
                <p>RC Ingenieros se reserva el derecho de modificar sus servicios y estos términos y condiciones.</p>
                <ul>
                  <li>Se notificará a los clientes con 30 días de anticipación</li>
                  <li>Las modificaciones se consideran aceptadas si el cliente continúa usando el servicio</li>
                  <li>El cliente puede rechazar modificaciones cancelando el servicio</li>
                  <li>Las actualizaciones de software son automáticas y necesarias</li>
                </ul>
              </div>
            </div>

            {/* 9. TERMINACIÓN DEL SERVICIO */}
            <div className="terminos-section">
              <div className="terminos-section-header">
                <Icon icon="solar:close-circle-bold-duotone" className="terminos-icon" />
                <h2>9. Terminación del Servicio</h2>
              </div>
              <div className="terminos-section-content">
                <p>El servicio puede ser terminado por cualquiera de las partes bajo ciertas condiciones.</p>
                <ul>
                  <li><strong>Por el cliente:</strong> Con 30 días de aviso previo</li>
                  <li><strong>Por RC Ingenieros:</strong> Por incumplimiento de contrato o uso indebido</li>
                  <li><strong>Efectos:</strong> Se cesa el acceso a sistemas y servicios</li>
                  <li><strong>Obligaciones pendientes:</strong> Deben pagarse hasta la fecha de terminación</li>
                </ul>
              </div>
            </div>

            {/* 10. LEY APLICABLE Y JURISDICCIÓN */}
            <div className="terminos-section">
              <div className="terminos-section-header">
                <Icon icon="solar:scales-bold-duotone" className="terminos-icon" />
                <h2>10. Ley Aplicable y Jurisdicción</h2>
              </div>
              <div className="terminos-section-content">
                <p>Estos términos y condiciones se rigen por las leyes de la República del Perú.</p>
                <ul>
                  <li>Cualquier controversia se resolverá en los tribunales de Lima, Perú</li>
                  <li>Se aplicará la legislación peruana vigente</li>
                  <li>En caso de discrepancia, prevalecerá la versión en español</li>
                  <li>Las partes se someten a arbitraje si así se acuerda</li>
                </ul>
              </div>
            </div>

            {/* 11. CONTACTO PARA CONSULTAS */}
            <div className="terminos-section">
              <div className="terminos-section-header">
                <Icon icon="solar:phone-bold-duotone" className="terminos-icon" />
                <h2>11. Contacto para Consultas</h2>
              </div>
              <div className="terminos-section-content">
                <p>Para cualquier consulta, reclamación o aclaración sobre estos términos y condiciones:</p>
                <ul>
                  <li><strong>Email:</strong> administracion@rcingenieros.com</li>
                  <li><strong>Teléfono:</strong> (01) 500 5583 / +51 994 291 205</li>
                  <li><strong>Horario de atención:</strong> Lunes a Viernes, 8:00 AM - 6:00 PM</li>
                  <li><strong>Tiempo de respuesta:</strong> Máximo 24 horas hábiles</li>
                </ul>
              </div>
            </div>

            {/* FOOTER NOTE */}
            <div className="terminos-footer-note">
              <p><strong>Última actualización:</strong> Mayo 2026</p>
              <p>Al utilizar este sitio web, solicitar información o contratar nuestros servicios, usted acepta los Términos y Condiciones de RC Ingenieros S.A.C., así como el tratamiento de sus datos personales conforme a la normativa peruana vigente.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default TerminosCondiciones
