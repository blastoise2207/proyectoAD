import logo from '../assets/MA/dc.jpg';

export default function MA() {
  return (
    <div className="container-fluid modelo-ambiental">
      <div className="row">
        <div className="col-12">
          <div className="header-section text-center py-4 mb-4">
            <h1 className="display-4 fw-bold">Modelo Ambiental</h1>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white">
              <h2 className="h4 mb-0">
                <i className="bi bi-info-circle me-2"></i>
                Declaración de Propósito
              </h2>
            </div>
            <div className="card-body">
              <div className="purpose-item mb-3 p-3 bg-light rounded">
                <span className="badge bg-primary me-2">¿Qué?</span>
                <strong>Sistema de ventas para una Mercería</strong> el cual se enfoca en vender lanas e hilos y una variedad de estambres.
              </div>
              <div className="purpose-item mb-3 p-3 bg-light rounded">
                <span className="badge bg-primary me-2">¿Cómo?</span>
                Registrando los productos, gestionando inventario y facilitando transacciones de compra y venta.
              </div>
              <div className="location-info p-3 bg-warning bg-opacity-10 rounded">
                <span className="badge bg-primary me-2">¿Dónde?</span>
                <i className="bi bi-geo-alt-fill text-brown"></i>
                <strong>Mercería Calderon</strong> - "Zona 12 de Octubre Calle Raul Salmon entre calle 4 y calle 3"
              </div>
              <div className="alert alert-info mt-3">
                <i className="bi bi-lightbulb me-2"></i>
                <strong>Objetivo del Sistema:</strong> Realizar el modelo ambiental, bajo el paradigma de análisis estructurado un sistema de ventas de hilados que permite el registro, compra, venta y gestión de productos.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white">
              <h2 className="h4 mb-0">
                <i className="bi bi-diagram-3 me-2"></i>
                Diagrama de Contexto
              </h2>
            </div>
            <div className="card-body text-center">
              <img 
                src={logo} 
                className="img-fluid rounded shadow-sm diagram-image" 
                alt="Diagrama de Contexto del Sistema"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white">
              <h2 className="h4 mb-0">
                <i className="bi bi-list-check me-2"></i>
                Lista de Acontecimientos
              </h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="text-brown mb-3">
                    <i className="bi bi-person me-2"></i>
                    Eventos del Cliente
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-person-plus text-primary me-3"></i>
                      Cliente se registra en el sistema, el sistema confirma el registro del cliente
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-box-arrow-in-right text-primary me-3"></i>
                      Cliente inicia sesión, el sistema valida la sesión.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-box-arrow-right text-primary me-3"></i>
                      Cliente cierra sesión.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-cart text-primary me-3"></i>
                      Cliente selecciona un producto.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-credit-card text-primary me-3"></i>
                      Cliente solicita pagar un producto, el sistema le muestra métodos de pago.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-person-lines-fill text-primary me-3"></i>
                      Cliente ingresa sus datos personales.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-receipt text-primary me-3"></i>
                      Cliente paga producto, el sistema genera la factura.
                    </li>
                  </ul>
                </div>
                
                <div className="col-md-6">
                  <h5 className="text-brown mb-3">
                    <i className="bi bi-person-badge me-2"></i>
                    Eventos del Vendedor
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-person-check text-success me-3"></i>
                      Vendedor inicia sesión.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-person-x text-success me-3"></i>
                      Vendedor cierra sesión.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-cart-plus text-success me-3"></i>
                      Vendedor registra una venta.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-arrow-left-right text-success me-3"></i>
                      Vendedor actualiza el stock.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-file-earmark-text text-success me-3"></i>
                      Vendedor genera una factura.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-graph-up text-success me-3"></i>
                      Vendedor consulta reportes de ventas, el sistema le muestra el reporte de ventas.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-clipboard-data text-success me-3"></i>
                      Vendedor consulta reporte de pedido, el sistema muestra reportes del pedido.
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="row mt-4">
                <div className="col-12">
                  <h5 className="text-brown mb-3">
                    <i className="bi bi-truck me-2"></i>
                    Eventos del Proveedor
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-truck text-warning me-3"></i>
                      Proveedor envía datos de nuevos productos, el sistema envía pedidos de reposición.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-tag text-warning me-3"></i>
                      Proveedor envía precios y disponibilidad.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-check-circle text-warning me-3"></i>
                      El sistema envía comprobante de compra /pago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}