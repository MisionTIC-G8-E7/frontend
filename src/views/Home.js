import Card from "../components/Card";
import Card2 from "../components/Card2";
import "../views/home.css";

export default function Home(props) {
  return (
    <>
      {/* HEADER */}{" "}
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
                      <a className="nav-link text-primary" href="/nosotros">
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
      {/* SECTION 2 */}
      <div className="row fondo"></div>
      {/* SECTION 3 */}
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
            preventivo del software instalado en sus equipos para que los
            mantenga en buen estado, funcionando de la mejor manera y rindiendo
            al 100%.
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card
            titulo="Mantenimiento Preventivo"
            imagen="https://destinonegocio.com/wp-content/uploads/2018/07/mantenimiento1.jpg"
          >
            Realizamos mantenimiento preventivo y correctivo a sus computadores
            ya sean de escritorio o portátiles de cualquier marca. Mantener sus
            equipos en buen estado mejora el rendimiento, tan del software como
            del hardware, de los mismos.
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card
            titulo="Tienda"
            imagen="https://hacemoscontactos.files.wordpress.com/2018/12/online-shop-2.png"
          >
            Tenemos todos los accesorios para su computador: teclados,
            monitores, mouses, discos duros, memorias USB y SD, toda clase de
            cables, repetidores, audífonos, etc.
          </Card>
        </div>
      </div>
      {/* SECTION 4 */}
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
      {/* SECTION 5 */}
      <div className="row justify-content-center align-items-center m-3">
        <div className="col-12 col-sm-4 fw-bold">
          <h3 className="fs-2">SOPORTE IT</h3>
          <p>Dirección: Avenida 1 N° 25-08 </p>
          <p>Teléfonos: 314 123 4245 </p>
          <p>Correos: contacto@sopoteit.com </p>
        </div>
        <div className="col-12 col-sm-4 fw-bold">
          <h3 className="fs-2">SÍGANOS</h3>
          <p>Facebook </p>
          <p>Twitter </p>
          <p>Instagram</p>
        </div>
        <div className="col-12 col-sm-4 fw-bold">
          <p className="bg-secondary fs-1 text-center text-white">
            ¿En qué podemos ayudarte?
          </p>
        </div>
      </div>
    </>
  );
}
