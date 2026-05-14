import { NavLink } from "react-router-dom";

function DashboardShell({ activeSection, title, subtitle, children }) {
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
          Gestión interna de eventos y usuarios
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
