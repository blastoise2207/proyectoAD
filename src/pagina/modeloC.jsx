import React from 'react';
import '../assets/MC/styles.css';
import dte from '../assets/MC/DTE.jpg';

export default function MC() {
  return (
    <div className="container modelo-comportamiento">
      <div className="row">
        <div className="col-12">
          <div className="header-section text-center py-4 mb-4">
            <h1 className="display-4 fw-bold">
              <i className="bi bi-diagram-2 me-3"></i>
              Modelo de Comportamiento
            </h1>
            <p className="lead text-white mt-3">
              Análisis del comportamiento del sistema de ventas
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-gradient">
              <h2 className="h4 mb-0">
                <i className="bi bi-diagram-3-fill me-2"></i>
                Diagrama de Flujo de Datos
              </h2>
            </div>
            <div className="card-body">
              <div className="diagram-placeholder text-center p-5">
                <i className="bi bi-image diagram-icon"></i>
                <p className="mt-3 text-muted">Inserta aquí tu diagrama de flujo de datos</p>
                {/* <img src={dfdImage} className="img-fluid diagram-image" alt="Diagrama de Flujo de Datos" /> */}
              </div>
              <div className="diagram-info mt-4 p-3">
                <h5 className="text-primary-custom">
                  <i className="bi bi-info-circle me-2"></i>
                  Descripción
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-gradient">
              <h2 className="h4 mb-0">
                <i className="bi bi-arrow-left-right me-2"></i>
                Diagrama de Transición de Estados
              </h2>
            </div>
            <div className="card-body">
              <div className="card-body text-center">
                <img src={dte} className="img-fluid rounded shadow-sm" alt="Diagrama de Transición de Estados" />
              </div>
              <div className="diagram-info mt-4 p-3">
                <h5 className="text-primary-custom">
                  <i className="bi bi-info-circle me-2"></i>
                  Descripción
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-gradient">
              <h2 className="h4 mb-0">
                <i className="bi bi-diagram-3 me-2"></i>
                Diagrama Entidad-Relación
              </h2>
            </div>
            <div className="card-body">
              <div className="diagram-placeholder text-center p-5">
                <i className="bi bi-image diagram-icon"></i>
                <p className="mt-3 text-muted">Inserta aquí tu diagrama entidad-relación</p>
                {/* <img src={derImage} className="img-fluid diagram-image" alt="Diagrama Entidad-Relación" /> */}
              </div>
              <div className="diagram-info mt-4 p-3">
                <h5 className="text-primary-custom">
                  <i className="bi bi-info-circle me-2"></i>
                  Descripción
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}