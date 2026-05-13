import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid p-0">
        {/* BRAND / LOGO */}
        <a className="navbar-brand px-3" href="/">
          <img
            src={logo}
            alt="Ticket Plus Logo"
            style={{
              height: "50px",
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "2px",
            }}
          />
        </a>

        {/* BOTÓN MÓVIL (HAMBURGUESA) */}
        <button
          className="navbar-toggler mx-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS DEL MENÚ */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-3">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/nosotros"
              >
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/compras"
              >
                Compras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/ver-boletos"
              >
                Ver boletos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/login"
              >
                Iniciar Sesion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/registro"
              >
                Registrarse
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
