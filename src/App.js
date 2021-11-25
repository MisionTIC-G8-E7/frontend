// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import MantenimientoPc from "./views/soporte/MantenimientoPc";
import Nosotros from "./views/Nosotros";
import Hardware from "./views/soporte/Hardware";
import Mantenimiento from "./views/soporte/Mantenimiento";
import LiceSoftware from "./views/soporte/LiceSoftware";
import CableadoEstructurado from "./views/soporte/CableadoEstructurado";
import MovilesyWebs from "./views/soporte/MovilesyWebs";

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
        <Route
          path="licenciamiento-sorfware"
          element={<LiceSoftware />}
        ></Route>
        <Route
          path="cableado-estructurado"
          element={<CableadoEstructurado />}
        ></Route>
        <Route
          path="aplicaciones-moviles-webs"
          element={<MovilesyWebs />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
