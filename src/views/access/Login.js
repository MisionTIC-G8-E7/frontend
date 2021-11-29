import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

const Login = () => {
  return (
    <>
      <Menu />
      <div className="row justify-content-center align-items-center p-5 fondo12 text-white">
        <div
          className="col-12 col-md-5"
          style={{ background: "rgb(0,0,0,0.5)" }}
        >
          <h1 className="text-center">SOPORTE TÉCNICO</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            nam tempora modi, placeat ducimus rem, exercitationem pariatur vel
            temporibus illo magni asperiores consectetur distinctio itaque,
            optio eum deleniti omnis ullam! Facilis quidem non sed, id, rem
            beatae praesentium unde, commodi pariatur ullam sapiente iure! Odio
            omnis, reiciendis nostrum aliquid dignissimos rem distinctio facere
            fuga qui, doloribus porro. Asperiores, dicta culpa. Consectetur
            rerum cum temporibus tenetur, labore unde atque enim minus, ab
            repudiandae ullam vitae! Nisi provident esse facilis placeat
            dignissimos eligendi cupiditate numquam, quas ipsa aliquam ipsum
            illo unde necessitatibus?
          </p>
        </div>
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-6 ">
          {/* <img
            className="img-fluid pt-4"
            src="https://abamobile.com/web/wp-content/uploads/2020/02/Desarrollo-y-creacion-de-apps-495x400.png"
            alt=""
          /> */}
        </div>
      </div>
      {/* <div className="row p-5 justify-content-center fondoCard2 align-items-center">
        <h2 className="text-center">Nuestra experiencia en desarrollos</h2>
        <div className="col-md-12 col-lg-6">
          <img
            className="img-thumbnail"
            src="https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_960_720.png"
            alt=""
          />
        </div>
        <div className="col-md-12 col-lg-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            amet mollitia doloribus totam dicta consectetur, error vel quia
            repudiandae ad magni libero in repellendus officia. Accusamus
            praesentium quidem assumenda in. Praesentium magnam sunt tenetur
            quam consequatur. Similique ad fuga quam quidem, tempora ea. Labore,
            repudiandae sunt quisquam ullam, consequatur nesciunt dolore
            accusantium eius magni ipsam eligendi aperiam animi exercitationem
            soluta. Reiciendis cupiditate obcaecati repellendus, nisi aut
            possimus. Rem, facere illum amet ullam fugiat corporis obcaecati
            ipsam alias eius eum, quae veritatis totam perferendis. Nobis quia
            velit sed exercitationem quos soluta! Necessitatibus eligendi eos
            vitae laborum beatae, quidem optio sapiente rem quas repudiandae
            ullam quae iste possimus. Iure facere vitae, labore, aliquid
            pariatur ducimus ut, repellendus quia velit id quasi dignissimos.
          </p>
        </div>
      </div> */}
      <div className="row justify-content-center align-items-center bg-success p-5 h-auto">
        <div className="col-12 col-sm-6 text-white">
          <h3 className="fs-1">
            Logueate con tu cuenta y recibe soporte personalizado{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            architecto cupiditate id, facilis nobis dignissimos modi fugiat quod
            quasi neque quos provident? Quia, reprehenderit repudiandae. Alias
            nihil quasi obcaecati atque.
          </p>
        </div>
        <div className="col-12 col-sm-6 bg-secondary p-5 text-white">
          <form className="row g-3">
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="correo@email.com"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputPassword4" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </div>
            <div className="col-12 col-md-6">
              <Link className="text-white" to="/register">
                <p>Olvidé mi contraseña</p>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link className="text-white" to="/register">
                <p>Registrarse</p>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
