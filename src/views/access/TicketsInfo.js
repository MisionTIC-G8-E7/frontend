import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import axios from "axios";

const TicketsInfo = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    TicksInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const TicksInfo = async (e) => {
    let apiURL = `http://localhost:5500/api/tickets/${id}`; //abrimos el puerto para hacer una peticion `http://localhost:4001/api/individuo/${this.$route.params.id}`
    axios
      .get(apiURL)
      .then((res) => {
        // this.$router.push("/");
        setInfo(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Menu />
      <div className="row m-5 p-5 bg-success">
        <div className="col text-white">
          <h1>Nombre: {info.nombre}</h1>
          <p>Correo: {info.email}</p>
          <p>Telefono: {info.telefono}</p>
          <p>Asunto: {info.asunto}</p>
          <p>Mensaje: {info.mensaje}</p>
          <img src={info.imagen} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TicketsInfo;
