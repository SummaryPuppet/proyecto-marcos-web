import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Informacion from "./pages/Informacion";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
