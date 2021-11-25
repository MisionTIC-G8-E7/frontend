const LlamadoAccion = () => {
  return (
    <div className="row justify-content-center align-items-center bg-success p-5 h-auto">
      <div className="col-12 col-sm-6 text-white">
        <h3 className="fs-1">Programa tu servicio técnico</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          architecto cupiditate id, facilis nobis dignissimos modi fugiat quod
          quasi neque quos provident? Quia, reprehenderit repudiandae. Alias
          nihil quasi obcaecati atque.
        </p>

        <p className="fs-1">☎ 3141234245</p>
      </div>

      <div className="col-12 col-sm-6 bg-primary p-5 text-white">
        <form class="row g-3">
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">
              Nombre
            </label>
            <input type="text" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Correo
            </label>
            <input type="email" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-6">
            <label for="inputAddress" class="form-label">
              Telefono
            </label>
            <input type="number" class="form-control" id="inputAddress" />
          </div>

          <div class="col-md-12">
            <label for="inputState" class="form-label">
              Seleccione un servicio
            </label>
            <select id="inputState" class="form-select">
              <option selected>Seleccione...</option>
              <option>Servicio de soporte técnico remoto</option>
              <option>
                Servicio de mantenimiento de computadores o portátiles
              </option>
              <option>Instalacion y licenciamiento de progrmas</option>
              <option>Venta de computadores y accesorios</option>
            </select>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Acepto política de privacidad
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-success">
              Solicitar Asesoria
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LlamadoAccion;
