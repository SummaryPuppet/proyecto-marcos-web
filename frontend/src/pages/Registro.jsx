import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../services/UsuarioService";
import logoLogin from "../assets/img/logo-login.jpeg"; 
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Registro() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("es");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const [formData, setFormData] = useState({ 
    nombre: "", 
    dni: "",      
    telefono: "",  
    correo: "", 
    contrasena: "", 
    confirmar: "" 
  });
  const [error, setError] = useState("");

  const texts = {
    es: {
      title: "Crear Cuenta",
      name: "Nombre Completo",
      namePlaceholder: "",
      dni: "DNI",
      phone: "Teléfono",
      email: "Correo Electrónico",
      emailPlaceholder: "",
      pass: "Contraseña",
      confirm: "Confirmar contraseña",
      btn: "Registrarse",
      link: "¿Ya tienes cuenta? Inicia sesión",
      errorMatch: "Las contraseñas no coinciden",
      errorBackend: "Error al registrar. Revisa los datos o el correo.",
      footer: "Vive la música. Siente la experiencia 🎶"
    },
    en: {
      title: "Create Account",
      name: "Full Name",
      namePlaceholder: "",
      dni: "ID (DNI)",
      phone: "Phone",
      email: "Email Address",
      emailPlaceholder: "",
      pass: "Password",
      confirm: "Confirm Password",
      btn: "Sign Up",
      link: "Already have an account? Sign In",
      errorMatch: "Passwords do not match",
      errorBackend: "Registration error. Check your data or email.",
      footer: "Live the music. Feel the experience 🎶"
    }
  };

  const t = texts[language];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.contrasena !== formData.confirmar) {
      setError(t.errorMatch);
      return;
    }

    try {
      
      await registrarUsuario({
        nombre: formData.nombre,
        dni: formData.dni,
        telefono: formData.telefono,
        correo: formData.correo,
        contrasena: formData.contrasena
      });
      alert(language === "es" ? "¡Registro exitoso!" : "Registration successful!");
      navigate("/login");
    } catch {
      setError(t.errorBackend);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 vh-100">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white p-4">
          
          <div className="mb-3">
            <span 
              className="px-2" 
              onClick={() => setLanguage("es")}
              style={{ cursor: 'pointer', fontWeight: language === "es" ? 'bold' : 'normal', color: language === "es" ? 'red' : 'black' }}
            >ES</span>
            |
            <span 
              className="px-2" 
              onClick={() => setLanguage("en")}
              style={{ cursor: 'pointer', fontWeight: language === "en" ? 'bold' : 'normal', color: language === "en" ? 'red' : 'black' }}
            >EN</span>
          </div>

          <form className="w-75" style={{ maxWidth: '450px' }} onSubmit={handleSubmit}>
            <h2 className="text-center mb-4 fw-bold">{t.title}</h2>

            <div className="mb-3">
              <label className="text-muted small mb-1">{t.name}</label>
              <input type="text" name="nombre" className="form-control" placeholder={t.namePlaceholder} onChange={handleChange} required />
            </div>

            {/* FILA PARA DNI Y TELÉFONO */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="text-muted small mb-1">{t.dni}</label>
                <input type="text" name="dni" className="form-control" onChange={handleChange} maxLength="8" required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="text-muted small mb-1">{t.phone}</label>
                <input type="text" name="telefono" className="form-control" onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-3">
              <label className="text-muted small mb-1">{t.email}</label>
              <input type="email" name="correo" className="form-control" placeholder={t.emailPlaceholder} onChange={handleChange} required />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="text-muted small mb-1">{t.pass}</label>
                <div className="input-group">
                  <input type={showPassword ? "text" : "password"} name="contrasena" className="form-control border-end-0" onChange={handleChange} required />
                  <span className="input-group-text bg-white border-start-0" onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label className="text-muted small mb-1">{t.confirm}</label>
                <div className="input-group">
                  <input type={showConfirm ? "text" : "password"} name="confirmar" className="form-control border-end-0" onChange={handleChange} required />
                  <span className="input-group-text bg-white border-start-0" onClick={() => setShowConfirm(!showConfirm)} style={{ cursor: "pointer" }}>
                    {showConfirm ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
            </div>

            {error && <div className="alert alert-danger py-2 small text-center">{error}</div>}

            <button type="submit" className="btn btn-outline-danger w-100 mb-3 fw-bold">
              {t.btn}
            </button>
            
            <hr />

            <div className="text-center">
              <a href="/login" className="text-decoration-none small text-danger">{t.link}</a>
            </div>
          </form>   
        </div>

        {/* COLUMNA DERECHA: IMAGEN */}
        <div
          className="col-md-6 d-none d-md-block"
          style={{
            background: `url(${logoLogin}) center/cover no-repeat`
          }}
        ></div>
      </div>

      <footer className="bg-dark text-white text-center p-3">
        {t.footer}
      </footer>
    </div>
  );
}

export default Registro;