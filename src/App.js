// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Nosotros from "./views/Nosotros";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="nosotros" element={<Nosotros />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
