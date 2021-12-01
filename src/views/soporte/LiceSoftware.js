import Footer from "../../components/Footer";
import LlamadoAccion from "../../components/LlamadoAccion";
import Menu from "../../components/Menu";

const LiceSoftware = () => {
  return (
    <>
      <Menu />
      <div className="row justify-content-center align-items-center p-5 fondo9 text-white h-auto">
        <div
          className="col-12 col-md-5"
          style={{ background: "rgb(0,0,0,0.5)" }}
        >
          <h1 className="text-center">
            Obtenga la protección, confiabilidad y rendimiento que usted espera
            de Windows original.
          </h1>
          <p>
            Entender si usted cuenta con la licencia apropiada para su software
            y copias originales de Windows instaladas puede significar la
            diferencia entre añadir un riesgo inesperado a su negocio o crear un
            valor original a través del rendimiento y la protección que usted
            espera.
          </p>
        </div>
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-6 ">
          <img
            className="img-fluid pt-4"
            src="https://i.postimg.cc/x1QCxmdX/windows-original.png"
            alt=""
          />
        </div>
      </div>
      <div className="row justify-content-center align-items-center p-5 fondoCard2 text-black h-auto">
        <div className="col-12 col-sm-1"></div>
        <div className="col-12 col-sm-10">
          <h2 className="fs-1 text-center">
            Soluciones de licenciamiento de Software
          </h2>
          <p>
            TEC-SERVICES puede asesorarlo en el software que su empresa pueda
            requerir, garantizando la autenticidad, y especificidad necesaria,
            asegurando su inversión. Nuestro servicio de inventario de software
            y hardware, nos permite conocer lo que tiene instalado en cada
            máquina, con sus correspondientes números de licencia, un ejemplo es
            el modelo OEM (Original Equipment Manufacturer) que se venden
            instalados en las computadoras nuevas. Por ser económicas, muchas
            empresas reutilizan esas licencias en otros equipos, entrando así en
            una conducta ilegal, dado que las licencias OEM son válidas única e
            exclusivamente si vienen pre – instaladas en máquinas nuevas.
            Nuestro servicio comprende también el asesoramiento para determinar
            la mejor manera de planear su inversión para obtener el mejor valor
            y rendimiento posible. Un error en su modelo de licenciamiento puede
            costar muy caro, inclusive su empresa puede sufrir severas multas y
            sanciones penales.
          </p>
          <h2>Nuestra Asesoría comprende:</h2>

          <br />
          <br />
          <ul>
            <li>
              Establecimiento de grupos de productos que permitan economizar la
              inversión de licencias.
            </li>
            <li>
              Estandarización de la plataforma de software de la empresa, al
              menor costo.
            </li>
            <li>
              Planeamiento de crecimiento asociado a nuevas adquisiciones de
              equipos.
            </li>
          </ul>
          <h2>Soluciones Open Source</h2>
          <p>
            Otra política de trabajo es adquirir software de código abierto
            también llamado "Open Source". Nuestros servicios "Open Source"
            están focalizados en ofrecer a su empresa servicios de capacitación,
            soporte e instalación de tecnologías de código abierto, tales como
          </p>
          <ul>
            <li>Linux</li>
            <li>Apache</li>
            <li>Samba</li>
            <li>MySQL</li>
            <li>Perl</li>
            <li>PHP</li>
            <li>PostgreSQL</li>
            <li>Mantis</li>
            <li>Nagios</li>
            <li>dotProject</li>
            <li>OpenLDAP</li>
            <li>Sendmail</li>
            <li>Tomcat</li>
          </ul>
          <p>
            Todos estos años de trabajo diario con tecnologías Open Source,
            analizamos centenares de soluciones y seleccionamos las que mejor se
            adaptan a las empresas. Estas soluciones ofrecen la misma
            funcionalidad que las soluciones comerciales licenciadas, pero
            presentan un costo que obedece a labores de capacitación. Como
            resultado, ofrecemos soluciones a un precio competitivo como así
            también nuestros conocimientos y experiencias, para que su empresa
            aproveche al máximo las ventajas del código abierto.
          </p>
        </div>
        <div className="col-12 col-sm-1"></div>
      </div>
      <div className="row justify-content-center align-items-center p-5 h-auto">
        <div className="col-12 col-sm-6 col-md-3">
          <img
            className="img-thumbnail"
            src="https://www.pcstoresoluciones.com/images/Image_PCS/windows-ms.png"
            alt=""
          />
          <h3 className="text-center">Microsoft Windows</h3>
          <p>
            Microsoft Windows ayuda a que los usuarios sean productivos en
            cualquier lugar, mejora la seguridad y el control, y agiliza la
            administración del PC.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <img
            className="img-thumbnail"
            src="https://www.pcstoresoluciones.com/images/Image_PCS/office.png"
            alt=""
          />
          <h3 className="text-center">Microsoft Office</h3>
          <p>
            Microsoft Office le permite crear documentos, hojas de cálculo, y
            presentaciones de manera rápida y sencilla, así como organizar su
            información en un solo lugar, permitiendo que sea más fácil hacer
            las cosas.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <img
            className="img-thumbnail"
            src="https://www.pcstoresoluciones.com/images/Image_PCS/sql-server.png"
            alt=""
          />
          <h3 className="text-center">Microsoft SQL Server</h3>
          <p>
            Microsoft SQL Server es un sistema de administración de bases de
            datos relacionales fiable, productivo, e inteligente que proporciona
            una plataforma de datos para que las organizaciones puedan
            administrar cualquier dato, donde quiera que estén.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <img
            className="img-thumbnail"
            src="https://www.pcstoresoluciones.com/images/Image_PCS/server.png"
            alt=""
          />
          <h3 className="text-center">Microsoft Windos Server</h3>
          <p>
            Windows Server permite a los profesionales de TI incrementar la
            fiabilidad y la flexibilidad de sus infraestructuras de servidor.
          </p>
        </div>
      </div>

      <LlamadoAccion />
      <Footer />
    </>
  );
};

export default LiceSoftware;
