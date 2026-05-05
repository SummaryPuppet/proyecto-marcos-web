export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid p-0">
        <a class="navbar-brand px-3" href="#">
          Ticket +
        </a>
        <button
          class="navbar-toggler mx-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="./index.html">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./informacion.html">
                Nosotros
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./compras.html">
                Compras
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./ver-boletos.html">
                Ver boletos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./login.html">
                Iniciar Sesion
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./registro.html">
                Registrarse
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
