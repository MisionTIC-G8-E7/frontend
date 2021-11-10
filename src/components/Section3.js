/** @format */
import Card from "../components/Card";
import "../components/Section3.css";

function Section3() {
  return (
    <div className="row mt-5">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Card
          titulo="Soporte Hardware"
          imagen="https://i.ibb.co/1RWRGF5/cog-wheels-g206528ca7-640.jpg"
        >
          Nos enfocamos en asegurar que los componentes funcionen en forma
          correcta y que los controladores del hardware se actualicen en forma
          periódica y sistemática. Se realiza mantenimiento correctivo y
          preventivo de todos los componentes de sus equipos.
        </Card>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Card
          titulo="Soporte Software"
          imagen="https://i.ibb.co/C6mP87d/software-g03676f5f5-640.jpg"
        >
          Realizamos actualización, mantenimiento correctivo y mantenimiento
          preventivo del software instalado en sus equipos para que los mantenga
          en buen estado, funcionando de la mejor manera y rindiendo al 100%.
        </Card>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Card
          titulo="Mantenimiento Preventivo"
          imagen="https://destinonegocio.com/wp-content/uploads/2018/07/mantenimiento1.jpg"
        >
          Realizamos mantenimiento preventivo y correctivo a sus computadores ya
          sean de escritorio o portátiles de cualquier marca. Mantener sus
          equipos en buen estado mejora el rendimiento, tan del software como
          del hardware, de los mismos.
        </Card>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Card
          titulo="Tienda"
          imagen="https://hacemoscontactos.files.wordpress.com/2018/12/online-shop-2.png"
        >
          Tenemos todos los accesorios para su computador: teclados, monitores,
          mouses, discos duros, memorias USB y SD, toda clase de cables,
          repetidores, audífonos, etc.
        </Card>
      </div>
    </div>
  );
}

export default Section3;
