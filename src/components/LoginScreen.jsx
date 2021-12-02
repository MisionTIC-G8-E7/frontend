import React from "react";
import { useDispatch } from "react-redux";
import GoogleButton from 'react-google-button'
import { Link } from "react-router-dom";
// import { useContext } from "react"
// import { useNavigate } from "react-router-dom"

import { useForm } from "../hooks/useForm"
import { startGoogleLogin, startLoginWithEmailPassword } from "../actions/auth";

import Footer from "./Footer";
import Menu from "./Menu";


const LoginScreen = () => {

  const [formValues, handleInputChange] = useForm({
    email: 'contacto@sopornteit.com',
    password: '123456'
  });

  const { email, password } = formValues;

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault()
    // console.log(email, password)
    // dispatch(login('asdfasd7a7sdf7999ada', 'Javier'))
    dispatch(startLoginWithEmailPassword(email, password))
  }

  const handleGoogleLogin = () => {
    console.log('Iniciando sesión con boton Google')
    dispatch(startGoogleLogin());
  }
  return (
    <>
      <div>
        <Menu />
        <div className="row justify-content-center align-items-center p-5 fondo12 text-white">
          <div
            className="col-12 col-md-5"
            style={{ background: "rgb(0,0,0,0.5)" }}
          >
            <h1 className="text-center">SOPORTE TÉCNICO</h1>
            <p>
              Ya sea que requiera una reparación del producto o sólo algunos consejos y ayuda. Tenemos un centro de soporte autorizado en la ciudad que pueden ayudarlo. Todo nuestro personal está plenamente capacitados y utilizan piezas originales en todas las reparaciones. Encuentra el tipo de producto a continuación para ver cómo puedes obtener el soporte en persona que necesitas.
            </p>
          </div>
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-6 ">
            {/* <img
            className="img-fluid pt-4"
            src="https://abamobile.com/web/wp-content/uploads/2020/02/Desarrollo-y-creacion-de-apps-495x400.png"
            alt=""
          /> */}
          </div>
        </div>
        <h1 className="text-center">Iniciar sesión</h1>
        <br />
        <div className="container bg-secondary  text-white p-4">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Iniciar sersión</button>
          </form>
        </div>
        <hr />
        <div className="container">
          <GoogleButton onClick={handleGoogleLogin} />
        </div>
        <br />
        <div className="container">
          <Link to='/register'>Crear cuenta</Link>
        </div>
      </div>
      <br />
      <hr />
      <Footer />
    </>
  )
}

export default LoginScreen
