import "../../css/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <aside className="sidebar">
        <h2>TelePlus Admin</h2>

        <ul>
          <li>Dashboard</li>
          <li>Eventos</li>
          <li>Usuarios</li>
          <li>Ventas</li>
        </ul>
      </aside>

      <main className="dashboard-content">

        <h1>Dashboard Administrador</h1>

        <div className="cards">

          <div className="card">
            <h3>Eventos</h3>
            <p>12</p>
          </div>

          <div className="card">
            <h3>Tickets Vendidos</h3>
            <p>540</p>
          </div>

          <div className="card">
            <h3>Usuarios</h3>
            <p>230</p>
          </div>

          <div className="card">
            <h3>Ganancias</h3>
            <p>S/ 15,000</p>
          </div>

        </div>

        <div className="table-section">
          <h2>Eventos recientes</h2>

          <table>
            <thead>
              <tr>
                <th>Evento</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Concierto Rock</td>
                <td>20/05/2026</td>
                <td>Activo</td>
              </tr>

              <tr>
                <td>Anime Fest</td>
                <td>25/05/2026</td>
                <td>Activo</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;