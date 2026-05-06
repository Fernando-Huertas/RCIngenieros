import React from 'react'
import './Home.css'

// --- ASSETS (Imágenes) ---
import heroimg1 from '../assets/imghero1.png'
import heroImg2 from '../assets/img1header.jfif'
import heroImg3 from '../assets/hero3.jpg'
import heroImg4 from '../assets/slide4ac.png'
import SP247 from '../assets/SP247.png'
import facturacion from '../assets/imgapufact.png'
import apugescom2 from '../assets/imgapugescom.png'
import servapufact from '../assets/servapufact.png'
import apugescom from '../assets/homeapugescom.png'
import imgnostros from '../assets/imgnostros.png'
import img2nosotros from '../assets/img2nosotros.png'
import verificadosunat from '../assets/verificado-por-sunat.webp'
import iso27000 from '../assets/iso27001.webp'
import primax from '../assets/clientes/1.jpg'
import gesa from '../assets/clientes/2.jpg'
import gasbel from '../assets/clientes/3.jpg'
import repsol from '../assets/clientes/4.jpg'
import ges from '../assets/clientes/5.jpg'
import petrolumara from '../assets/clientes/6.jpg'
import ava from '../assets/clientes/7.jpg'
import sagitario from '../assets/clientes/8.jpg'
import mascaravideo from '../assets/mascaravideo.webp'
import tuercaRC from '../assets/tuercaRC.png'


// --- LIBRERÍAS ---
import { Icon } from '@iconify/react';
import { useState, useEffect, useCallback, useRef } from 'react';
import ReactPlayer from 'react-player';

export default function Home() {

  const vidUrl = "https://www.youtube.com/watch?v=15-V_dffFE0";

  // ==========================================
  // 1. ESTADOS Y REFERENCIAS
  // ==========================================
  
  // Estados para el Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  // Estados para la Animación al Scroll
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCuadroVisible, setIsCuadroVisible] = useState(false);
  const [isNosotrosVisible, setIsNosotrosVisible] = useState(false);
  const [isApugescomVisible, setIsApugescomVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [isApufactVisible, setIsApufactVisible] = useState(false);
  const [isClientesVisible, setIsClientesVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  // Referencias para el Observer
  const headerRef = useRef(null);
  const cuadroRef = useRef(null);
  const nosotrosRef = useRef(null);
  const apugescomRef = useRef(null);
  const ctaRef = useRef(null);
  const apufactRef = useRef(null);
  const clientesRef = useRef(null);
  const videoRef = useRef(null);

  // Estados para el Carrousel de Clientes (Draggable & Infinite)
  const [isClientsHeaderVisible, setIsClientsHeaderVisible] = useState(false);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const xPos = useRef(0);
  const animationRef = useRef(null);
  const speed = 1.2; // Velocidad del autoscroll
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Función de animación para el scroll de clientes
  const animateClients = useCallback(() => {
    if (!isDragging.current && trackRef.current) {
      xPos.current += speed;
      const halfWidth = trackRef.current.scrollWidth / 2;
      
      if (xPos.current >= halfWidth) {
        xPos.current = 0;
      }
      
      trackRef.current.style.transform = `translateX(-${xPos.current}px)`;
    }
    animationRef.current = requestAnimationFrame(animateClients);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateClients);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animateClients]);

  // Handlers para el Arrastre
  const handleClientMouseDown = (e) => {
    isDragging.current = true;
    startX.current = (e.pageX || e.touches[0].pageX) + xPos.current;
  };

  const handleClientMouseMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.pageX || (e.touches && e.touches[0].pageX);
    xPos.current = startX.current - currentX;
    
    // Mantener dentro del bucle infinito (0 a mitad del track)
    if (trackRef.current) {
      const halfWidth = trackRef.current.scrollWidth / 2;
      if (xPos.current < 0) xPos.current += halfWidth;
      if (xPos.current >= halfWidth) xPos.current -= halfWidth;
      
      trackRef.current.style.transform = `translateX(-${xPos.current}px)`;
    }
  };

  const handleClientMouseUp = () => {
    isDragging.current = false;
  };


  // ==========================================
  // 2. LÓGICA DE ANIMACIÓN (Intersection Observer)
  // ==========================================
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15 // Se activa cuando el 15% del elemento entra en vista
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) setIsHeaderVisible(true);
          if (entry.target === cuadroRef.current) setIsCuadroVisible(true);
          if (entry.target === nosotrosRef.current) setIsNosotrosVisible(true);
          if (entry.target === apugescomRef.current) setIsApugescomVisible(true);
          if (entry.target === ctaRef.current) setIsCtaVisible(true);
          if (entry.target === apufactRef.current) setIsApufactVisible(true);
          if (entry.target === clientesRef.current) setIsClientesVisible(true);
          if (entry.target === videoRef.current) setIsVideoVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (cuadroRef.current) observer.observe(cuadroRef.current);
    if (nosotrosRef.current) observer.observe(nosotrosRef.current);
    if (apugescomRef.current) observer.observe(apugescomRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (apufactRef.current) observer.observe(apufactRef.current);
    if (clientesRef.current) observer.observe(clientesRef.current);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);


  // ==========================================
  // 3. LÓGICA DEL HERO SLIDER
  // ==========================================

  // Función para cambiar de slide
  const showSlide = useCallback((index) => {
    if (index >= totalSlides) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(totalSlides - 1);
    } else {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  // Efecto para el Reloj Automático (Auto-play)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [currentSlide, showSlide]);

  // Manejadores manuales de los botones
  const nextSlide = () => showSlide(currentSlide + 1);
  const prevSlide = () => showSlide(currentSlide - 1);
  const goToSlide = (index) => showSlide(index);


  // ==========================================
  // 4. ESTRUCTURA (JSX)
  // ==========================================
  
  return (
    <>

      {/* --- SECCIÓN HERO (SLIDER) --- */}
      <section className="hero-slider-container">
        
        {/* Mapeo dinámico o slides individuales (conservamos tu estructura actual) */}
        
        {/* Slide 1 */}
        <div className={`hero-slide ${currentSlide === 0 ? "active" : ""}`}
            style={{ backgroundImage: `linear-gradient(rgba(10,15,44,0.7), rgba(0,0,0,0.5)), url(${heroimg1})` }}>
            <div className="hero-content">
                <div className="subtitulo">
                    <span>Soluciones Tecnológicas Empresariales</span>
                </div>
                <div className="titulo">
                    <h1>
                      Estaciones de Servicio <br/>
                      <span className="highlight">GNV – GLP – GNC – Líquidos y Urea</span>
                    </h1>
                    <p className="hero-descripcion">Líderes en gestión de combustibles, facturación electrónica, 
                        servicios técnicos especializados en GNV/GLP y sistemas de
                        puesta a tierra.</p>
                </div>
                <div className="botones-hero">
                    <a href="#">
                      <button className="boton-hero-1">Solicitar Cotizacion <Icon icon="line-md:arrow-right" style={{fontSize: "22px"}} /></button>
                    </a>
                    <a href="#">
                      <button className="boton-hero-2">Nuestros Servicios</button>
                    </a>
                </div>
            </div>
            <div className="info-hero">
                <div className="info-hero-group">
                    <div className="info-hero-cuadro">
                        <span className="info-title">20+</span>
                        <span className="info-description">Clientes Activos</span>
                    </div>
                    <div className="info-hero-cuadro">
                        <span className="info-title">100%</span>
                        <span className="info-description">Disponibilidad</span>
                    </div>
                </div>
                <div className="info-hero-group">
                    <div className="info-hero-cuadro">
                        <span className="info-title">24/7</span>
                        <span className="info-description">Soporte Técnico</span>
                    </div>
                    <div className="info-hero-cuadro">
                        <span className="info-title">15+</span>
                        <span className="info-description">Años de Experiencia</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Slide 2 */}
        <div className={`hero-slide ${currentSlide === 1 ? "active" : ""}`}
            style={{ backgroundImage: `linear-gradient(rgba(10,15,44,0.7), rgba(0,0,0,0.5)), url(${heroImg2})` }}>
            <div className="hero-content">
                <div className="subtitulo">
                    <span>Gestión Digital y SUNAT</span>
                </div>
                <div className="titulo">
                    <h1>
                      Facturación Electrónica <br/>
                      <span className="highlight">Rápida, Segura y Confiable</span>
                    </h1>
                    <p className="hero-descripcion">Optimiza la gestión de tus ventas con nuestro sistema automatizado adaptado a la normativa vigente en todo el Perú.</p>
                </div>
                <div className="botones-hero">
                    <a href="#">
                      <button className="boton-hero-1">Solicitar Cotizacion <Icon icon="line-md:arrow-right" style={{fontSize: "22px"}} /></button>
                    </a>
                    <a href="#">
                      <button className="boton-hero-2">Nuestros Servicios</button>
                    </a>
                </div>
            </div>
            <div className="info-hero">
                <div className="info-hero-group">
                    <div className="info-hero-cuadro">
                        <span className="info-title">20+</span>
                        <span className="info-description">Clientes Activos</span>
                    </div>
                    <div className="info-hero-cuadro">
                        <span className="info-title">100%</span>
                        <span className="info-description">Disponibilidad</span>
                    </div>
                </div>
                <div className="info-hero-group">
                    <div className="info-hero-cuadro">
                        <span className="info-title">24/7</span>
                        <span className="info-description">Soporte Técnico</span>
                    </div>
                    <div className="info-hero-cuadro">
                        <span className="info-title">15+</span>
                        <span className="info-description">Años de Experiencia</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Slide 3 */}
        <div className={`hero-slide ${currentSlide === 2 ? "active" : ""}`}
            style={{ backgroundImage: `linear-gradient(rgba(10,15,44,0.7), rgba(0,0,0,0.5)), url(${heroImg3})` }}>
            <div className="hero-content">
                <div className="subtitulo">
                    <span>Soluciones de Infraestructura</span>
                </div>
                <div className="titulo">
                    <h1>
                      Ingeniería Integral en Acero<br/>
                      <span className="highlight">y Mobiliario Industrial</span>
                    </h1>
                    <p className="hero-descripcion">Elevamos la operatividad de tu empresa mediante infraestructura robusta
                       en acero inoxidable y galvanizado, garantizando durabilidad y eficiencia en cada proyecto a nivel nacional.</p>
                </div>
                <div className="botones-hero">
                    <a href="#">
                      <button className="boton-hero-1">Solicitar Cotizacion <Icon icon="line-md:arrow-right" style={{fontSize: "22px"}} /></button>
                    </a>
                    <a href="#">
                      <button className="boton-hero-2">Nuestros Servicios</button>
                    </a>
                </div>
            </div>
            <div className="info-hero">
                <div className="info-hero-group">
                    <div className="info-hero-cuadro">
                        <span className="info-title">20+</span>
                        <span className="info-description">Clientes Activos</span>
                    </div>
                    <div className="info-hero-cuadro">
                        <span className="info-title">100%</span>
                        <span className="info-description">Disponibilidad</span>
                    </div>
                </div>
                <div className="info-hero-group">
                    <div className="info-hero-cuadro">
                        <span className="info-title">24/7</span>
                        <span className="info-description">Soporte Técnico</span>
                    </div>
                    <div className="info-hero-cuadro">
                        <span className="info-title">15+</span>
                        <span className="info-description">Años de Experiencia</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Slide 4 */}
        <div className={`hero-slide ${currentSlide === 3 ? "active" : ""}`}
            style={{ backgroundImage: `linear-gradient(rgba(10,15,44,0.7), rgba(0,0,0,0.5)), url(${heroImg4})` }}>
            <div className="hero-content">
                <div className="subtitulo">
                    <span>Soporte y Tecnología de Combustibles</span>
                </div>
                <div className="titulo">
                    <h1>
                      Dispensadores y Surtidores<br/>
                      <span className="highlight">de Alta Calidad</span>
                    </h1>
                    <p className="hero-descripcion">Garantiza el despacho exacto y la continuidad operativa de tu estación con 
                      nuestros equipos de última generación. Soluciones robustas diseñadas para resistir el trabajo pesado con máxima eficiencia.</p>
                </div>
                <div className="botones-hero">
                    <a href="#">
                      <button className="boton-hero-1">Solicitar Cotizacion <Icon icon="line-md:arrow-right" style={{fontSize: "22px"}} /></button>
                    </a>
                    <a href="#">
                      <button className="boton-hero-2">Nuestros Servicios</button>
                    </a>
                </div>
            </div>
            <div className="info-hero">
                <div className="info-hero-group">
                    <div className="info-hero-cuadro">
                        <span className="info-title">20+</span>
                        <span className="info-description">Clientes Activos</span>
                    </div>
                    <div className="info-hero-cuadro">
                        <span className="info-title">100%</span>
                        <span className="info-description">Disponibilidad</span>
                    </div>
                </div>
                <div className="info-hero-group">
                    <div className="info-hero-cuadro">
                        <span className="info-title">24/7</span>
                        <span className="info-description">Soporte Técnico</span>
                    </div>
                    <div className="info-hero-cuadro">
                        <span className="info-title">15+</span>
                        <span className="info-description">Años de Experiencia</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Flechas de Control */}
        <button className="slider-btn prev-btn" onClick={prevSlide}>
            <Icon icon="bx:chevron-left" style={{fontSize: "22px"}} />
        </button>
        <button className="slider-btn next-btn" onClick={nextSlide}>
            <Icon icon="bx:chevron-right" style={{fontSize: "22px"}} />
        </button>

        {/* Puntos Indicadores */}
        <div className="slider-indicators">
            {[...Array(totalSlides)].map((_, index) => (
              <span 
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
        </div>
      </section>

      {/* --- SECCIÓN SERVICIOS (Con Vigilante de Scroll Dual) --- */}
      <section className="container-servicios" style={{ '--bg-tuerca': `url(${tuercaRC})` }}>
          <div className="info-servi">
              
              {/* Parte superior (Título y Botones): Animados con isHeaderVisible */}
              <div ref={headerRef} className={`servicios-titulo ${isHeaderVisible ? "animate" : ""}`}>
                  <div className="servicios-titulo-izq">
                      <h2 className="servicios-titulo-texto">Tu Socio Estratégico en Transformación Digital</h2>
                      <p className="servicios-descripcion-texto">En RC Ingenieros S.A.C., nos especializamos en modernizar la infraestructura
                         tecnológica de las estaciones de servicio en todo el Perú. Nuestro compromiso es garantizar que tu negocio nunca se 
                         detenga, integrando sistemas de facturación electrónica de alta precisión y soporte técnico especializado disponible
                         en todo momento.</p>
                  </div>
                  <div className="servicios-botones-der">
                      <a style={{ textDecoration: 'none' }} href="#">
                        <button className="servicios-boton-1">Ver más Servicios</button>
                      </a>
                      <a style={{ textDecoration: 'none' }} href="#">
                        <button className="servicios-boton-2">Contáctanos</button>
                      </a>
                  </div>
              </div>

              {/* Parte inferior (Cuadrícula de Tarjetas): Animada con isCuadroVisible cuando llega ella misma */}
              <div 
                ref={cuadroRef} 
                className={`cuadro-servicios ${isCuadroVisible ? "animate" : ""}`}
              >
                  <div className="card-servicios">
                      <img src={SP247} alt="Soporte Técnico" />
                      <div className="icon">
                          <Icon icon="carbon:service-levels" />
                      </div>
                      <h2 className="servicios-titulo-texto">Soporte Técnico a Estaciones de Servicio 24/7</h2>
                      <a style={{ textDecoration: 'none' }} href="#">
                        <button className="boton">Ver más<Icon icon="line-md:arrow-right" className="flechita1" /></button>
                      </a>
                  </div>

                  <div className="card-servicios">
                      <img src={servapufact} alt="Facturación Electronica" />
                      <div className="icon">
                          <Icon icon="fluent:money-calculator-24-regular" />
                      </div>
                      <h2 className="servicios-titulo-texto">Gestión de Facturación Electronica Apufact</h2>
                      <a style={{ textDecoration: 'none' }} href="#">
                        <button className="boton">Ver más<Icon icon="line-md:arrow-right" className="flechita1" /></button>
                      </a>
                  </div>

                  <div className="card-servicios">
                      <img src={apugescom2} alt="Sistema de Gestión de Combustible" />
                      <div className="icon">
                          <Icon icon="pepicons-pop:electricity-circle" />
                      </div>
                      <h2 className="servicios-titulo-texto">Sistema de Gestión de Combustible APUGESCOM</h2>
                      <a style={{ textDecoration: 'none' }} href="#">
                        <button className="boton">Ver más<Icon icon="line-md:arrow-right" className="flechita1" /></button>
                      </a>
                  </div>
              </div>

          </div>
      </section>

      <section className='container-nosotros' ref={nosotrosRef}>
        <div className={`info-nosotros ${isNosotrosVisible ? 'animate' : ''}`}>
            <div className='nosotros-izq'>
              <div className='img-principal'>
                <img src={imgnostros} alt="#" />
              </div>
              <div className='img-info'>
                <h1>15+</h1>
                <span>Años de Experiencia</span>
              </div>
              <div className='img-secundaria'>
                <img src={img2nosotros} alt="#" />
              </div>
            </div>
            <div className='nosotros-der'>
              <h2 className='nosotros-subtitulo'>SOBRE NOSOTROS</h2>
              <h1 className='nosotros-titulo'>Soluciones Tecnológicas, Eléctricas e Informaticas</h1>
              <p className='nosotros-descripcion'>Somos una empresa peruana líder que brinda soluciones
                 innovadoras y confiables para el control de ventas y gestión de combustible, con más de 
                 15 años de experiencia ayudando a optimizar operaciones y cumplir normativas.</p>
              <div className='lista'>
                  <div className='lista-item'>
                    <Icon icon="lets-icons:check-fill" />
                    <p>Cumplimiento Normativo</p>
                  </div>
                  <div className='lista-item'>
                    <Icon icon="lets-icons:check-fill" />
                    <p>Optimización de Operaciones</p>
                  </div>
                  <div className='lista-item'>
                    <Icon icon="lets-icons:check-fill" />
                    <p>Soporte Técnico 24/7</p>
                  </div>
              </div>
              <div className='nosotros-bottom'>
                <div className='nosotros-bottom-izq'>
                  <Icon icon="mingcute:phone-call-fill" />
                </div>
                <div className='nosotros-bottom-centro'>
                  <p>Comunicate con nosotros</p>
                  <span>+51 987 654 321</span>
                </div>
                <div className='nosotros-bottom-boton'>
                  <button className='boton'>Ver más</button>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className='container-apugescom' ref={apugescomRef}>
          <div className={`info-apugescom ${isApugescomVisible ? 'animate' : ''}`}>
            <div className='apugescom-content-wrapper'>
              <div className='apugescom-text-side'>
                <h1 className='apugescom-titulo'>
                  Sistema de Gestión de Combustible <br />
                  <span className="apugescom-highlight">APUGESCOM</span>
                </h1>
                <p className='apugescom-descripcion'>
                  APUGESCOM es su solución completa para el control total de sus Estaciones de Servicios en GLP,
                   GNL, UREA y Líquidos. Permite la gestión integral de inventarios, dipensadores, ventas y reportes
                    en tiempo real, maximizando la presición, eficiencia operativa y la rentabilidad de su negocio de combustibles.
                </p>
                <div className='apugescom-buttons'>
                  <button className='btn-cotizar'>
                    Solicitar Cotización <Icon icon="line-md:arrow-right" />
                  </button>
                  <button className='btn-ver-mas'>
                    Ver Más
                  </button>
                </div>
              </div>
            </div>

            <div className='apugescom-features-row'>
              <div className='feature-item'>
                <div className='feature-icon'>
                  <Icon icon="fluent:hand-draw-24-regular" />
                </div>
                <div className='feature-text'>
                  <h3>Fácil Manejo</h3>
                  <Icon icon="lets-icons:check-fill" className="check-icon" />
                </div>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'>
                  <Icon icon="clarity:settings-line" />
                </div>
                <div className='feature-text'>
                  <h3>No Usamos Controladores</h3>
                  <Icon icon="lets-icons:check-fill" className="check-icon" />
                </div>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'>
                  <Icon icon="lucide:git-branch" />
                </div>
                <div className='feature-text'>
                  <h3>Integrado con Apufact</h3>
                  <Icon icon="lets-icons:check-fill" className="check-icon" />
                </div>
              </div>
            </div>
          </div>
      </section>


      <section className='llamada-accion' ref={ctaRef}>
        <div className={`info-llamada-accion ${isCtaVisible ? 'animate' : ''}`}>
          <div className='llamada-accion-izq'>
            <h1 className='llamada-accion-titulo'>Construyamos algo Juntos</h1>
            <p className='llamada-accion-descripcion'>Contáctanos hoy mismo para una consulta gratuita y déjanos
               ayudarte a llevar tu proyecto al siguiente nivel.</p>
          </div>
          <div className='llamada-accion-der'>
            <button className='btn-cotizar'>
              Solicitar Cotización {/* <Icon icon="line-md:arrow-right" /> */}
            </button>
          </div>
        </div>
      </section>


       <section className='container-apufact' ref={apufactRef}>
          <div className={`info-apufact ${isApufactVisible ? 'animate' : ''}`}>
            <div className='apufact-content-wrapper'>
              <div className='apufact-text-side'>
                <h1 className='apufact-titulo'>
                  Facturación Electronica 100% Segura<br />
                  <span className="apufact-highlight">APUFACT</span>
                </h1>
                <p className='apufact-descripcion'>
                  Transforme la administración de su empresa con Apufact, el facturador electrónico diseñado para 
                  adaptarse a cualquier sector comercial. Cumpla con las normativas de SUNAT de forma rápida, sencilla
                   y segura. Ya sea que maneje una tienda minorista, servicios profesionales o una gran distribuidora,
                    nuestra plataforma le permite emitir comprobantes legales en segundos desde cualquier dispositivo.
                </p>
                <div className='apufact-images'>
                  <img src={verificadosunat} alt="" />
                  <img src={iso27000} alt="" />
                  </div>
                <div className='apufact-buttons'>
                  <button className='btn-cotizar'>
                    Solicitar Cotización <Icon icon="line-md:arrow-right" />
                  </button>
                  <button className='btn-ver-mas'>
                    Ver Más
                  </button>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className='clientes' ref={clientesRef}>
        <div className={`info-clientes ${isClientesVisible ? 'animate' : ''}`}>
          <h2 className='clientes-titulo'>Nuestros Clientes</h2>
          <div 
            className="clientes-carousel"
            onMouseDown={handleClientMouseDown}
            onMouseMove={handleClientMouseMove}
            onMouseUp={handleClientMouseUp}
            onMouseLeave={handleClientMouseUp}
            onTouchStart={handleClientMouseDown}
            onTouchMove={handleClientMouseMove}
            onTouchEnd={handleClientMouseUp}
          >
            <div className='clientes-track' ref={trackRef}>
              {[primax, gesa, gasbel, repsol, ges, petrolumara, ava, sagitario,
                primax, gesa, gasbel, repsol, ges, petrolumara, ava, sagitario].map((img, index) => (
                <div className='cliente' key={index}>
                  <img src={img} alt={`Cliente ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='video' ref={videoRef}>
        <div className={`info-video ${isVideoVisible ? 'animate' : ''}`}>
          <h1 className='video-titulo'>Video Corporativo RC INGENIEROS</h1>
          <p className='video-descripcion'>Transformamos tus desafíos en soluciones. Conoce nuestra experiencia 
            integral en infraestructura y gestión administrativa, y el compromiso con el futuro de tu negocio.</p>
          <div className='video-content'>
            {!isVideoPlaying ? (
              <div 
                className="video-poster" 
                onClick={() => setIsVideoPlaying(true)}
                style={{ backgroundImage: `url("${mascaravideo}")` }}
              >
                <div className="video-overlay-glow"></div>
                <div className="play-button-wrapper">
                  <div className="play-button-ripple"></div>
                  <Icon icon="line-md:play-filled-to-pause-transition" className="play-icon-premium" />
                </div>
                <div className="poster-content">
                  <span>Ver Video Corporativo</span>
                </div>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/15-V_dffFE0?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0 }}
              ></iframe>
            )}
          </div>
        </div>
      </section>

    </>
  );
}
