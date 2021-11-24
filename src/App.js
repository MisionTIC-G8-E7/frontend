// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import MantenimientoPc from "./views/MantenimientoPc";
import Nosotros from "./views/Nosotros";
import Hardware from "./views/soporte/Hardware";
import Mantenimiento from "./views/soporte/Mantenimiento";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="nosotros" element={<Nosotros />}></Route>
        <Route path="hardware-software" element={<Hardware />}></Route>
        <Route
          path="mantenimiento-preventivo"
          element={<Mantenimiento />}
        ></Route>
        <Route
          path="mantenimiento-computadores"
          element={<MantenimientoPc />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
