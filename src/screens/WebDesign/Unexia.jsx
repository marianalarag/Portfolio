import "./unexia.css";

// Tus imágenes actuales
import unexia from "./img/unexia.png";
import landingUnexia from "./img/landing unexia.png";
import sobreUnexia from "./img/sobre unexia.png";
import contactoUnexia from "./img/contacto unexia.png";
import marcasUnexia from "./img/marcas unexia.png";
import htmlIcon from "./img/html.png";
import cssIcon from "./img/css.png";
import jsIcon from "./img/js.png";
import logoUnexia from "./img/logo unexia.png";

import line19 from "./img/Line 19.png";
import line20 from "./img/Line 20.png";
import line21 from "./img/Line 21.png";
import vector from "./img/vector.png";

export const Unexia = () => {
  return (
    <div className="unexia-slide">
      {/* Fondo principal */}
      <div className="unexia-rectangle" />

      {/* Fondo oscuro derecho */}
      <div className="unexia-div" />

      {/* Landing Page label */}
      <div className="unexia-landing-label">Landing Page</div>

      {/* Número 01 */}
      <div className="unexia-number">01</div>

      {/* Títulos */}
      <div className="unexia-title-une">UNE</div>
      <div className="unexia-title-x">X</div>
      <div className="unexia-title-ia">IA</div>

      {/* Líneas */}
      <div className="unexia-line-horizontal" />
      <div className="unexia-line-top-right" />
      <div className="unexia-line-bottom" />

      {/* Screenshots laterales */}
      <img
        className="unexia-image-sobre"
        src={sobreUnexia}
        alt="Sobre Unexia"
      />
      <img
        className="unexia-image-landing"
        src={landingUnexia}
        alt="Landing Unexia"
      />
      <img
        className="unexia-image-contacto"
        src={contactoUnexia}
        alt="Contacto Unexia"
      />
      <img
        className="unexia-image-marcas"
        src={marcasUnexia}
        alt="Marcas Unexia"
      />

      {/* Logo UNEXIA */}
      <img className="logo-unexia" src={logoUnexia} alt="Logo Unexia" />

      <img className="unexia-logo" src={logoUnexia} alt="Logo Unexia" />

      {/* TEXTO LARGO EN INGLÉS - COMO HTML */}
      <p className="unexia-text-large">
        <span className="unexia-letter-i">A</span>
        t the intersection of technology and business emerges UNEXIA, an
        ecosystem designed to break down the barriers of traditional education.
        This interface project does not merely aim to inform, but to inspire a
        new generation of leaders under the premise: 'Learn, Connect, and
        Empower.'
        <br />
        <br />
        The visual proposal favors a palette of deep violets and crisp whites,
        creating an atmosphere of modern professionalism that extends from its
        Virtual Campus to its network of strategic alliances with global giants.
      </p>

      {/* Descripción pequeña */}
      <p className="unexia-description">
        <span className="unexia-letter-i">I</span>
        <span className="unexia-description-text">
          t is an interface where usability meets aspiration, allowing the user
          to navigate frictionlessly between highly specialized programs and a
          vibrant community of exclusive benefits.
        </span>
      </p>

      {/* Iconos de tecnología */}
      <img className="unexia-icon-html" src={htmlIcon} alt="HTML" />
      <img className="unexia-icon-css" src={cssIcon} alt="CSS" />
      <img className="unexia-icon-js" src={jsIcon} alt="JS" />

      {/* Link al proyecto */}
      <a
        href="https://unexia.odoo.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="unexia-arrow-vector"
      >
        Ver más
      </a>
    </div>
  );
};
