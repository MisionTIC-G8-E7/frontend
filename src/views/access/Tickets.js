import Footer from "../../components/Footer";
// import LlamadoAccion from "../../components/LlamadoAccion";
import Menu from "../../components/Menu";

const Tickets = () => {
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
          <form className="row g-3">
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-6">
              <label htmlFor="inputAddress" className="form-label">
                Telefono
              </label>
              <input type="number" className="form-control" id="inputAddress" />
            </div>

            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Asunto
              </label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>

            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                name=""
                id="inputEmail4"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Sube una imagen (Opcional)
              </label>
              <input type="file" className="form-control" id="inputEmail4" />
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
