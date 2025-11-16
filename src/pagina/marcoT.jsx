import React, { useEffect } from 'react';
import '../assets/marcot/styles.css';

export default function MarcoT() {
  useEffect(() => {
    // Animación de scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="marco-teorico-container">
      <section className="hero-marco">
        <div className="hero-content">
          <h1 className="hero-title">Marco Teórico</h1>
          <p className="hero-subtitle">Análisis y Diseño de Sistemas de Información</p>
          <div className="hero-decoration"></div>
        </div>
      </section>

      {/* Introducción */}
      <section className="intro-section fade-in-section">
        <div className="container-marco">
          <div className="intro-card">
            <h2 className="section-title">Introducción</h2>
            <p className="intro-text">
              El análisis y diseño de sistemas es una disciplina fundamental en el desarrollo de software que permite 
              comprender los requisitos de un sistema y diseñar soluciones efectivas. A través de diferentes metodologías 
              y modelos, se busca crear sistemas robustos, escalables y mantenibles que satisfagan las necesidades del negocio.
            </p>
          </div>
        </div>
      </section>

      <section className="modelo-section fade-in-section">
        <div className="container-marco">
          <div className="modelo-header">
            <h2 className="modelo-title">Modelo Esencial</h2>
          </div>
          
          <div className="modelo-intro-card">
            <h3 className="subsection-title">¿Qué es el Modelo Esencial?</h3>
            <p className="modelo-description">
              El Modelo Esencial es una técnica de análisis estructurado que se enfoca en representar <strong>qué hace</strong> el 
              sistema sin preocuparse por <strong>cómo</strong> lo hace. Se centra en la esencia lógica del sistema, abstraído de 
              detalles tecnológicos e implementación.
            </p>
          </div>

          <div className="submodelo-card ambiental-card">
            <div className="submodelo-header">
              <span className="submodelo-number">1</span>
              <h3 className="submodelo-title">Modelo Ambiental</h3>
            </div>
            
            <div className="submodelo-content">
              <div>
                <h4 className="definition-title">Definición</h4>
                <p className="definition-text">
                  El Modelo Ambiental define el <strong>alcance</strong> del sistema y establece la <strong>frontera</strong> entre 
                  el sistema y su entorno. Identifica las entidades externas (actores) que interactúan con el sistema y los flujos 
                  de información que cruzan esa frontera.
                </p>
              </div>
                <p className="modelo-description">
                  Existen dos formas ampliamente utilizadas para representar el modelo ambiental de un sistema dentro del análisis estructurado: el modelo de <strong>Yourdon</strong> y el <strong>Modelo de Gane & Sarson</strong>.<br></br>
                  Se utilizará en el proyecto el modelo ambiental de Yourdon, donde el sistema se representa como un único proceso que interactúa con diversas entidades externas.
                </p>
              <div className="components-box">
                <h4 className="components-title">Componentes Principales del <strong>Modelo de Yordan</strong></h4>
                <div className="components-grid">
                  <div className="component-item">
                    <img src="" className="img-fluid rounded"/>
                    <h5>Entidades</h5>
                    <p>Entidades externas que interactúan con el sistema (usuarios, organizaciones)</p>
                  </div>
                  <div className="component-item">
                    <img src="" className="img-fluid rounded"/>
                    <h5>Flujos de Datos</h5>
                    <p>Información que entra o sale del sistema desde/hacia las entidades</p>
                  </div>
                  <div className="component-item">
                    <img src="" className="img-fluid rounded"/>
                    <h5>Procesos</h5>
                    <p>Transformaciones que el sistema realiza sobre los datos</p>
                  </div>
                  <div className="component-item">
                    <img src="" className="img-fluid rounded"/>
                    <h5>Almacen de datos</h5>
                    <p>Lugares donde el sistema guarda información de manera persistente</p>
                  </div>
                </div>
              </div>

              <div className="steps-box">
                <h4 className="steps-title">Pasos para Crear el Modelo Ambiental</h4>
                <div className="steps-list">
                  <div className="step-item">
                    <span className="step-number">01</span>
                    <div className="step-content">
                      <h5>Identificar Terminadores</h5>
                      <p>Determinar todas las entidades externas que envían o reciben información del sistema.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-number">02</span>
                    <div className="step-content">
                      <h5>Definir Flujos de Entrada</h5>
                      <p>Especificar qué información entra al sistema desde cada terminador.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-number">03</span>
                    <div className="step-content">
                      <h5>Definir Flujos de Salida</h5>
                      <p>Identificar qué información sale del sistema hacia cada terminador.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-number">04</span>
                    <div className="step-content">
                      <h5>Crear el Diagrama de Contexto</h5>
                      <p>Dibujar el sistema como una única "burbuja" con todos sus terminadores y flujos.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-number">05</span>
                    <div className="step-content">
                      <h5>Documentar el Diccionario de Datos</h5>
                      <p>Describir detalladamente cada flujo de datos identificado.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="submodelo-card comportamiento-card">
            <div className="submodelo-header">
              <span className="submodelo-number">2</span>
              <h3 className="submodelo-title">Modelo de Comportamiento</h3>
            </div>
            
            <div className="submodelo-content">
              <div className="definition-box">
                <h4 className="definition-title">Definición</h4>
                <p className="definition-text">
                  El Modelo de Comportamiento describe <strong>cómo responde</strong> el sistema a los eventos externos a lo largo 
                  del tiempo. Muestra los diferentes estados por los que puede pasar el sistema y las transiciones entre ellos, 
                  representando el comportamiento dinámico del sistema.
                </p>
              </div>

              <div className="components-box">
                <h4 className="components-title">Componentes Principales</h4>
                <div className="components-grid">
                  <div className="component-item">
                    <img src="" className="img-fluid rounded"/>
                    <h5>Estados</h5>
                    <p>Situaciones o condiciones en las que puede encontrarse el sistema en un momento dado</p>
                  </div>
                  <div className="component-item">
                    <img src="" className="img-fluid rounded"/>
                    <h5>Eventos</h5>
                    <p>Sucesos externos que provocan que el sistema cambie de estado</p>
                  </div>
                  <div className="component-item">
                    <img src="" className="img-fluid rounded"/>
                    <h5>Transiciones</h5>
                    <p>Cambios de un estado a otro como respuesta a un evento</p>
                  </div>
                  <div className="component-item">
                    <img src="" className="img-fluid rounded"/>
                    <h5>Acciones</h5>
                    <p>Actividades que se ejecutan durante una transición o dentro de un estado</p>
                  </div>
                </div>
              </div>

              <div className="steps-box">
                <h4 className="steps-title">Pasos para Crear el Modelo de Comportamiento</h4>
                <div className="steps-list">
                  <div className="step-item">
                    <span className="step-number">01</span>
                    <div className="step-content">
                      <h5>Identificar Estados</h5>
                      <p>Determinar todas las situaciones significativas en las que el sistema puede estar.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-number">02</span>
                    <div className="step-content">
                      <h5>Identificar Eventos</h5>
                      <p>Listar todos los eventos externos que pueden afectar al sistema.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-number">03</span>
                    <div className="step-content">
                      <h5>Definir Transiciones</h5>
                      <p>Establecer cómo los eventos provocan cambios entre estados.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-number">04</span>
                    <div className="step-content">
                      <h5>Especificar Acciones</h5>
                      <p>Describir qué hace el sistema durante cada transición.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-number">05</span>
                    <div className="step-content">
                      <h5>Crear Diagramas de Estados</h5>
                      <p>Representar gráficamente estados, eventos y transiciones.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-number">06</span>
                    <div className="step-content">
                      <h5>Validar el Modelo</h5>
                      <p>Verificar que el comportamiento modelado sea completo y consistente.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="poo-section fade-in-section">
        <div className="container-marco">
          <div className="modelo-header">
            <h2 className="modelo-title">Análisis Orientado a Objetos (POO)</h2>
          </div>
          
          <div className="modelo-intro-card poo-intro">
            <h3 className="subsection-title">¿Qué es el Análisis Orientado a Objetos?</h3>
            <p className="modelo-description">
              El Análisis Orientado a Objetos es un paradigma de análisis de sistemas que organiza los requisitos en torno a 
              <strong> objetos</strong> que representan entidades del mundo real. Se basa en conceptos como encapsulamiento, 
              herencia, polimorfismo y abstracción para crear modelos que reflejan mejor la naturaleza del dominio del problema.
            </p>
          </div>

          <div className="principios-card">
            <h3 className="subsection-title center-title">Principios</h3>
            <div className="principios-grid">
              <div className="principio-item">
                <h4>Abstracción</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis iusto asperiores dolores, consequuntur repudiandae nam provident est earum omnis nobis architecto maxime voluptates libero necessitatibus. Laborum minus amet veritatis.</p>
              </div>
              <div className="principio-item">
                <h4>Encapsulamiento</h4>
                <p>Ocultar los detalles internos de un objeto y exponer solo una interfaz pública controlada.</p>
              </div>
              <div className="principio-item">
                <h4>Modularidad</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas iure veniam et, at nisi, laboriosam quasi impedit natus cumque qui est esse consectetur adipisci ex non suscipit eum? Eos.</p>
              </div>
              <div className="principio-item">
                <h4>Jerarquia</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, impedit odio. Similique modi, sapiente ducimus enim saepe aspernatur optio sit aliquam cupiditate repellendus quis numquam asperiores ea dolor blanditiis officiis.</p>
              </div>
              <div className="principio-item">
                <h4>Persistencia</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quidem odit minus modi distinctio cumque facere corporis accusantium atque odio ut velit nam, provident facilis. At officia aspernatur porro iure.</p>
              </div>
              <div className="principio-item">
                <h4>Concurrencia</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum quo neque id vitae iusto quibusdam minus praesentium saepe reprehenderit itaque sunt harum rerum, nihil modi, officiis optio fugit doloremque.</p>
              </div>
            </div>
            <h3>Tipos de Relación</h3>
              <div className="step-content">
                <h5>Asociación</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel in ullam voluptate labore. Deserunt numquam ratione adipisci placeat pariatur rem. Voluptatum recusandae magni laudantium consequatur iusto maxime quis dicta et!</p>
              </div>
              <div className="step-content">
                <h5>Agregación</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel in ullam voluptate labore. Deserunt numquam ratione adipisci placeat pariatur rem. Voluptatum recusandae magni laudantium consequatur iusto maxime quis dicta et!</p>
              </div>
              <div className="step-content">
                <h5>Composición</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel in ullam voluptate labore. Deserunt numquam ratione adipisci placeat pariatur rem. Voluptatum recusandae magni laudantium consequatur iusto maxime quis dicta et!</p>
              </div>
              <div className="step-content">
                <h5>Implementación</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel in ullam voluptate labore. Deserunt numquam ratione adipisci placeat pariatur rem. Voluptatum recusandae magni laudantium consequatur iusto maxime quis dicta et!</p>
              </div>
              <div className="step-content">
                <h5>Navegación</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel in ullam voluptate labore. Deserunt numquam ratione adipisci placeat pariatur rem. Voluptatum recusandae magni laudantium consequatur iusto maxime quis dicta et!</p>
              </div>
          </div>

          <div className="poo-pasos-card">
            <h3 className="subsection-title center-title">Metodología del Análisis Orientado a Objetos</h3>
            
            <div className="poo-steps-container">
              <div className="poo-step">
                <div className="poo-step-header">
                  <span className="poo-step-number">1</span>
                  <h4 className="poo-step-title">Identificar Objetos y Clases</h4>
                </div>
                <div className="poo-step-content">
                  <p>Analizar el dominio del problema para identificar entidades significativas que se convertirán en objetos.</p>
                  <ul className="poo-step-list">
                    <li>Revisar documentos de requisitos</li>
                    <li>Identificar sustantivos (potenciales clases)</li>
                    <li>Identificar verbos (potenciales métodos)</li>
                    <li>Eliminar clases redundantes o irrelevantes</li>
                  </ul>
                </div>
              </div>

              <div className="poo-step">
                <div className="poo-step-header">
                  <span className="poo-step-number">2</span>
                  <h4 className="poo-step-title">Definir Atributos</h4>
                </div>
                <div className="poo-step-content">
                  <p>Determinar las propiedades o características que describen cada objeto.</p>
                  <ul className="poo-step-list">
                    <li>Identificar información que debe recordar cada objeto</li>
                    <li>Determinar tipos de datos apropiados</li>
                    <li>Establecer valores iniciales si es necesario</li>
                    <li>Definir restricciones y validaciones</li>
                  </ul>
                </div>
              </div>

              <div className="poo-step">
                <div className="poo-step-header">
                  <span className="poo-step-number">3</span>
                  <h4 className="poo-step-title">Definir Métodos</h4>
                </div>
                <div className="poo-step-content">
                  <p>Especificar el comportamiento y las operaciones que cada objeto puede realizar.</p>
                  <ul className="poo-step-list">
                    <li>Identificar responsabilidades de cada clase</li>
                    <li>Definir operaciones CRUD (Crear, Leer, Actualizar, Eliminar)</li>
                    <li>Especificar métodos de negocio</li>
                    <li>Documentar parámetros y valores de retorno</li>
                  </ul>
                </div>
              </div>

              <div className="poo-step">
                <div className="poo-step-header">
                  <span className="poo-step-number">4</span>
                  <h4 className="poo-step-title">Establecer Relaciones</h4>
                </div>
                <div className="poo-step-content">
                  <p>Identificar y modelar las conexiones entre diferentes clases y objetos.</p>
                  <ul className="poo-step-list">
                    <li><strong>Asociación:</strong> Relaciones generales entre clases</li>
                    <li><strong>Agregación:</strong> Relación "tiene-un" débil</li>
                    <li><strong>Composición:</strong> Relación "tiene-un" fuerte</li>
                    <li><strong>Herencia:</strong> Relación "es-un"</li>
                    <li><strong>Dependencia:</strong> Uso temporal de una clase por otra</li>
                  </ul>
                </div>
              </div>

              <div className="poo-step">
                <div className="poo-step-header">
                  <span className="poo-step-number">5</span>
                  <h4 className="poo-step-title">Crear Diagramas UML</h4>
                </div>
                <div className="poo-step-content">
                  <p>Representar visualmente el modelo de objetos usando notación estándar UML.</p>
                  <ul className="poo-step-list">
                    <li><strong>Diagrama de Clases:</strong> Estructura estática del sistema</li>
                    <li><strong>Diagrama de Objetos:</strong> Instancias en tiempo de ejecución</li>
                    <li><strong>Diagrama de Secuencia:</strong> Interacciones temporales</li>
                    <li><strong>Diagrama de Casos de Uso:</strong> Funcionalidades del sistema</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}