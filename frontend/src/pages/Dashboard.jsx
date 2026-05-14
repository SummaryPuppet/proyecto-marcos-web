import "../css/dashboard.css";

import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  // ===== STATES =====

  const [totalEventos, setTotalEventos] = useState(0);

  const [totalUsuarios, setTotalUsuarios] = useState(0);

  const [totalEntradas, setTotalEntradas] = useState(0);

  const [eventosRecientes, setEventosRecientes] = useState([]);

  // ===== CARGAR DATOS =====

  useEffect(() => {

    // EVENTOS
    axios
      .get("http://localhost:8080/api/eventos")
      .then((response) => {

        setTotalEventos(response.data.length);

        setEventosRecientes(response.data);

      })
      .catch((error) => {
        console.error(error);
      });

    // USUARIOS
    axios
      .get("http://localhost:8080/api/usuarios")
      .then((response) => {

        setTotalUsuarios(response.data.length);

      })
      .catch((error) => {
        console.error(error);
      });

    // ENTRADAS
    axios
      .get("http://localhost:8080/api/entradas")
      .then((response) => {

        setTotalEntradas(response.data.length);

      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (

    <div className="dashboard-container">

      <aside className="sidebar">

        <h2><strong>TelePlus Admin</strong></h2>

        <ul>
          <li>Dashboard</li>
          <li>Eventos</li>
          <li>Usuarios</li>
          <li>Ventas</li>
        </ul>

      </aside>

      <main className="dashboard-content">

        <h1>Dashboard Administrador</h1>

        {/* ===== TARJETAS ===== */}

        <div className="cards">

          <div className="card">
            <h3>Eventos</h3>
            <p>{totalEventos}</p>
          </div>

          <div className="card">
            <h3>Tickets Vendidos</h3>
            <p>{totalEntradas}</p>
          </div>

          <div className="card">
            <h3>Usuarios</h3>
            <p>{totalUsuarios}</p>
          </div>

          <div className="card">
            <h3>Ganancias</h3>
            <p>S/ 15,000</p>
          </div>

        </div>

        {/* ===== TABLA ===== */}

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

              {eventosRecientes.map((evento) => (

                <tr key={evento.id_evento}>

                  <td>{evento.titulo}</td>

                  <td>{evento.fecha_evento}</td>

                  <td>{evento.estado}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;