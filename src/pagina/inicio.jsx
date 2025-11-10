import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/inicio/styles.css';
import logo from '../assets/inicio/logo.png';
import lana from '../assets/inicio/lana.jpg';
import aguja from '../assets/inicio/agujas.jpg';
import boton from '../assets/inicio/botones.jpg';

export default function Inicio() {
  return (
    <div className="inicio-container">
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold text-1 mb-4">Mercería Calderón</h1>
              <p className="lead text-muted mb-4">
                Todo para tus proyectos de costura, tejido y manualidades. 
                Encuentra los mejores hilados, telas y accesorios de calidad.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-2">
                  Ver Productos
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-2">
                  Ofertas Especiales
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-body text-center">
                <img src={logo} className="img-fluid rounded"/>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-1">Nuestras Categorías</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="category-card card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body text-center p-4">
                  <div className="category-icon display-1 text-brown">🧶</div>
                  <h5 className="card-title fw-bold mt-3">Hilados</h5>
                  <p className="card-text text-muted">
                    Lanas, hilos de algodón, acrílicos y mezclas para todo tipo de proyectos
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="category-card card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body text-center p-4">
                  <div className="category-icon display-1 text-brown">✂️</div>
                  <h5 className="card-title fw-bold mt-3">Telas</h5>
                  <p className="card-text text-muted">
                    Amplia variedad de telas por metro: algodón, lino, seda y más
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="category-card card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body text-center p-4">
                  <div className="category-icon display-1 text-brown">🪡</div>
                  <h5 className="card-title fw-bold mt-3">Accesorios</h5>
                  <p className="card-text text-muted">
                    Agujas, cierres, botones, cintas y todo lo necesario para tus creaciones
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="category-card card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body text-center p-4">
                  <div className="category-icon display-1 text-brown">📚</div>
                  <h5 className="card-title fw-bold mt-3">Patrones</h5>
                  <p className="card-text text-muted">
                    Guías, patrones y consejos para tus proyectos de costura y tejido
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-1">Productos Destacados</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="product-image bg-secondary rounded-top d-flex align-items-center justify-content-center text-white" style={{height: '200px'}}>
                  <img src={lana} class="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Hilo de Coser de Algodón</h5>
                  <p className="card-text text-muted">
                    Esencial para cualquier proyecto de costura a mano o a máquina. Está compuesto de algodón 100% de alta calidad, lo que lo hace resistente y suave al tacto.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-outline-primary btn-sm">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="product-image bg-secondary rounded-top d-flex align-items-center justify-content-center text-white" style={{height: '200px'}}>
                  <img src={aguja} class="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Agujas para Coser a Mano</h5>
                  <p className="card-text text-muted">
                    Son un conjunto de agujas de diferentes longitudes y grosores (finas para telas delicadas, gruesas para tejidos de punto o alfombras).
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-outline-primary btn-sm">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="product-image bg-secondary rounded-top d-flex align-items-center justify-content-center text-white" style={{height: '200px'}}>
                  <img src={boton} class="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Botones de Plástico Liso</h5>
                  <p className="card-text text-muted">
                    Los botones más comunes y versátiles que existen. Suelen ser de plástico liso, en colores básicos (blanco, negro, marrón, azul marino, beige) y con 4 agujeros para coserlos.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-outline-primary btn-sm">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-primary btn-lg px-5">
              Ver Todos los Productos
            </button>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold text-1 mb-4">Sobre Mercería Calderón</h2>
              <p className="text-muted mb-4">
                Somos tu aliado en todos tus proyectos creativos. 
                Ofrecemos productos de calidad, asesoramiento especializado y un ambiente acogedor 
                para amantes de las manualidades.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Productos de primera calidad
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Asesoramiento personalizado
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Envíos a todo el país
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Talleres y cursos especializados
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="about-image bg-secondary rounded text-center text-white mt-4 mt-lg-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.7306657834115!2d-68.1630261351001!3d-16.508577777745042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf9f3ccb20f7%3A0x1546d703d9cf36a9!2s12%20de%20Octubre%2C%20El%20Alto!5e1!3m2!1ses-419!2sbo!4v1762741155813!5m2!1ses-419!2sbo" 
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>  
      <footer className="text-light">
        <div className="container-fluid fondoF p-5">
          <div className="row g-4">
            <div className="col-md-6">
              <h5 className="fw-bold mb-3 text-light">Mercería Calderon</h5>
              <p className="text-light">
                Tu tienda de confianza para hilados, telas y accesorios de costura.
              </p>
              <div className="social-icons mt-4">
                <a href="#" className="me-3 hover-icon">
                  <i className="bi bi-facebook fs-5 text-white"></i>
                </a>
                <a href="#" className="me-3 hover-icon">
                  <i className="bi bi-instagram fs-5 text-white"></i>
                </a>
                <a href="#" className="me-3 hover-icon">
                  <i className="bi bi-whatsapp fs-5 text-white"></i>
                </a>
                <a href="#" className="hover-icon">
                  <i className="bi bi-envelope fs-5 text-white"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6 ">
              <h6 className="fw-bold mb-3 text-brown-light">Contacto</h6>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-geo-alt me-2 text-brown-light"></i>
                  <span>Zona 12 de Octubre Calle Raul Salmon entre calle 4 y calle 3</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone me-2 text-brown-light"></i>
                  <span>+591 11223344</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-whatsapp me-2 text-brown-light"></i>
                  <span>+591 11223344</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-envelope me-2 text-brown-light"></i>
                  <span>info@merceriaccalderon.com</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-clock me-2 text-brown-light"></i>
                  <span>Lun-Vie: 9:00-21:00 Sáb: 9:00-16:00</span>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4 border-secondary" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-white mb-2 mb-md-0">
                &copy; 2025 Mercería Calderón. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end">
                <a href="#" className="text-white text-decoration-none me-3 hover-text">
                  Términos y Condiciones
                </a>
                <a href="#" className="text-white text-decoration-none hover-text">
                  Política de Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}