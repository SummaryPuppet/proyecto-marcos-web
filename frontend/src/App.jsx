import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Evento1 from "./pages/eventos/Evento1";
import Evento5 from "./pages/eventos/Evento5";
import Evento6 from "./pages/eventos/Evento6";
import Informacion from "./pages/Informacion";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import VerBoletos from "./pages/VerBoletos";
import Evento3 from "./pages/eventos/Evento3";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Informacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ver-boletos" element={<VerBoletos />} />
        <Route path="/evento-1" element={<Evento1 />} />
        <Route path="/evento-3" element={<Evento3 />} />
        <Route path="/evento-5" element={<Evento5 />} />
        <Route path="/Evento-6" element={<Evento6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
