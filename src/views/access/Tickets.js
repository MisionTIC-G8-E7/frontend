/** @format */
import { useState } from "react";
import Footer from "../../components/Footer";
// import LlamadoAccion from "../../components/LlamadoAccion";
import Menu from "../../components/Menu";
import axios from "axios";

const Tickets = () => {
  const agregarTiket = async (e) => {
    let apiURL = "http://localhost:5500/api/tickets"; //abrimos el puerto para hacer una peticion
    e.preventDefault();
    axios
      .post(apiURL, tikets)
      .then(() => {
        this.$router.push("/");
        setTikets({
          nombre: "",
          email: "",
          telefono: "",
          asunto: "",
          mensaje: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
    console.log(tikets);
  };
  const [tikets, setTikets] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
    imagen: "",
  });

  const handleInput = (event) => {
    setTikets({
      ...tikets,
      [event.target.name]: event.target.value,
    });
  };

  //CARGANDO IMAGEN
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileSelected = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const subirImagen = () => {
    const fd = new FormData();
    fd.append("image", selectedFile);
    let imgApi =
      "https://api.imgbb.com/1/upload?key=a05daebb93267b09d0073a8ae16975b8";
    axios.post(imgApi, fd).then((res) => {
      setTikets({
        ...tikets,
        imagen: res.data.data.display_url,
      });
    });
  };

  return (
    <>
      <Menu />
      <div className="row justify-content-center align-items-center p-5 fondo14 text-white h-auto">
        <div className="col-12 col-md-4"></div>

        <div
          className="col-12 col-md-4"
          style={{
            background: "rgb(0,0,0,0.5)",
          }}
        >
          <h1 className="text-center">Abrir Ticket</h1>
        </div>
        <div className="col-12 col-md-4 "></div>
      </div>

      <div className="row justify-content-center align-items-center p-5 fondoCard2 text-black h-auto">
        <div className="col-12 col-md-2"></div>
        <div className="col-12 col-md-8 bg-secondary p-5 text-white">
          <p>
            Si necesitas soporte, abre un ticket en nuestro sistema, un técnico
            nuestro se pondrá en contacto contigo para resolver la incidencia en
            el menor tiempo posible. Atendemos todas las incidencias por
            riguroso orden de entrada, priorizando los clientes que tienen un
            contrato de mantenimiento con nosotros.
          </p>
          <form className="row g-3" onSubmit={agregarTiket}>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                name="nombre"
                onChange={handleInput}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="inputPassword4"
                name="email"
                onChange={handleInput}
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="inputAddress" className="form-label">
                Telefono
              </label>
              <input
                type="number"
                className="form-control"
                id="inputAddress"
                name="telefono"
                onChange={handleInput}
                required
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Asunto
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                name="asunto"
                onChange={handleInput}
                required
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="inputEmail4"
                cols="30"
                rows="10"
                name="mensaje"
                onChange={handleInput}
                required
              ></textarea>
            </div>

            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Sube una imagen (Opcional)
              </label>
              <input
                type="file"
                className="form-control"
                id="inputEmail4"
                onChange={onFileSelected}
              />
              <p onClick={subirImagen} className="btn btn-success mt-3">
                Cargar imagen al servidor
              </p>

              <p>{tikets.imagen !== "" && "Image cargada correctamente"}</p>
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Acepto política de privacidad
                </label>
              </div>
            </div>

            <div className="col-12 col-md-4"></div>

            <div className="col-12 col-md-4">
              <button type="submit" className="btn btn-success fs-2">
                ENVIAR
              </button>
            </div>
            <div className="col-12 col-md-4"></div>
          </form>
        </div>
        <div className="col-12 col-md-2"></div>
      </div>

      {/* <LlamadoAccion /> */}
      <Footer />
    </>
  );
};

export default Tickets;
