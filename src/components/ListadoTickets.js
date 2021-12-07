/** @format */
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import LlamadoAccion from "./LlamadoAccion";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import { axios } from "axios";

const ListadoTickets = () => {
  
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    listaTikets();
  }, []);

  // // DESACTIVADO POR JAVIER... compa lo pongo en comentarios para hacer funcionar otra cosa
  const listaTikets = async (e) => {
    let apiURL = "http://localhost:5500/api/tickets"; //abrimos el puerto para hacer una peticion
    axios.get(apiURL)
      .then((res) => {
        // this.$router.push("/");
        setTickets(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTicket = () => {
    /**************************************** INICIO **********************************/
      // HOLA MANUEL: solo definí la variable "params" para hacer una pruea
    
    let params = {
      id: "123456"
    }

    /************************ FIN **************************************************/
    const apiURL = `http://localhost:5500/api/tickets/${params.id}`;
  };

  return (
    <>
      <Menu />
      <div className="row m-5">
        <div className="col-12">
          <h1 className="text-center">Listado de tikets pendientes</h1>
        </div>
        <div className="col-12">
          <ol className="list-group list-group-numbered">
            {tickets.map((item) => (
              <li className="list-group-item fs-2" key={item._id}>
                Asunto: {item.asunto}
                <div className="row">
                  <div className="col-12 col-md-4"></div>
                  <div className="col-12 col-md-4"></div>
                  <div className="col-12 col-md-4">
                    <NavLink className="btn btn-primary m-2" to="/tickets/:id">
                      Ver
                    </NavLink>

      {/* <ul>
        {tickets.map((item) => (
          <li key={item._id}>
            <div className="list-group m-5">
              <a
                href="/"
                className="list-group-item list-group-item-action"
                aria-current="true"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{item.nombre}</h5>
                  <small>{item.email}</small>
                </div>
                <p className="mb-1">{item.asunto}</p>
                <small>{item.mensaje}</small>
              </a>
            </div>
          </li>
        ))}
      </ul> */}

                    <NavLink className="btn btn-danger m-2" to="/tickets/:id">
                      Eliminar
                    </NavLink>
                    {/* 
                    <button className="btn btn-primary m-2">Ver</button>
                    <button className="btn btn-secondary m-2">Editar</button>
                    <button className="btn btn-danger m-2">Eliminar</button> */}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <LlamadoAccion />
      <Footer />
    </>
  );
};

export default ListadoTickets;
