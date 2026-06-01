import "./movie-catalogue.css";

// Tus imágenes actuales de MOVIE CATALOGUE
import homeCine from "./img/home cine.png";
import dulceriaCine from "./img/dulceria cine.png";
import react from "./img/react.png"; // Icono de React/JS

import line26 from "./img/Line 26.png";
import line29 from "./img/Line 29.png";
import vector from "./img/vector.png";

export const MovieCatalogue = () => {
  return (
    <div className="movie-catalogue-slide">
      {/* Fondo oscuro */}
      <div className="movie-bg-dark" />

      {/* Tarjeta clara */}
      <div className="movie-card-light" />

      {/* Número 03 */}
      <div className="movie-number">03</div>

      {/* Línea debajo del número */}
      <div className="movie-line-under-number" />

      {/* Texto "catalogue" rotado */}
      <div className="movie-catalogue-text">catalogue</div>

      {/* Letras MOVIE rotadas */}
      <div className="movie-letter-m">M</div>
      <div className="movie-letter-o">O</div>
      <div className="movie-letter-i">I</div>
      <div className="movie-letter-e">E</div>
      <div className="movie-letter-v">V</div>

      {/* Imágenes del proyecto */}
      <img className="movie-image-home" src={homeCine} alt="Home Cine" />
      <img
        className="movie-image-dulceria"
        src={dulceriaCine}
        alt="Dulcería Cine"
      />

      {/* Descripción izquierda */}
      <p className="movie-description-left">
        <span className="movie-letter-i-desc">I</span>
        <span className="movie-description-text">
          n an era of on-demand data consumption, the ability to manage
          information intuitively is a significant competitive advantage. The
          Movie Catalog project was conceived as a Single Page Application
          (SPA).
        </span>
      </p>

      {/* Descripción derecha */}
      <p className="movie-description-right">
        <span className="movie-letter-f">F</span>
        <span className="movie-description-text-small">
          rom a technical perspective, this catalog is a robust demonstration of
          implementing modern applications within the React ecosystem.
        </span>
      </p>

      {/* Icono de React/JS */}
      <img className="movie-icon-react" src={react} alt="React" />

      {/* LÍNEA INFERIOR - al lado del icono */}
      <div className="movie-line-bottom" />

      {/* Vector decorativo */}
      <img className="movie-vector" src={vector} alt="Vector" />

      {/* Flecha SVG */}
      <a
        href="https://github.com/marianalarag/Cine-UX-UI"
        target="_blank"
        rel="noopener noreferrer"
        className="movie-arrow"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a1f33"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>
    </div>
  );
};
