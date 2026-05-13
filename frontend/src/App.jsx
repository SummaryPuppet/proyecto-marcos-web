import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Evento3 from "./pages/eventos/Evento3";
import Evento5 from "./pages/eventos/Evento5";
import Informacion from "./pages/Informacion";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import VerBoletos from "./pages/VerBoletos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Informacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ver-boletos" element={<VerBoletos />} />

        <Route path="/evento-3" element={<Evento3 />} />
        <Route path="/evento-5" element={<Evento5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
