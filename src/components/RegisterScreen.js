import React from 'react'
import { useForm } from '../hooks/useForm';
import { removeError, setError } from '../actions/ui';
import { Link } from "react-router-dom";
import validator from 'validator';

import Footer from "./Footer";
import Menu from "./Menu";
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPassword } from '../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch()

    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: 'TEC-SERVICES',
        email: 'contacto@sopornteit.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const isFormValid = () => {

        // let listaErrores = {}


        if (name.trim().length < 2) {
            // console.log('el nombre debe ser de 2 o más caracteres')
            dispatch(setError('el nombre debe ser de 2 o más caracteres'))
            return false
            // listaErrores = { ...listaErrores, nombre: 'el nombre debe ser de 2 o más caracteres'}
        }
        if (password.length < 6 || password !== password2) {
            // console.log('La contraseña debe ser de mínimo 6 caracteres, y la deben coincidir')
            dispatch(setError('La contraseña debe ser de mínimo 6 caracteres, y la deben coincidir'))
            return false
            // listaErrores = { ...listaErrores, clave: 'La contraseña debe ser de mínimo 6 caracteres, y la deben coincidir'}
        }
        if (!validator.isEmail(email)) {
            // console.log('El correo no es válido.')
            dispatch(setError('El correo no es válido.'))
            return false
            // listaErrores = { ...listaErrores, correo: 'El correo no es válido.'}
        }
        // if (Object.keys(listaErrores).length != 0 ) {
        //     console.log(listaErrores[nombre])
        //     return false
        // }
        dispatch(removeError())
        return true
    }

    const handleRegister = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            // console.log(name, email, password, password2)
            dispatch(startRegisterWithEmailPassword(email, password, name))
        }
    }

    return (
        <>
            <div>
                <Menu />
                <br /><br />
                <h1 className="text-center">Registrar cuenta</h1>
                <br />
                <div className="container bg-secondary  text-white p-4">
                    <form onSubmit={handleRegister}>
                        {
                            msgError && (
                                <div className="alert alert-danger" role="alert">
                                    { msgError } 
                                </div>
                            )
                        }
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputName"
                                autoComplete="off"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                autoComplete="off"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                name="password"
                                autoComplete="off"
                                value={password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword2">Confirmar Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword2"
                                placeholder="Password"
                                name="password2"
                                autoComplete="off"
                                value={password2}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {/* <div className="mb-3 form-check pt-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                                // value={terms}
                                name="terms"
                                onChange={ handleInputChange }
                                defaultChecked={terms}
                                required
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">Acepto los términos y condiciones.</label>
                        </div> */}
                        <br />
                        <button type="submit" className="btn btn-primary">Crear cuenta</button>
                    </form>
                </div>
                <br />
                <hr />
                <div className="container">
                    <Link to='/login'>Si ya tienes una cuenta, da clic aquí</Link>
                </div>
                <hr />
            </div>
            <Footer />
        </>
    )
}

export default RegisterScreen;