/** @format */

import "../components/Card2.css";

function Card2(props) {
  console.log(props);
  return (
    <div className="row justify-content-center align-items-center m-3">
      <div className="card ancho fondoCard2">
        <div className="card-body">
          <h3 className="card-title text-center fs-2">{props.titulo}</h3>
          <p className="card-text">{props.children}</p>
          <a href="/" className="btn color text-white">
            SABER MÁS
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card2;
