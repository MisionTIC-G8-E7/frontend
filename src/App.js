import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store"
=======
import { Provider } from "react-redux";
import { store } from "./store/store";
>>>>>>> 7475bc33f2ce41ad292e7afb7dbec0eeb1a3c92f

import Home from "./views/Home";
import MantenimientoPc from "./views/soporte/MantenimientoPc";
import Nosotros from "./views/Nosotros";
import Hardware from "./views/soporte/Hardware";
import Mantenimiento from "./views/soporte/Mantenimiento";
import LiceSoftware from "./views/soporte/LiceSoftware";
import CableadoEstructurado from "./views/soporte/CableadoEstructurado";
import MovilesyWebs from "./views/soporte/MovilesyWebs";
import LoginScreen from "./components/LoginScreen";
import Register from "./views/access/Register";
import CanalesSoporte from "./views/soporte/CanalesSoporte";
import Tickets from "./views/access/Tickets";
import { RegisterScreen } from "./components/RegisterScreen";
// import { useEffect } from "react";
// import { firebase } from "./firebase/firebase-config"
// import { login } from "./actions/auth";

import ListadoTickets from "./components/ListadoTickets";

export default function App() {

  // // const dispatch = useDispatch()
  // const dispatch = useDispatch()

  // useEffect(() => {
  //     firebase.auth().onAuthStateChanged( (user) => {
  //       if( user ) {
  //         dispatch( login(user.uid, user.displayName) )
  //       }
  //     })
  // }, [dispatch])

  return (
    <Provider store={store}>
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
          <Route path="login" element={<LoginScreen />}></Route>
          <Route path="register" element={<RegisterScreen />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="canales-soporte" element={<CanalesSoporte />}></Route>
          <Route path="lista-tickets" element={<ListadoTickets />}></Route>
          <Route path="tickets" element={<Tickets />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
