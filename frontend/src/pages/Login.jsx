import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../css/login.css";
import logoLogin from "../assets/img/logo-login.jpeg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const [language, setLanguage] = useState("es");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const texts = {
    es: {
      welcome: "Bienvenido a Ticket Plus+ 🥳",
      success: "Login exitoso",
      continue: "Continuar",
      email: "Email",
      emailPlaceholder: "Ingresa tu email",
      password: "Contraseña",
      passwordPlaceholder: "Contraseña",
      login: "Ingresa",
      forgot: "¿Olvidaste tu contraseña?",
      register: "¿Aún no tienes cuenta? Regístrate",
      errorEmail: "Debes ingresar el email",
      errorPass: "Debes ingresar la contraseña",
      errorInvalidEmail: "Email no válido",
      footer: "Vive la música. Siente la experiencia 🎶",
    },
    en: {
      welcome: "Welcome to Ticket Plus+ 🥳",
      success: "Login successful",
      continue: "Continue",
      email: "Email",
      emailPlaceholder: "Enter your email",
      password: "Password",
      passwordPlaceholder: "Password",
      login: "Sign In",
      forgot: "Forgot your password?",
      register: "Don't have an account yet? Sign up",
      errorEmail: "You must enter your email",
      errorPass: "You must enter your password",
      errorInvalidEmail: "Invalid email",
      footer: "Live the music. Feel the experience 🎶",
    }
  };

  const t = texts[language];
  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") newErrors.push(t.errorEmail);
    else if (!emailRegex.test(email)) newErrors.push(t.errorInvalidEmail);
    if (password.trim() === "") newErrors.push(t.errorPass);

    setErrors(newErrors);
    if (newErrors.length === 0) setIsLoggedIn(true);
  };

  return (
    <div className="position-relative">
      {/* (MODAL) */}
      {isLoggedIn && (
        <div 
          className="d-flex justify-content-center align-items-center"
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            zIndex: 1050 
          }}
        >
          <div 
            className="bg-white p-5 shadow-lg text-center" 
            style={{ 
              borderRadius: '15px', 
              maxWidth: '450px', 
              width: '90%'
            }}
          >
            <h2 className="mb-2 fw-bold" style={{ color: '#333' }}>{t.welcome}</h2>
            <p className="text-muted mb-4">{t.success}</p>
            <button 
              className="btn btn-success w-100 py-2 fw-bold" 
              style={{ backgroundColor: '#198754', borderRadius: '8px', border: 'none' }}
              onClick={() => window.location.href = "/"}
            >
              {t.continue}
            </button>
          </div>
        </div>
      )}

      {/* LOGIN */}
      <div className={`container-fluid p-0 vh-100 d-flex flex-column ${isLoggedIn ? 'pe-none' : ''}`} style={{ filter: isLoggedIn ? 'blur(2px)' : 'none' }}>
        <div className="row g-0 flex-grow-1">
          {/* LADO IZQUIERDO */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white p-4">
            <div className="mb-4">
              <span className={`lang ${language === "es" ? "active" : ""}`} onClick={() => setLanguage("es")} style={{ cursor: 'pointer' }}>Español</span>
              {" | "}
              <span className={`lang ${language === "en" ? "active" : ""}`} onClick={() => setLanguage("en")} style={{ cursor: 'pointer' }}>English</span>
            </div>

            <form className="w-75" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="text-muted small mb-1">{t.email}</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderColor: email.length > 0 ? (email.includes("@") ? "green" : "red") : "" }}
                />
              </div>

              <div className="mb-3">
                <label className="text-muted small mb-1">{t.password}</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control border-end-0"
                    placeholder={t.passwordPlaceholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="input-group-text bg-white border-start-0" onClick={togglePassword} style={{ cursor: "pointer" }}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>

              {errors.length > 0 && (
                <div className="alert alert-danger py-2 small">
                  {errors.map((error, index) => <div key={index}>{error}</div>)}
                </div>
              )}

              <button type="submit" className="btn btn-outline-danger w-100 mb-3">{t.login}</button>
              
              <hr />

              <div className="login-links d-flex justify-content-between">
                <a href="#">{t.forgot}</a>
                <a href="#">{t.register}</a>
              </div>
            </form>   
          </div>

          {/* LD */}
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
    </div>
  );
}

export default Login;