/** @format */

function Header() {
  return (
    <>
      {" "}
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
                <a className="navbar-brand fs-1 fw-bold" href="/">
                  SOPORTEIT
                </a>
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
                      <a
                        className="nav-link text-primary active"
                        aria-current="page"
                        href="/"
                      >
                        INICIO
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-primary" href="/">
                        NOSOTROS
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link text-primary dropdown-toggle"
                        href="/"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        PORTAFOLIO
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="/">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-primary" href="/">
                        CANALES DE SOPORTE
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-primary" href="/">
                        CONTACTO
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link text-primary"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
    </>
  );
}

export default Header;
