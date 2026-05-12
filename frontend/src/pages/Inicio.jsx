import { Link } from "react-router-dom";

// Importación de Banners y Eventos
import bannerPrincipal from "../assets/img/banner-evento1.jpg";
import imgEvento1 from "../assets/img/index-evento1.jpg";
import imgEvento2 from "../assets/img/index-evento2.jpg";
import imgEvento3 from "../assets/img/index-evento3.jpg";
import imgEvento4 from "../assets/img/evento4.png";
import imgEvento5 from "../assets/img/index-evento5.jpg";
import imgEvento6 from "../assets/img/index-evento6.jpg";

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
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* SECCIÓN HERO */}
      <section className="hero">
        <div className="container-fluid p-0">
          <Link to="/evento-1">
            <img src={bannerPrincipal} className="img-fluid w-100" alt="Banner Principal" />
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
                    style={{ transition: 'transform 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </Link>
                <div className="card-body">
                  <p className="card-text mb-0 fw-bold">EVENTO {evento.id}</p>
                  <p className="card-text text-secondary small">17 Mayo - 6:00 PM</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER*/}
      <footer className="bg-black text-white mt-5">
        <div className="container py-4">
          <div className="row">
            <h2 className="fw-bold text-start pb-3">Ticket +</h2>
            <div className="container">
              <p className="small text-secondary">
                Al continuar en esta página, usted acuerda registrarse por nuestros{" "}
                <a href="#" className="text-white text-decoration-underline">
                  términos de uso
                </a>.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-4 border-top border-secondary">
          <div className="container">
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
              <a href="#" className="text-white text-decoration-none border-end pe-2 me-1">Política de Compra</a>
              <a href="#" className="text-white text-decoration-none border-end pe-2 me-1">Política de privacidad</a>
              <a href="#" className="text-white text-decoration-none border-end pe-2 me-1">Política de cookies</a>
              <a href="#" className="text-white text-decoration-none">Término de Uso</a>

              <span className="rounded-3 bg-success p-2 ms-md-3" style={{ fontSize: '0.8rem' }}>
                Preferencias de cookies.
              </span>
            </div>

            <p className="small text-secondary mb-0">
              © 2026 TicketBoost. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}