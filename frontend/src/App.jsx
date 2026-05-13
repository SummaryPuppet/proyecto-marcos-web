import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Informacion from "./pages/Informacion";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Evento5 from "./pages/eventos/Evento5";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Informacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Evento-5" element={<Evento5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
