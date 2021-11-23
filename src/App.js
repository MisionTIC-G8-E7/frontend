// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Nosotros from "./views/Nosotros";
import Hardware from "./views/soporte/Hardware";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="nosotros" element={<Nosotros />}></Route>
        <Route path="hardware-software" element={<Hardware />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
