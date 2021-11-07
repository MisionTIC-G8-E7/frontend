/** @format */

import Card2 from "./Card2";
import "../components/Card2.css";

function Section4() {
  return (
    <>
      <div className="row fondoCard2">
        <div className="col-12">
          <h2 className="text-center mt-5 fs-1">SERVICIOS IT</h2>
        </div>
      </div>

      <div className="row fondoCard2">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card2
            titulo="Mantenimiento de 
computadores"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card2 titulo="Cableado Estructurado" />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card2
            titulo="Licenciamiento de 
Software"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card2 titulo="Creacion de Aplicaciones y Páginas web" />
        </div>
      </div>
    </>
  );
}

export default Section4;
