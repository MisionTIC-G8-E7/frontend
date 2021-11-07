/** @format */
import "../components/Card.css";

function Card(props) {
  return (
    <div className="row justify-content-center align-items-center m-3">
      <div className="card ancho fondo2 ">
        <img src={props.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center fs-2">{props.titulo}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn color text-white">
            Más información
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
