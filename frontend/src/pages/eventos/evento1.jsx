import "../../css/evento1.css";

import bannerEvento from "../../assets/img/banner-evento1.jpg";
import logoEvento from "../../assets/img/logo-evento1.png";
import mapaEvento from "../../assets/img/mapa_evento1.png";

import LayoutPrincipal from "../../layouts/LayoutPrincipal";

import { useNavigate } from "react-router-dom";

function Evento1() {

  const navigate = useNavigate();

  // FUNCIÓN PARA ENVIAR DATOS A COMPRAS
  const comprarEntrada = (
    zona,
    tipo,
    precio
  ) => {

    navigate("/compras", {

      state: {

        evento: "Megadeth en Lima",

        fecha: "25 Mayo 2026",

        lugar: "Estadio Nacional",

        zona,

        tipo,

        precio

      }

    });

  };

  return (

    <LayoutPrincipal>

      {/* HERO */}
      <section
        className="seccion-principal"
        style={{ height: "100%" }}
      >

        <img
          src={bannerEvento}
          alt="Banner Evento"
          className="hero-image img-fluid"
        />

      </section>

      {/* MAPA + PRECIOS */}
      <div className="campo-escenario">

        <div className="container">

          <div className="row">

            {/* MAPA */}
            <div className="escenario col-lg-6 col-12">

              <div className="mapa">

                <img
                  className="imagen-mapa img-fluid"
                  src={mapaEvento}
                  alt="Mapa"
                />

              </div>

            </div>

            {/* PRECIOS */}
            <div className="caja-boletos col-lg-6 col-12">

              <div className="tabla-precios">

                {/* CAMPO A */}
                <div className="fila-precios rounded shadow-sm bg-dark p-3 overflow-auto mb-3">

                  <div className="d-flex align-items-center justify-content-center flex-nowrap gap-2">

                    <div className="bg-white text-dark etiqueta-fila flex-shrink-0">

                      CAMPO A

                    </div>

                    {/* PREVENTA FANS */}
                    <div className="celda-precio flex-shrink-0">

                      <div className="etiqueta">
                        PREVENTA FANS
                      </div>

                      <div className="precio">
                        S/ 330.00
                      </div>

                    </div>

                    {/* INTERBANK */}
                    <div className="celda-precio destacado flex-shrink-0">

                      <div className="etiqueta">
                        PREVENTA INTERBANK
                      </div>

                      <div className="precio">
                        S/ 280.00
                      </div>

                    </div>

                    {/* FULL */}
                    <div className="celda-precio flex-shrink-0">

                      <div className="etiqueta">
                        PRECIO FULL
                      </div>

                      <div className="precio">
                        S/ 400.00
                      </div>

                    </div>

                    {/* CONADIS */}
                    <div className="celda-precio flex-shrink-0">

                      <div className="etiqueta">
                        CONADIS
                      </div>

                      <div className="precio">
                        S/ 153.00
                      </div>

                    </div>

                  </div>

                </div>

                {/* CAMPO B */}
                <div className="fila-precios rounded shadow-sm bg-dark p-3 overflow-auto">

                  <div className="d-flex align-items-center justify-content-center flex-nowrap gap-2">

                    <div className="bg-warning text-dark etiqueta-fila flex-shrink-0">

                      CAMPO B

                    </div>

                    <div className="celda-precio flex-shrink-0">

                      <div className="etiqueta">
                        PREVENTA FANS
                      </div>

                      <div className="precio">
                        S/ 153.00
                      </div>

                    </div>

                    <div className="celda-precio destacado flex-shrink-0">

                      <div className="etiqueta">
                        PREVENTA INTERBANK
                      </div>

                      <div className="precio">
                        S/ 123.00
                      </div>

                    </div>

                    <div className="celda-precio flex-shrink-0">

                      <div className="etiqueta">
                        PRECIO FULL
                      </div>

                      <div className="precio">
                        S/ 210.00
                      </div>

                    </div>

                    <div className="celda-precio flex-shrink-0">

                      <div className="etiqueta">
                        CONADIS
                      </div>

                      <div className="precio">
                        S/ 99.00
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTONES */}
      <section className="py-5">

        <div className="container text-center">

          <h3 className="mb-5 text-dark fw-bold">

            Obtén tus tickets para ver a MEGADETH

          </h3>

          <div className="row g-3">

            {/* BOTÓN 1 */}
            <div className="col-md-6">

              <button
                className="btn btn-dark w-100 py-3 fw-bold"

                onClick={() =>
                  comprarEntrada(
                    "CAMPO A",
                    "PREVENTA FANS",
                    330
                  )
                }
              >

                PREVENTA FANS

              </button>

            </div>

            {/* BOTÓN 2 */}
            <div className="col-md-6">

              <button
                className="btn btn-danger w-100 py-3 fw-bold"

                onClick={() =>
                  comprarEntrada(
                    "CAMPO A",
                    "PREVENTA INTERBANK",
                    280
                  )
                }
              >

                PREVENTA INTERBANK

              </button>

            </div>

            {/* BOTÓN 3 */}
            <div className="col-md-6">

              <button
                className="btn btn-secondary w-100 py-3 fw-bold"

                onClick={() =>
                  comprarEntrada(
                    "CAMPO A",
                    "PRECIO FULL",
                    400
                  )
                }
              >

                PRECIO FULL

              </button>

            </div>

            {/* BOTÓN 4 */}
            <div className="col-md-6">

              <button
                className="btn btn-warning w-100 py-3 fw-bold"

                onClick={() =>
                  comprarEntrada(
                    "CAMPO A",
                    "CONADIS",
                    153
                  )
                }
              >

                CONADIS

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* DESCRIPCIÓN */}
      <section className="descripcion bg-dark py-5 text-center">

        <img
          src={logoEvento}
          alt="Megadeth"
          className="mb-3 img-fluid"
        />

        <p className="text-center mx-auto w-75">

          Los íconos del thrash metal,
          <strong> Megadeth </strong>
          llegan a Perú.

        </p>

      </section>

    </LayoutPrincipal>

  );

}

export default Evento1;