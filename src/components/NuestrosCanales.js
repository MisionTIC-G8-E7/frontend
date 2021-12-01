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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          iusto dicta exercitationem quibusdam facere eveniet corrupti itaque
          porro ratione maiores natus repudiandae ullam accusamus debitis, quis
          quos deserunt beatae autem.
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          saepe, doloremque hic laborum facilis magnam possimus voluptatibus
          corrupti facere aspernatur obcaecati iusto, harum ullam, sit amet.
          Voluptates illum incidunt deleniti!
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia
          perferendis pariatur ipsa, totam reprehenderit possimus, vitae
          architecto consectetur delectus similique maiores fugit doloremque
          iusto nesciunt maxime commodi molestiae quo.
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          iusto dicta exercitationem quibusdam facere eveniet corrupti itaque
          porro ratione maiores natus repudiandae ullam accusamus debitis, quis
          quos deserunt beatae autem.
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          saepe, doloremque hic laborum facilis magnam possimus voluptatibus
          corrupti facere aspernatur obcaecati iusto, harum ullam, sit amet.
          Voluptates illum incidunt deleniti!
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia
          perferendis pariatur ipsa, totam reprehenderit possimus, vitae
          architecto consectetur delectus similique masdfasdfasdfadiores fugit
          doloremque iusto nesciunt maxime commodi molestiae quo.
        </p>
      </div>
    </div>
  );
};

export default NuestrosCanales;
