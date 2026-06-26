import "./enerqon.css";

// Tus imágenes actuales de ENERQON
import homeEnerqon from "./img/home enerqon.png";
import paquetesEnerqon from "./img/paquetes enerqon.png";
import pagoEnerqon from "./img/pago enerqon.png";
import cotizadorEnerqon from "./img/cotizador enerqon.png";
import logoEnerqon from "./img/logo enerqon.png";
import htmlIcon from "./img/html.png";
import cssIcon from "./img/css.png";
import jsIcon from "./img/js.png";

import vector from "./img/vector.png";

export const Enerqon = () => {
  return (
    <div className="enerqon-slide">
      {/* Fondo claro */}
      <div className="enerqon-rectangle-light" />

      {/* Fondo oscuro izquierdo */}
      <div className="enerqon-div-dark" />

      {/* Landing Page label */}
      <div className="enerqon-landing-label">Landing Page</div>

      {/* Número 02 */}
      <div className="enerqon-number">02</div>

      {/* Letra E decorativa */}
      <div className="enerqon-letter-e">E</div>

      {/* Título NERQON */}
      <div className="enerqon-title-nerqon">NERQON</div>

      {/* Línea horizontal */}
      <div className="enerqon-line-horizontal" />

      {/* Imágenes del proyecto */}
      <img
        className="enerqon-image-home"
        src={homeEnerqon}
        alt="Home ENERQON"
      />
      <img
        className="enerqon-image-paquetes"
        src={paquetesEnerqon}
        alt="Paquetes ENERQON"
      />
      <img
        className="enerqon-image-pago"
        src={pagoEnerqon}
        alt="Pago ENERQON"
      />
      <img
        className="enerqon-image-cotizador"
        src={cotizadorEnerqon}
        alt="Cotizador ENERQON"
      />

      {/* Descripción izquierda (texto blanco sobre fondo oscuro) */}
      <p className="enerqon-description-left">
        <span className="enerqon-letter-t">T</span>
        <span className="enerqon-description-text">
          he challenge was to humanize the complexity of the energy sector. The
          site's architecture moves away from cold industrial aesthetics to
          focus entirely on the end-user experience. The design guides the
          visitor through a seamless three-step journey: quotation, credit, and
          installation—effectively eliminating both technical and emotional
          friction
        </span>
      </p>

      {/* Descripción derecha */}
      <p className="enerqon-description-right">
        <span className="enerqon-letter-t">T</span>
        <span className="enerqon-description-text">
          he interactive 'Savings Calculator' and the optimized payment flow are
          standout features, integrating minimalist design principles to
          maintain informational clarity without sacrificing visual impact.
        </span>
      </p>

      {/* Texto "Can solar energy..." */}
      <p className="enerqon-can-solar">
        <span>
          Can solar energy feel as agile as a cutting-edge application?
        </span>
        <br />
        <br />
        <span className="enerqon-can-solar-small">
          ENERQON proves that it can. This landing page and financial dashboard
          design combines a sleek 'Dark Mode' aesthetic with vibrant neon
          accents.
        </span>
      </p>

      {/* Logo ENERQON */}
      <img className="enerqon-logo" src={logoEnerqon} alt="Logo ENERQON" />

      {/* Líneas inferiores */}
      <div className="enerqon-line-bottom-left" />
      <div className="enerqon-line-bottom-right" />

      {/* Iconos de tecnología */}
      <img className="enerqon-icon-html" src={htmlIcon} alt="HTML" />
      <img className="enerqon-icon-css" src={cssIcon} alt="CSS" />
      <img className="enerqon-icon-js" src={jsIcon} alt="JS" />

      {/* Link al proyecto */}
      <a
        href="https://alan-cr2020-enerqon-main-24385807.dev.odoo.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="enerqon-arrow-vector"
      >
        Ver más
      </a>
    </div>
  );
};
