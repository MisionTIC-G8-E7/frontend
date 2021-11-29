import "../views/nosotros.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <>
      <Menu />
      <div className="row justify-content-center align-items-center p-5 fondo3 text-white">
        <div className="col-12">
          <h1>NOSOTROS</h1>
          <p>
            TEC-SERVICES ofrece soluciones de infraestructura completa de TI para una variedad de requisitos de datos y cargas de trabajo, lo que le permite acelerar la innovación, adaptarse a los requisitos en evolución y mantener el control de las operaciones de TI. Somos un equipo diverso con perspectivas únicas. Unido en nuestro propósito, nuestra estrategia y nuestra cultura. Impulsado por nuestra ambición y el poder de la tecnología para fomentar el progreso humano. Inquebrantable en el compromiso con la igualdad, la confianza y el apoyo mutuos.
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center p-5 fondoCard2 text-black">
        <div className="col-12 col-ms-12 col-md-6">
          <h2 className="fs-1">MISIÓN</h2>
          <p>
            Ayudar a empresas y personas a mantener funcionales todos los equipos hardware con sus respectivos software, para que éstas saquen todo su potencial mediante herramientas informáticas de software, así como proporcionar innovación en el sector
          </p>
        </div>
        <div className="col-12 col-ms-12 col-md-6">
          <img
            className="img-thumbnail"
            src="https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_960_720.jpg"
            alt="Misión"
          />
        </div>
      </div>
      <div className="row justify-content-center align-items-center p-5 text-black">
        <div className="col-12 col-ms-12 col-md-6">
          <img
            className="img-thumbnail"
            src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_960_720.jpg"
            alt="Visión"
          />
        </div>
        <div className="col-12 col-ms-12 col-md-6">
          <h2 className="fs-1">VISIÓN</h2>
          <p>
            Nos guía la visión del mundo donde queremos vivir.
            El propósito es Liderar. Es por eso que avanzar hacia la sustentabilidad, cultivar la inclusión, transformar vidas y mantener la ética y la privacidad se integran en todo lo que hacemos. Impulsados por una fuerza laboral que valora y celebra los diferentes orígenes, creamos soluciones que aprovechan y amplían de las formas más significativas el uso de la tecnología. Creemos en el poder de la tecnología para ayudar a resolver los desafíos sociales complejos, desde los servicios de salud hasta la educación y una economía digital.
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center p-5 text-black fondoCard2">
        <div className="col-12">
          <h3 className="text-center pb-4 fs-1">¿Cómo es nuestro trabajo?</h3>
          <p>
            El Compromiso con la transparencia y la responsabilidad, nos permite trabajamos juntos, y de forma individual, nuestras perspectivas únicas y pasión suscitan todas las ideas, conceptos y soluciones que creamos. Al aceptar las diferencias e invertir tiempo en la diversidad, nuestros líderes fomentan una cultura de la innovación y la inclusión que nos permite crear tecnología capaz de garantizar la accesibilidad generalizada y mejoras impactantes en la vida cotidiana.
          </p>
        </div>

        <div className="col-12">
          <h3 className="text-center pb-4 fs-1">
            ¿Cuál es nuestro valor agregado?
          </h3>
          <p>
            Nuestros valores y nuestra cultura nos diferencian.
            “Cómo ganamos” no es solo el nombre de nuestro código de conducta. Es un reflejo de los altos estándares que nos ponemos a nosotros mismos. Es la creencia colectiva de que el cambio tangible y positivo se puede alcanzar con la innovación y la acción. Nos fortalece el compromiso inquebrantable con la igualdad, la confianza y el apoyo mutuos. El propósito, la estrategia y la cultura de nuestra empresa nos impulsan para lograr lo imposible. Nuestro código nos guía.
          </p>
        </div>
        <div className="col-12">
          <img
            className="img-thumbnail rounded mx-auto d-block"
            src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_960_720.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row justify-content-center align-items-center p-5">
        <div className="col-12">
          <h3 className="fs-1 text-center">Nuestros Valores</h3>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed fs-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  HONESTIDAD
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  La honestidad es nuestro deber de entender la verdad y actuar de manera veraz, tanto en nuestras comunicaciones como en nuestra conducta. La honestidad no es solo un eslogan, es un principio fundamental y angular sobre el que se basa TEC-SERVICES.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed fs-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  RESPETO
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Es la capacidad para reconocer y valorar la posibilidad de encontrar en las personas diversidad de pensamiento, creencias y actitudes. Las empresas y las organizaciones necesitan funcionar bajo el paradigma del respeto. Esto significa dar valor a cada puesto de trabajo, al trabajo de todos y de cada uno de los miembros de la organización, a la función de cada uno, a dotar a cada persona de la remuneración que le corresponde.
                  Por eso en TEC-SERVICES estamos comprometidos con hacer esto una realidad
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree2">
                <button
                  className="accordion-button collapsed fs-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree2"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree2"
                >
                  SERIEDAD
                </button>
              </h2>
              <div
                id="flush-collapseThree2"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree2"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                Un aspecto positivo de la seriedad es la transparencia que la caracteriza: Por lo tanto, cuando decimos que una compañía procede con seriedad, nos referimos a que actúa de acuerdo a una serie de valores que incluyen el respeto por nuestros clientes, la garantía de calidad en sus productos y servicios y la legitimidad en el trato con sus competidores. Todo esto hace parte de la naturaleza de TEC-SERVICES.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button
                  className="accordion-button collapsed fs-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  COMPROMISO
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                Hoy en día, la necesidad de un compromiso efectivo y una buena participación de los empleados es mayor que nunca. Si las empresas no logran involucrar a los empleados, esto le llevará a resultados no deseados que hay que tratar de evitar a toda costa, incluyendo menores tasas de retención, menor productividad, mala comunicación, mala cultura en el lugar de trabajo, etc. Para TEC-SERVICES el grado en que un empleado se siente apasionado por su trabajo y, por lo tanto, se esfuerza conscientemente por alcanzar sus objetivos laborales, es lo que denominamos compromiso e involucración del empleado.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center fondo5">
        <div className="col-12">
          <h3 className="text-center text-white fs-1 fw-bold bg-dark">
            Nos gustaría conocerlo, agende una reunión sin compromiso
          </h3>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary mt-5 p-3 fs-1 " type="button">
              CONTACTAR AHORA
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
