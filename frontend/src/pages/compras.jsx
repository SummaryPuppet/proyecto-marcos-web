import "./compras.css";

function Compra() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Ticket +
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuNavbar"
            aria-controls="menuNavbar"
            aria-expanded="false"
            aria-label="Alternar navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menuNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Inicio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/compras">
                  Compras
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/informacion">
                  Sobre Nosotros
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/registro">
                  Registrar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="seccion-principal d-flex align-items-center justify-content-center">
        <h1 className="text-white fw-bold">
          Compra tus entradas
        </h1>
      </section>

      {/* CONTENIDO */}
      <section className="container my-5">
        <div className="row g-4">

          {/* RESUMEN */}
          <div className="col-md-6">
            <div className="card bg-dark text-white p-4 h-100">
              <h3>Megadeth en Lima</h3>

              <hr />

              <p><strong>Fecha:</strong> 25 Mayo 2026</p>
              <p><strong>Lugar:</strong> Estadio Nacional</p>
              <p><strong>Zona:</strong> CAMPO A</p>
              <p><strong>Tipo:</strong> Preventa Interbank</p>

              <h4 className="mt-3">Precio unitario</h4>

              <h2 className="text-danger">
                S/ 280.00
              </h2>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="col-md-6">
            <div className="card p-4 shadow h-100">

              <h4 className="mb-3">
                Selecciona tus entradas
              </h4>

              <label className="form-label">
                Cantidad de boletos
              </label>

              <input
                type="number"
                className="form-control mb-3"
                defaultValue="1"
                min="1"
              />

              <label className="form-label">
                Método de pago
              </label>

              <select className="form-select mb-3">
                <option>Tarjeta de crédito</option>
                <option>Tarjeta de débito</option>
                <option>Yape / Plin</option>
              </select>

              <hr />

              <h5>Total estimado</h5>

              <h3 className="text-danger">
                S/ 280.00
              </h3>

              <button className="btn btn-danger w-100 mt-3 fw-bold">
                Confirmar compra
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* INFO */}
      <section className="container text-center mb-5">
        <small>
          Los boletos serán enviados a tu correo electrónico.
        </small>
      </section>

      {/* FOOTER */}
      <footer className="pie bg-black text-center py-4 text-white">
        <img
          src="/img/logo sin fondo.png"
          alt="Logo"
          className="img-fluid img-footer"
          width="400"
        />
      </footer>
    </>
  );
}

export default Compra;