import React from 'react';
import '../assets/marcot/styles.css';
import m1 from '../assets/marcot/entidad.PNG';
import m2 from '../assets/marcot/proceso.PNG';
import m3 from '../assets/marcot/flujo.PNG';
import m4 from '../assets/marcot/almacen.PNG';

export default function MarcoT() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="marco-teorico-container">
      <div className="container-fluid py-5">
        <div className="row">
          {/* Navegación lateral */}
          <div className="col-md-3 col-lg-2">
            <nav className="sticky-top pt-3" style={{top: '20px'}}>
              <h6 className="text-muted text-uppercase small mb-3">Contenido</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a className="nav-link text-dark p-0" href="#introduccion" onClick={(e) => scrollToSection(e, 'introduccion')}>Introducción</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link text-dark p-0 fw-semibold" href="#modelo-esencial" onClick={(e) => scrollToSection(e, 'modelo-esencial')}>Modelo Esencial</a>
                  <ul className="nav flex-column ms-3 mt-2">
                    <li className="nav-item mb-1">
                      <a className="nav-link text-muted p-0 small" href="#modelo-ambiental" onClick={(e) => scrollToSection(e, 'modelo-ambiental')}>Modelo Ambiental</a>
                    </li>
                    <li className="nav-item mb-1">
                      <a className="nav-link text-muted p-0 small" href="#modelo-comportamiento" onClick={(e) => scrollToSection(e, 'modelo-comportamiento')}>Modelo de Comportamiento</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link text-dark p-0 fw-semibold" href="#poo" onClick={(e) => scrollToSection(e, 'poo')}>Análisis Orientado a Objetos</a>
                  <ul className="nav flex-column ms-3 mt-2">
                    <li className="nav-item mb-1">
                      <a className="nav-link text-muted p-0 small" href="#principios" onClick={(e) => scrollToSection(e, 'principios')}>Principios</a>
                    </li>
                    <li className="nav-item mb-1">
                      <a className="nav-link text-muted p-0 small" href="#relaciones" onClick={(e) => scrollToSection(e, 'relaciones')}>Tipos de Relación</a>
                    </li>
                    <li className="nav-item mb-1">
                      <a className="nav-link text-muted p-0 small" href="#metodologia" onClick={(e) => scrollToSection(e, 'metodologia')}>Metodología</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contenido principal */}
          <div className="col-md-9 col-lg-10">
            
            {/* Encabezado */}
            <header className="mb-5 pb-4 border-bottom">
              <h1 className="display-5 fw-bold mb-2">Marco Teórico</h1>
              <p className="text-muted fs-5">Análisis y Diseño de Sistemas de Información</p>
            </header>

            {/* Introducción */}
            <section id="introduccion" className="mb-5">
              <h2 className="h3 fw-bold mb-3">Introducción</h2>
              <p className="text-justify lh-lg">
                El análisis y diseño de sistemas es una disciplina fundamental en el desarrollo de software que permite 
                comprender los requisitos de un sistema y diseñar soluciones efectivas. A través de diferentes metodologías 
                y modelos, se busca crear sistemas robustos, escalables y mantenibles que satisfagan las necesidades del negocio.
              </p>
            </section>

            {/* Modelo Esencial */}
            <section id="modelo-esencial" className="mb-5">
              <h2 className="h3 fw-bold mb-4 pt-3 border-top">Modelo Esencial</h2>
              
              <div className="mb-4">
                <h3 className="h5 fw-semibold mb-3">¿Qué es el Modelo Esencial?</h3>
                <p className="text-justify lh-lg">
                  El Modelo Esencial es una técnica de análisis estructurado que se enfoca en representar <strong>qué hace</strong> el 
                  sistema sin preocuparse por <strong>cómo</strong> lo hace. Se centra en la esencia lógica del sistema, abstraído de 
                  detalles tecnológicos e implementación.
                </p>
              </div>

              {/* Modelo Ambiental */}
              <div id="modelo-ambiental" className="mb-5">
                <h3 className="h4 fw-semibold mb-3">1. Modelo Ambiental</h3>
                
                <div className="mb-4">
                  <h4 className="h6 fw-semibold mb-2">Definición</h4>
                  <p className="text-justify lh-lg">
                    El Modelo Ambiental define el <strong>alcance</strong> del sistema y establece la <strong>frontera</strong> entre 
                    el sistema y su entorno. Identifica las entidades externas (actores) que interactúan con el sistema y los flujos 
                    de información que cruzan esa frontera.
                  </p>
                  <p className="text-justify lh-lg">
                    Existen dos formas ampliamente utilizadas para representar el modelo ambiental de un sistema dentro del análisis estructurado: el modelo de <strong>Yourdon</strong> y el <strong>Modelo de Gane & Sarson</strong>. 
                    Se utilizará en el proyecto el modelo ambiental de Yourdon, donde el sistema se representa como un único proceso que interactúa con diversas entidades externas.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="h6 fw-semibold mb-3">Componentes Principales del Modelo de Yourdon</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="border p-3">
                        <img src={m1} alt="Entidades" className="img-fluid mb-2" />
                        <h5 className="h6 fw-semibold">Entidades</h5>
                        <p className="mb-0">Entidades externas que interactúan con el sistema (usuarios, organizaciones)</p>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="border p-3">
                        <img src={m3} alt="Flujos de Datos" className="img-fluid mb-2" />
                        <h5 className="h6 fw-semibold">Flujos de Datos</h5>
                        <p className="mb-0">Información que entra o sale del sistema desde/hacia las entidades</p>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="border p-3">
                        <img src={m2} alt="Procesos" className="img-fluid mb-2" />
                        <h5 className="h6 fw-semibold">Procesos</h5>
                        <p className="mb-0">Transformaciones que el sistema realiza sobre los datos</p>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="border p-3">
                        <img src={m4} alt="Almacén de datos" className="img-fluid mb-2" />
                        <h5 className="h6 fw-semibold">Almacén de datos</h5>
                        <p className="mb-0">Lugares donde el sistema guarda información de manera persistente</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="h6 fw-semibold mb-3">Pasos para Crear el Modelo Ambiental</h4>
                  <ol className="list-group list-group-numbered list-group-flush">
                    <li className="list-group-item border-0 px-0 py-2">
                      <strong>Identificar Terminadores:</strong> Determinar todas las entidades externas que envían o reciben información del sistema.
                    </li>
                    <li className="list-group-item border-0 px-0 py-2">
                      <strong>Definir Flujos de Entrada:</strong> Especificar qué información entra al sistema desde cada terminador.
                    </li>
                    <li className="list-group-item border-0 px-0 py-2">
                      <strong>Definir Flujos de Salida:</strong> Identificar qué información sale del sistema hacia cada terminador.
                    </li>
                    <li className="list-group-item border-0 px-0 py-2">
                      <strong>Crear el Diagrama de Contexto:</strong> Dibujar el sistema como una única "burbuja" con todos sus terminadores y flujos.
                    </li>
                    <li className="list-group-item border-0 px-0 py-2">
                      <strong>Documentar el Diccionario de Datos:</strong> Describir detalladamente cada flujo de datos identificado.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Modelo de Comportamiento */}
              <div id="modelo-comportamiento" className="mb-5">
                <h3 className="h4 fw-semibold mb-3">2. Modelo de Comportamiento</h3>
                
                <div className="mb-4">
                  <p className="text-justify lh-lg">
                    El Modelo de Comportamiento describe <strong>cómo responde</strong> el sistema a los eventos externos a lo largo 
                    del tiempo. Muestra los diferentes estados por los que puede pasar el sistema y las transiciones entre ellos, 
                    representando el comportamiento dinámico del sistema.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="h6 fw-semibold mb-3">Componentes Principales</h4>
                  <dl className="row mb-0">
                    <dt className="col-sm-3 mb-2">Estados</dt>
                    <dd className="col-sm-9 mb-2">Situaciones o condiciones en las que puede encontrarse el sistema en un momento dado</dd>
                    
                    <dt className="col-sm-3 mb-2">Eventos</dt>
                    <dd className="col-sm-9 mb-2">Sucesos externos que provocan que el sistema cambie de estado</dd>
                    
                    <dt className="col-sm-3 mb-2">Transiciones</dt>
                    <dd className="col-sm-9 mb-2">Cambios de un estado a otro como respuesta a un evento</dd>
                    
                    <dt className="col-sm-3 mb-2">Acciones</dt>
                    <dd className="col-sm-9 mb-2">Actividades que se ejecutan durante una transición o dentro de un estado</dd>
                  </dl>
                </div>

                <div className="mb-4">
                  <h4 className="h6 fw-semibold mb-3">Pasos para Crear el Modelo de Comportamiento</h4>
                  <ol className="list-group list-group-numbered list-group-flush">
                    <li className="list-group-item border-0 px-0 py-2">
                      <strong>Identificar Estados:</strong> Determinar todas las situaciones significativas en las que el sistema puede estar.
                    </li>
                    <li className="list-group-item border-0 px-0 py-2">
                      <strong>Identificar Eventos:</strong> Listar todos los eventos externos que pueden afectar al sistema.
                    </li>
                    <li className="list-group-item border-0 px-0 py-2">
                      <strong>Definir Transiciones:</strong> Establecer cómo los eventos provocan cambios entre estados.
                    </li>
                    <li className="list-group-item border-0 px-0 py-2">
                      <strong>Especificar Acciones:</strong> Describir qué hace el sistema durante cada transición.
                    </li>
                    <li className="list-group-item border-0 px-0 py-2">
                      <strong>Crear Diagramas de Estados:</strong> Representar gráficamente estados, eventos y transiciones.
                    </li>
                    <li className="list-group-item border-0 px-0 py-2">
                      <strong>Validar el Modelo:</strong> Verificar que el comportamiento modelado sea completo y consistente.
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* POO */}
            <section id="poo" className="mb-5">
              <h2 className="h3 fw-bold mb-4 pt-3 border-top">Análisis Orientado a Objetos (POO)</h2>
              
              <div className="mb-4">
                <h3 className="h5 fw-semibold mb-3">¿Qué es el Análisis Orientado a Objetos?</h3>
                <p className="text-justify lh-lg">
                  El Análisis Orientado a Objetos es un paradigma de análisis de sistemas que organiza los requisitos en torno a 
                  <strong> objetos</strong> que representan entidades del mundo real. Se basa en conceptos como encapsulamiento, 
                  herencia, polimorfismo y abstracción para crear modelos que reflejan mejor la naturaleza del dominio del problema.
                </p>
              </div>

              <div id="principios" className="mb-4">
                <h3 className="h5 fw-semibold mb-3">Principios Fundamentales</h3>
                <dl className="row mb-0">
                  <dt className="col-sm-3 mb-3">Abstracción</dt>
                  <dd className="col-sm-9 mb-3">Capacidad de identificar las características esenciales de un objeto, ignorando los detalles irrelevantes para el contexto actual.</dd>
                  
                  <dt className="col-sm-3 mb-3">Encapsulamiento</dt>
                  <dd className="col-sm-9 mb-3">Ocultar los detalles internos de un objeto y exponer solo una interfaz pública controlada.</dd>
                  
                  <dt className="col-sm-3 mb-3">Modularidad</dt>
                  <dd className="col-sm-9 mb-3">División del sistema en módulos o componentes independientes que pueden desarrollarse y mantenerse por separado.</dd>
                  
                  <dt className="col-sm-3 mb-3">Jerarquía</dt>
                  <dd className="col-sm-9 mb-3">Organización de clases en estructuras de herencia que permiten la reutilización y especialización de código.</dd>
                  
                  <dt className="col-sm-3 mb-3">Persistencia</dt>
                  <dd className="col-sm-9 mb-3">Capacidad de los objetos de mantener su estado más allá del tiempo de ejecución del programa.</dd>
                  
                  <dt className="col-sm-3 mb-3">Concurrencia</dt>
                  <dd className="col-sm-9 mb-3">Capacidad de múltiples objetos de operar simultáneamente de manera independiente.</dd>
                </dl>
              </div>

              <div id="relaciones" className="mb-4">
                <h3 className="h5 fw-semibold mb-3">Tipos de Relación</h3>
                <dl className="row mb-0">
                  <dt className="col-sm-3 mb-3">Asociación</dt>
                  <dd className="col-sm-9 mb-3">Relación estructural que describe una conexión bidireccional o unidireccional entre dos clases.</dd>
                  
                  <dt className="col-sm-3 mb-3">Agregación</dt>
                  <dd className="col-sm-9 mb-3">Relación "tiene-un" débil donde los objetos componentes pueden existir independientemente del objeto contenedor.</dd>
                  
                  <dt className="col-sm-3 mb-3">Composición</dt>
                  <dd className="col-sm-9 mb-3">Relación "tiene-un" fuerte donde los objetos componentes no pueden existir sin el objeto contenedor.</dd>
                  
                  <dt className="col-sm-3 mb-3">Herencia</dt>
                  <dd className="col-sm-9 mb-3">Relación "es-un" que permite que una clase herede atributos y métodos de otra clase.</dd>
                  
                  <dt className="col-sm-3 mb-3">Dependencia</dt>
                  <dd className="col-sm-9 mb-3">Relación temporal donde una clase utiliza los servicios de otra clase de manera ocasional.</dd>
                </dl>
              </div>

              <div id="metodologia" className="mb-4">
                <h3 className="h5 fw-semibold mb-3">Metodología del Análisis Orientado a Objetos</h3>
                
                <div className="mb-4">
                  <h4 className="h6 fw-semibold mb-2">1. Identificar Objetos y Clases</h4>
                  <p className="text-justify lh-lg mb-2">Analizar el dominio del problema para identificar entidades significativas que se convertirán en objetos.</p>
                  <ul className="list-unstyled ms-3">
                    <li className="mb-1">• Revisar documentos de requisitos</li>
                    <li className="mb-1">• Identificar sustantivos (potenciales clases)</li>
                    <li className="mb-1">• Identificar verbos (potenciales métodos)</li>
                    <li className="mb-1">• Eliminar clases redundantes o irrelevantes</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="h6 fw-semibold mb-2">2. Definir Atributos</h4>
                  <p className="text-justify lh-lg mb-2">Determinar las propiedades o características que describen cada objeto.</p>
                  <ul className="list-unstyled ms-3">
                    <li className="mb-1">• Identificar información que debe recordar cada objeto</li>
                    <li className="mb-1">• Determinar tipos de datos apropiados</li>
                    <li className="mb-1">• Establecer valores iniciales si es necesario</li>
                    <li className="mb-1">• Definir restricciones y validaciones</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="h6 fw-semibold mb-2">3. Definir Métodos</h4>
                  <p className="text-justify lh-lg mb-2">Especificar el comportamiento y las operaciones que cada objeto puede realizar.</p>
                  <ul className="list-unstyled ms-3">
                    <li className="mb-1">• Identificar responsabilidades de cada clase</li>
                    <li className="mb-1">• Definir operaciones CRUD (Crear, Leer, Actualizar, Eliminar)</li>
                    <li className="mb-1">• Especificar métodos de negocio</li>
                    <li className="mb-1">• Documentar parámetros y valores de retorno</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="h6 fw-semibold mb-2">4. Establecer Relaciones</h4>
                  <p className="text-justify lh-lg mb-2">Identificar y modelar las conexiones entre diferentes clases y objetos.</p>
                  <ul className="list-unstyled ms-3">
                    <li className="mb-1">• <strong>Asociación:</strong> Relaciones generales entre clases</li>
                    <li className="mb-1">• <strong>Agregación:</strong> Relación "tiene-un" débil</li>
                    <li className="mb-1">• <strong>Composición:</strong> Relación "tiene-un" fuerte</li>
                    <li className="mb-1">• <strong>Herencia:</strong> Relación "es-un"</li>
                    <li className="mb-1">• <strong>Dependencia:</strong> Uso temporal de una clase por otra</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="h6 fw-semibold mb-2">5. Crear Diagramas UML</h4>
                  <p className="text-justify lh-lg mb-2">Representar visualmente el modelo de objetos usando notación estándar UML.</p>
                  <ul className="list-unstyled ms-3">
                    <li className="mb-1">• <strong>Diagrama de Clases:</strong> Estructura estática del sistema</li>
                    <li className="mb-1">• <strong>Diagrama de Objetos:</strong> Instancias en tiempo de ejecución</li>
                    <li className="mb-1">• <strong>Diagrama de Secuencia:</strong> Interacciones temporales</li>
                    <li className="mb-1">• <strong>Diagrama de Casos de Uso:</strong> Funcionalidades del sistema</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}