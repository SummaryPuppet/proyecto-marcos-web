import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaSignInAlt } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import logoLogin from "../../assets/img/logo-login.jpeg";
import "../../css/dashboardLogin.css";
import { loginUsuario } from "../../services/UsuarioService";
import {
  guardarSesionDashboard,
  recuperarSesionDashboard,
} from "../../utils/dashboardAuth";

function DashboardLogin() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const sesion = recuperarSesionDashboard();

  useEffect(() => {
    setError("");
  }, [correo, contrasena]);

  if (sesion) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!correo.trim() || !contrasena.trim()) {
      setError("Ingresa correo y contraseña para acceder al dashboard.");
      return;
    }

    setCargando(true);
    setError("");

    try {
      const data = await loginUsuario({
        correo,
        contrasena,
      });

      if (data) {
        guardarSesionDashboard(data);
        navigate("/dashboard", { replace: true });
      }
    } catch (loginError) {
      console.error(loginError);
      setError("Correo o contraseña incorrectos.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="dashboard-login-page">
      <div className="dashboard-login-card">
        <div className="dashboard-login-copy">
          <span className="dashboard-login-badge">Acceso admin</span>
          <h1>Panel de control</h1>
          <p>
            Ingresa con tu correo y contraseña para administrar eventos y
            usuarios.
          </p>
        </div>

        <form className="dashboard-login-form" onSubmit={handleSubmit}>
          <div className="dashboard-login-visual">
            <img src={logoLogin} alt="Ticket Plus" />
          </div>

          <label className="dashboard-login-label">
            Correo electrónico
            <input
              type="email"
              value={correo}
              onChange={(event) => setCorreo(event.target.value)}
              placeholder="admin@correo.com"
            />
          </label>

          <label className="dashboard-login-label">
            Contraseña
            <div className="dashboard-login-password">
              <input
                type={mostrarContrasena ? "text" : "password"}
                value={contrasena}
                onChange={(event) => setContrasena(event.target.value)}
                placeholder="Ingresa tu contraseña"
              />

              <button
                type="button"
                className="dashboard-login-toggle"
                onClick={() => setMostrarContrasena((actual) => !actual)}
              >
                {mostrarContrasena ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>

          {error ? <div className="dashboard-login-error">{error}</div> : null}

          <button
            type="submit"
            className="dashboard-login-button"
            disabled={cargando}
          >
            <FaSignInAlt />
            {cargando ? "Ingresando..." : "Entrar al dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashboardLogin;
