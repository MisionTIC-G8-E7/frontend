import { Link, NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="row bg-secondary">
        <div className="col-12 text-white fs-2">
          <p className="text-center"> ☎ 3141234245</p>
          <p className="text-center"> ✉ contacto@sopoteit.com</p>
        </div>
      </div>
      <div className="row bg-success">
        <header className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div>
                <Link className="navbar-brand fs-1 fw-bold" to="/">
                  SOPORTEIT
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>

              <div className="aling-items-end">
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav fw-bold">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link text-primary active"
                        aria-current="page"
                        to="/"
                      >
                        INICIO
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-primary" to="/nosotros">
                        NOSOTROS
                      </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link text-primary dropdown-toggle"
                        to="/"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        PORTAFOLIO
                      </NavLink>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <NavLink
                            className="nav-link text-primary dropdown"
                            to="/hardware-software"
                          >
                            Soporte Hardware y software
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="nav-link text-primary dropdown"
                            to="/mantenimiento-preventivo"
                          >
                            Mantenimiento Preventivo
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="nav-link text-primary dropdown"
                            to="/mantenimiento-computadores"
                          >
                            Mantenimiento de Computadores
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="nav-link text-primary dropdown"
                            to="/"
                          >
                            Licenciamiento de Software
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="nav-link text-primary dropdown"
                            to="/"
                          >
                            Cableado Estructurado
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="nav-link text-primary dropdown"
                            to="/"
                          >
                            Aplicaciones web y moviles
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-primary" to="/">
                        CANALES DE SOPORTE
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-primary " to="/">
                        CONTACTO
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
