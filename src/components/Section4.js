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
          >
            Realizamos mantenimiento preventivo y correctivo a sus computadores
            ya sean de escritorio o portátiles de cualquier marca. Mantener sus
            equipos en buen estado mejora el rendimiento, tan del software como
            del hardware, de los mismos.
          </Card2>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card2 titulo="Cableado Estructurado">
            Un sistema de cableado estructurado correctamente diseñado e
            instalado proporciona una infraestructura de cableado de nodos de
            red que ofrece un rendimiento predecible, así como la flexibilidad
            para acomodar movimientos, adiciones y cambios.{" "}
          </Card2>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card2
            titulo="Licenciamiento de 
Software"
          >
            El pago de licenciamiento de software garantiza el funcionamiento
            correcto del producto sin ningún tipo de anomalías, a su vez podrá
            disfrutar de características adicionales, así como de beneficiarse
            de las últimas actualizaciones y recibir soporte del autor del
            mismo.
          </Card2>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card2 titulo="Creacion de Aplicaciones y Páginas web">
            Diseñamos y desarrollamos aplicaciones y páginas web a la medida que
            la necesites, con lo último en tecnología, para que se dé a conocer,
            aumente los clientes de su negocio y así crezcan sus ingresos.
          </Card2>
        </div>
      </div>
    </>
  );
}

export default Section4;
