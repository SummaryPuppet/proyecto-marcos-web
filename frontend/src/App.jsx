import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Compras from "./pages/compras";
import Dashboard from "./pages/Dashboard";
import Evento1 from "./pages/eventos/Evento1";
import Evento3 from "./pages/eventos/Evento3";
import Evento4 from "./pages/eventos/evento4";
import Evento5 from "./pages/eventos/Evento5";
import Evento6 from "./pages/eventos/Evento6";
import Informacion from "./pages/Informacion";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Registro from "./pages/Registro";
import VerBoletos from "./pages/VerBoletos";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Informacion />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ver-boletos" element={<VerBoletos />} />
        <Route path="/evento-1" element={<Evento1 />} />
        <Route path="/evento-3" element={<Evento3 />} />
        <Route path="/evento-4" element={<Evento4 />} />
        <Route path="/evento-5" element={<Evento5 />} />
        <Route path="/evento-6" element={<Evento6 />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
