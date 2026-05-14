import { Link } from "react-router-dom";

// Importación de Banners y Eventos
import bannerPrincipal from "../assets/img/banner-evento1.jpg";
import imgEvento4 from "../assets/img/evento4.png";
import imgEvento1 from "../assets/img/index-evento1.jpg";
import imgEvento2 from "../assets/img/index-evento2.jpg";
import imgEvento3 from "../assets/img/index-evento3.jpg";
import imgEvento5 from "../assets/img/index-evento5.jpg";
import imgEvento6 from "../assets/img/index-evento6.jpg";
import LayoutPrincipal from "../layouts/LayoutPrincipal";

export default function Inicio() {
  const eventos = [
    { id: 1, img: imgEvento1, ruta: "/evento-1" },
    { id: 2, img: imgEvento2, ruta: "/evento-2" },
    { id: 3, img: imgEvento3, ruta: "/evento-3" },
    { id: 4, img: imgEvento4, ruta: "/evento-4" },
    { id: 5, img: imgEvento5, ruta: "/Evento-5" },
    { id: 6, img: imgEvento6, ruta: "/evento-6" },
  ];

  return (
    <LayoutPrincipal>
      <div className="d-flex flex-column min-vh-100 bg-light index-page">
        {/* SECCIÓN HERO */}
        <section className="hero">
          <div className="container-fluid p-0">
            <Link to="/evento-1">
              <img
                src={bannerPrincipal}
                className="img-fluid w-100"
                alt="Banner Principal"
              />
            </Link>
          </div>
        </section>

        {/* LISTA DE EVENTOS */}
        <main className="container my-4 flex-fill">
          <h3 className="pb-4">Eventos destacados</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {eventos.map((evento) => (
              <div className="col" key={evento.id}>
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <Link to={evento.ruta}>
                    <img
                      src={evento.img}
                      alt={`Evento ${evento.id}`}
                      className="card-img-top"
                      style={{ transition: "transform 0.3s" }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </Link>
                  <div className="card-body">
                    <p
                      className="card-text mb-0 fw-bold"
                      style={{ color: "black" }}
                    >
                      EVENTO {evento.id}
                    </p>
                    <p className="card-text text-secondary small">
                      17 Mayo - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </LayoutPrincipal>
  );
}
