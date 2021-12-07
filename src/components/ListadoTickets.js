import Footer from "./Footer";
import LlamadoAccion from "./LlamadoAccion";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import { axios } from "axios";

const ListadoTickets = () => {
  
  // const [tickets, setTickets] = useState([]);

  // useEffect(() => {
  //   listaTikets();
  // }, []);

  // // DESACTIVADO POR JAVIER... compa lo pongo en comentarios para hacer funcionar otra cosa
  // const listaTikets = async (e) => {
  //   let apiURL = "http://localhost:5500/api/tickets"; //abrimos el puerto para hacer una peticion
  //   axios.get(apiURL)
  //     .then((res) => {
  //       // this.$router.push("/");
  //       setTickets(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <Menu />

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

      <LlamadoAccion />
      <Footer />
    </>
  );
};

export default ListadoTickets;
