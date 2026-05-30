import React from 'react';
import './Footer.css';
import { Icon } from '@iconify/react';
import logorc1 from '../assets/logorc1.webp'; // Asumiendo este logo para el footer

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* 4 COLUMNAS PRINCIPALES */}
      <div className="footer-main">
        
        {/* COLUMNA 1: Marca y Redes Sociales */}
        <div className="footer-col-marca">
          <img src={logorc1} alt="RC Ingenieros S.A.C." className="footer-logo" />
          <p className="footer-descripcion">
            Somos una empresa peruana que ofrece servicios orientados a las Telecomunicaciones, 
            Electricidad y Servicios de Informática a diversas empresas.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=61567695884528" className="social-icon" aria-label="Facebook">
              <Icon icon="ri:facebook-fill" />
            </a>
            <a href="https://www.instagram.com/rcingenierosof/" className="social-icon" aria-label="Instagram">
              <Icon icon="ri:instagram-line" />
            </a>
            <a href="https://www.tiktok.com/@rcingenierosoficial" className="social-icon" aria-label="TikTok">
              <Icon icon="ic:baseline-tiktok" />
            </a>
            <a href="https://www.youtube.com/@RICARDOCALDERONINGENIEROSSAC" className="social-icon" aria-label="YouTube">
              <Icon icon="mingcute:youtube-line" />
            </a>
          </div>
        </div>

        {/* COLUMNA 2: Empresa */}
        <div className="footer-col-enlaces">
          <h3 className="footer-subtitle">Empresa</h3>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        {/* COLUMNA 3: Servicios */}
        <div className="footer-col-enlaces">
          <h3 className="footer-subtitle">Servicios</h3>
          <ul className="footer-links">
            <li><a href="/servicios/soporte-tecnico">Soporte GNV/GLP</a></li>
            <li><a href="/servicios/facturacion-electronica">Facturación Electronica</a></li>
            <li><a href="/servicios/apugescom">Gestión de Combustibles</a></li>
            <li><a href="/servicios/pozos-a-tierra">Pozos a Tierra</a></li>
          </ul>
        </div>

        {/* COLUMNA 4: Contacto */}
        <div className="footer-col-contacto">
          <h3 className="footer-subtitle">Contacto</h3>
          <ul className="footer-contacto-lista">
            <li className="contacto-item">
              <Icon icon="mdi:map-marker-outline" className="contacto-icon" />
              <div className="contacto-textos">
                <span>Av. Augusto B. Leguía 307 - SMP</span>
              </div>
            </li>
            <li className="contacto-item">
              <Icon icon="mdi:phone-outline" className="contacto-icon" />
              <div className="contacto-textos">
                <span>(01) 500 - 5584</span>
              </div>
            </li>
            <li className="contacto-item">
              <Icon icon="ph:phone-call" className="contacto-icon" />
              <div className="contacto-textos">
                <span>994 221 205</span>
              </div>
            </li>
            <li className="contacto-item">
              <Icon icon="mdi:email-outline" className="contacto-icon" />
              <div className="contacto-textos">
                <a href="mailto:ventas@rcingenieros.com">ventas@rcingenieros.com</a>
                <a href="mailto:ventas01@rcingenieros.com">ventas01@rcingenieros.com</a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* SUB-FOOTER LEGAL */}
      <div className="footer-divisor"></div>
      <div className="footer-sub">
        <div className="footer-copyright">
          <span>&copy; {new Date().getFullYear()} RC Ingenieros S.A.C. Todos los derechos reservados.</span>
        </div>
        <div className="footer-legal-links">
          <a href="/terminos-condiciones">Términos y Condiciones</a>
          <a href="/politica-privacidad">Políticas de Privacidad</a>
          <a href="#">Libro de Reclamaciones</a>
        </div>
      </div>

    </footer>
  );
}
