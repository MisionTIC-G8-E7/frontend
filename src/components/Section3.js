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
        />
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Card
          titulo="Soporte Software"
          imagen="https://i.ibb.co/C6mP87d/software-g03676f5f5-640.jpg"
        />
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Card
          titulo="Mantenimiento Preventivo"
          imagen="https://destinonegocio.com/wp-content/uploads/2018/07/mantenimiento1.jpg"
        />
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Card
          titulo="Tienda"
          imagen="https://hacemoscontactos.files.wordpress.com/2018/12/online-shop-2.png"
        />
      </div>
    </div>
  );
}

export default Section3;
