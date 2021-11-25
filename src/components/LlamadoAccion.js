/** @format */

const LlamadoAccion = () => {
  return (
    <div className="row justify-content-center align-items-center bg-success p-5 h-auto">
      <div className="col-12 col-sm-6 text-white">
        <h3 className="fs-1">Programa tu servicio de soporte </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          architecto cupiditate id, facilis nobis dignissimos modi fugiat quod
          quasi neque quos provident? Quia, reprehenderit repudiandae. Alias
          nihil quasi obcaecati atque.
        </p>

        <p className="fs-1">☎ 3141234245</p>
      </div>

      <div className="col-12 col-sm-6 bg-primary p-5 text-white">
        <form className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              Nombre
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Correo
            </label>
            <input type="email" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Telefono
            </label>
            <input type="number" className="form-control" id="inputAddress" />
          </div>

          <div className="col-md-12">
            <label htmlFor="inputState" className="form-label">
              Seleccione un servicio
            </label>
            <select
              id="inputState"
              className="form-select"
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                Seleccione...
              </option>
              <option>Soporte hardware y software</option>
              <option>Mantenimiento preventivo</option>
              <option>Mantenimiento de computadores</option>
              <option>Cableado estructurado</option>
              <option>Aplicaciones webs y móviles</option>
              <option>Instalacion y licenciamiento de progrmas</option>
              <option>Venta de computadores y accesorios</option>
              <option>Servicio de soporte técnico remoto</option>
              <option>Soporte personalizado</option>
            </select>
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
          <div className="col-12">
            <button type="submit" className="btn btn-success">
              Solicitar Asesoria
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LlamadoAccion;
