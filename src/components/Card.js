/** @format */
import "../components/Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="row justify-content-center align-items-center m-3">
      <div className="card ancho fondo2 ">
        <img src={props.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center fs-2">{props.titulo}</h5>
          <p className="card-text">{props.children}</p>
          <Link className="navbar-brand fs-1 fw-bold" to={props.enlace}>
            <button className="btn btn-primary">Más Información</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
