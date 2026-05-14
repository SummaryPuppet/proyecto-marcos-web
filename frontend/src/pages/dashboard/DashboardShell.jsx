import { NavLink, useNavigate } from "react-router-dom";
import { cerrarSesionDashboard } from "../../utils/dashboardAuth";

function DashboardShell({ activeSection, title, subtitle, children }) {
  const navigate = useNavigate();
  const navItems = [
    { to: "/dashboard", label: "Dashboard", section: "dashboard" },
    { to: "/dashboard/eventos", label: "Eventos", section: "eventos" },
    { to: "/dashboard/usuarios", label: "Usuarios", section: "usuarios" },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="sidebar-kicker">TelePlus</span>
          <h2>Admin Panel</h2>
        </div>

        <nav className="sidebar-nav" aria-label="Navegación del dashboard">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `sidebar-link ${isActive || activeSection === item.section ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>Gestión interna de eventos y usuarios</p>

          <button
            type="button"
            className="sidebar-logout"
            onClick={() => {
              cerrarSesionDashboard();
              navigate("/dashboard/login", { replace: true });
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <p className="page-kicker">Panel administrativo</p>
            <h1>{title}</h1>
            <p className="page-subtitle">{subtitle}</p>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}

export default DashboardShell;
