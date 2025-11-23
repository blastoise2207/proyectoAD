import { Routes, Route, Link } from "react-router-dom";
import './styles.css';
import Inicio from "./pagina/inicio";
import MarcoTeorico from "./pagina/marcoT";
import MA from "./pagina/modeloA";
import MC from "./pagina/modeloC";
import POO from "./pagina/poo";
import Video from "./pagina/video";

export default function App(){
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid px-3">
          <Link 
            className="navbar-brand" 
            to="/"
          >
            La Caja de Costura
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            title="Menú de navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/"
                  title="Página principal"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  title="Técnica que descompone un sistema en procesos y flujos de datos"
                >
                  Análisis Estructurado
                </a>
                <ul className="dropdown-menu">
                  <li><h6 className="dropdown-header">Modelo Esencial</h6></li>
                  <li>
                    <Link 
                      className="dropdown-item" 
                      to="/modelo-ambiental"
                      title="Representa el sistema y su interacción con el entorno externo (Declaración de proposito, Diagrama de Contexto, Lista de Acontecimientos)"
                    >
                      Modelo Ambiental
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className="dropdown-item" 
                      to="/modelo-comportamiento"
                      title="Describe cómo el sistema procesa y transforma los datos (DFD, DTE y DER)"
                    >
                      Modelo de Comportamiento
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/poo"
                  title="Enfoque que modela el sistema mediante objetos que interactúan entre sí"
                >
                  Paradigma Orientado a Objetos
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/marco-teorico"
                  title="Fundamentos y conceptos que sustentan el desarrollo del sistema"
                >
                  Marco Teórico
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/video"
                  title="Demostración visual y explicativa de las herramientas utilizadas"
                >
                  Video
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div className="container-fluid p-0 m-0">
        <div>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/marco-teorico" element={<MarcoTeorico />} />
            <Route path="/modelo-ambiental" element={<MA />} />
            <Route path="/modelo-comportamiento" element={<MC />} />
            <Route path="/poo" element={<POO />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        </div>
      </div>
    </>
  );
}