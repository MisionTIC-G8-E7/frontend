import { NavLink } from "react-router-dom";

const NuestrosCanales = () => {
  return (
    <div className="row p-5 fondoCard2 justify-content-center align-items-center">
      <h2 className="fs-1 mb-5 text-center">Nuestros canales</h2>
      <div className="col-md-12 col-lg-4">
        <h3 className="text-center">TICKETS</h3>
        <img
          className="rounded mx-auto d-block"
          src="https://i.postimg.cc/FsdXTLtx/outline-content-paste-black-24dp.png"
          alt=""
        />
        <p>
        Gestionamos nuestro soporte en tickets, para dar un servicio completo cada vez más rápido y eficiente.
        </p>
        <NavLink to="/tickets">
          <button className="btn btn-success"> Abrir Ticket</button>
        </NavLink>
      </div>
      <div className="col-md-12 col-lg-4">
        <h3 className="text-center">CORREO ELECTRÓNICO</h3>
        <img
          className="rounded mx-auto d-block"
          src="https://i.postimg.cc/9F5KWNRv/correo.png"
          alt=""
        />
        <p>
          Nuestro canal de correo se caracteriza por su rapidez y eficiencia.
        </p>
      </div>
      <div className="col-md-12 col-lg-4">
        <h3 className="text-center">WHATSAPP</h3>
        <img
          className="rounded mx-auto d-block"
          src="https://i.postimg.cc/gksDfMvy/whatsapp.png"
          alt=""
        />
        <p>
        Reciba soporte a manera inmediata y fácil a través de mensajes instantáneos.
        </p>
      </div>

      <div className="col-md-12 col-lg-4">
        <h3 className="text-center">TELEFÓNICO</h3>
        <img
          className="rounded mx-auto d-block"
          src="https://i.postimg.cc/C1wdT4CD/phone.png"
          alt=""
        />
        <p>
        Solucionamos cualquier problema a través de nuestras líneas telefónicas fijas y móviles.
        </p>
      </div>
      <div className="col-md-12 col-lg-4">
        <h3 className="text-center">SKYPE</h3>
        <img
          className="rounded mx-auto d-block"
          src="https://i.postimg.cc/GtcDKCgW/skype.png"
          alt=""
        />
        <p>
        La videollamada, una opción eficaz y directa para ofrecer soporte y capacitación tecnológica.
        </p>
      </div>
      <div className="col-md-12 col-lg-4">
        <h3 className="text-center">ESCRITORIO REMOTO</h3>
        <img
          className="rounded mx-auto d-block"
          src="https://i.postimg.cc/NFpHPzW5/terminal.png"
          alt=""
        />
        <p>
        Manejamos software como AnyDesk y TeamViewer, entre otros.
        </p>
      </div>
    </div>
  );
};

export default NuestrosCanales;
