import Eventos from "../../assets/img/evento4.png";
import EventosF from "../../assets/img/map4.png";
import "../../css/evento4.css";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
function Evento4() {
  return (
    <LayoutPrincipal>
      {/* Sección Hero */}
      <section className="seccion-principal" style={{ height: "100%" }}>
        <img
          src={Eventos}
          alt="Banner Evento"
          className="hero-image img-fluid w-100"
        />
      </section>

      {/* Mapa y Tabla de Precios */}
      <div className="campo-escenario container mt-4">
        <div className="contenedor-escenario d-flex flex-wrap justify-content-center">
          <div className="escenario mb-4">
            <div className="mapa">
              <img
                className="imagen-mapa img-fluid"
                src={EventosF}
                alt="Mapa del escenario"
              />
            </div>
          </div>

          <div className="caja-boletos pb-4">
            <div className="tabla-precios">
              {/* PLATINUM */}
              <div className="fila-precios d-flex align-items-center border-bottom py-2">
                <div
                  className="bg-success text-white p-2 etiqueta-fila"
                  style={{ minWidth: "100px" }}
                >
                  PLATINUM
                </div>
                <div className="celda-precio px-3 text-center">
                  <div className="small fw-bold">PREVENTA FANS</div>
                  <div className="precio">S/ 230.00</div>
                </div>
                <div className="celda-precio destacado px-3 text-center bg-light">
                  <div className="small fw-bold">PREVENTA INTERBANK</div>
                  <div className="precio">S/ 210.00</div>
                </div>
              </div>

              {/* VIP */}
              <div className="fila-precios d-flex align-items-center border-bottom py-2">
                <div
                  className="bg-secondary text-white p-2 etiqueta-fila"
                  style={{ minWidth: "100px" }}
                >
                  VIP
                </div>
                <div className="celda-precio px-3 text-center">
                  <div className="small fw-bold">PREVENTA FANS</div>
                  <div className="precio">S/ 200.00</div>
                </div>
                <div className="celda-precio destacado px-3 text-center bg-light">
                  <div className="small fw-bold">PREVENTA INTERBANK</div>
                  <div className="precio">S/ 180.00</div>
                </div>
              </div>

              {/* GENERAL */}
              <div className="fila-precios d-flex align-items-center py-2">
                <div
                  className="bg-primary text-white p-2 etiqueta-fila"
                  style={{ minWidth: "100px" }}
                >
                  GENERAL
                </div>
                <div className="celda-precio px-3 text-center">
                  <div className="small fw-bold">PREVENTA FANS</div>
                  <div className="precio">S/ 150.00</div>
                </div>
                <div className="celda-precio destacado px-3 text-center bg-light">
                  <div className="small fw-bold">PREVENTA INTERBANK</div>
                  <div className="precio">S/ 130.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de Acción */}
      <section className="container text-center mb-5 py-4">
        <h3 className="mb-4">
          Obtén tus tickets para ver VOCES DEL ROCK LATINO MOYOBAMBA
        </h3>

        <div className="d-grid gap-3 col-lg-6 mx-auto">
          <button className="btn btn-dark w-100 py-3 fw-bold">
            PREVENTA FANS
          </button>

          <button className="btn btn-dark w-100 py-3 fw-bold">
            PREVENTA INTERBANK
          </button>

          <button className="btn btn-danger fw-bold py-2">PRECIO FULL</button>
          <button className="btn btn-dark fw-bold py-2">CONADIS</button>
        </div>

        <div className="mt-3">
          <small
            className="text-muted text-decoration-underline"
            style={{ cursor: "pointer" }}
          >
            ¿Cómo comprar en la web?
          </small>
        </div>
      </section>

      {/* Descripción */}
      <section className="descripcion bg-dark py-5 text-center text-white">
        <div className="container">
          <p className="h4 text-uppercase mb-3">
            <strong>Prepárate Moyobamba</strong>
          </p>
          <p className="lead">
            Para una noche que marcará generaciones. Un concierto donde la
            nostalgia, la rebeldía y el amor por el rock en español se unen en
            un mismo escenario.
          </p>
          <p>
            Revive la energía de <strong>Fer Sosa - GUSTAVO CERATI</strong>,
            canta a todo pulmón los clásicos de <strong>ENANITOS VERDES</strong>{" "}
            con Gael García, siente la fuerza de{" "}
            <strong>LOS PRISIONEROS</strong> con Chris Victorio.
          </p>
        </div>
      </section>
    </LayoutPrincipal>
  );
}

export default Evento4;
