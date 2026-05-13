export default function VerBoletos() {
  return (
    <>
      <main classNameName="container py-2 mb-5">
        <div classNameName="d-flex justify-content-between align-items-center my-4">
          <h1 className="h3">Mis Boletos</h1>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              COMPRAS & E-TICKETS
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  MIS COMPRAS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  E-TICKETS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  MIS DEVOLUCIONES
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CAMBIAR CONTRASEÑA
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CERRAR SESIÓN
                </a>
              </li>
            </ul>
          </div>
        </div>

        <h2></h2>
        <p></p>

        <ul className="row list-unstyled text-center bg-light">
          <li className="col-4 btn py-3 btn-outline-secondary rounded-0">
            MIS COMPRAS
          </li>
          <li className="col-4 btn py-3 btn-outline-secondary rounded-0">
            ETICKETS
          </li>
          <li className="col-4 btn py-3 btn-outline-secondary rounded-0">
            MIS DEVOLUCIONES
          </li>
        </ul>

        <div className="container text-center my-5 py-5">
          <h3>No tiene boletos disponibles</h3>
          <a href="#" className="btn btn-primary">
            Comprar Boletos
          </a>
        </div>
      </main>

      <footer className="bg-dark text-white py-3">
        <div className="container d-flex text-center flex-column flex-md-row justify-content-between align-items-center gap-4">
          <div className="col-2">
            <h4>Tele+</h4>
          </div>
          <div className="col-2">
            <h5>Conozcamonos</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-light fs-6" href="">
                  Acerca de nosotros
                </a>
              </li>
              <li>
                <a className="link-light fs-6" href="">
                  Terminos y condiciones
                </a>
              </li>
              <li>
                <a className="link-light fs-6" href="">
                  Politica de cookies
                </a>
              </li>
              <li>
                <a className="link-light fs-6" href="">
                  Politica de privacidad
                </a>
              </li>
              <li>
                <a className="link-light fs-6" href="">
                  Derecho de arco
                </a>
              </li>
              <li>
                <a className="link-light fs-6" href="">
                  Revisa tu boleta
                </a>
              </li>
              <li>
                <a className="link-light fs-6" href="">
                  Codigo de etica
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h5>Trabajemos juntos!</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-light fs-6" href="">
                  Tienes un evento?
                </a>
              </li>
              <li>
                <a className="link-light fs-6" href="">
                  Venta empresas
                </a>
              </li>
              <li>
                <a className="link-light fs-6" href="">
                  Modulo promotores
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h5>Conversemos</h5>
          </div>
          <div className="col-2">
            <img src="/img/soporte-fans.png" alt="" className="img-fluid" />
          </div>
        </div>
      </footer>
    </>
  );
}
