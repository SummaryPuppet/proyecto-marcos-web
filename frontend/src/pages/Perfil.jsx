import { useNavigate } from "react-router-dom";
import LayoutPrincipal from "../layouts/LayoutPrincipal";

function Perfil() {
  const navigate = useNavigate();
  // Recuperamos los datos que guardamos en el Login
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h3>No has iniciado sesión</h3>
        <button className="btn btn-danger" onClick={() => navigate("/login")}>
          Ir al Login
        </button>
      </div>
    );
  }

  return (
    <LayoutPrincipal>
      <div className="container my-5 py-5">
        <div className="card mx-auto shadow" style={{ maxWidth: "400px" }}>
          <div className="card-body text-center">
            <h2 className="card-title mb-4">Mi Perfil</h2>
            <hr />
            <p>
              <strong>Nombre:</strong> {user.nombre}
            </p>
            <p>
              <strong>Correo:</strong> {user.correo}
            </p>
            <button
              className="btn btn-outline-danger mt-3"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}

export default Perfil;
