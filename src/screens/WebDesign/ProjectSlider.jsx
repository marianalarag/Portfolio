import { useState } from "react";

// ── UNEXIA images ──────────────────────────────────────────────
import unexia from "./img/unexia.png";
import landingUnexia from "./img/landing unexia.png";
import sobreUnexia from "./img/sobre unexia.png";
import contactoUnexia from "./img/contacto unexia.png";
import marcasUnexia from "./img/marcas unexia.png";
import htmlIcon from "./img/html.png";
import cssIcon from "./img/css.png";
import jsIcon from "./img/js.png";

// ── ENERQON images ─────────────────────────────────────────────
import homeEnerqon from "./img/home enerqon.png";
import paquetesEnerqon from "./img/paquetes enerqon.png";
import pagoEnerqon from "./img/pago enerqon.png";
import cotizadorEnerqon from "./img/cotizador enerqon.png";
import logoEnerqon from "./img/logo enerqon.png";

// ── MOVIE CATALOGUE images ─────────────────────────────────────
import homeCine from "./img/home cine.png";
import dulceriaCine from "./img/dulceria cine.png";

// ── DOCTOR APPOINTMENT images ──────────────────────────────────
import pacientesSimify from "./img/pacientes simify.png";
import horariosSimify from "./img/horarios simify.png";
import citaSimify from "./img/cita simify.png";
import phpIcon from "./img/php.png";

// ─────────────────────────────────────────────────────────────────
// SLIDE 1 — UNEXIA
// ─────────────────────────────────────────────────────────────────
const SlideUnexia = ({ onNext }) => (
  <div
    style={{
      position: "relative",
      width: "1468px",
      height: "1228px",
      backgroundColor: "#f1efeb",
      overflow: "hidden",
    }}
  >
    {/* Dark right sidebar */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "1136px",
        width: "332px",
        height: "1228px",
        backgroundColor: "#1a1f33",
      }}
    />

    {/* 01 number */}
    <div
      style={{
        position: "absolute",
        top: "57px",
        left: "1183px",
        color: "#c2bdab",
        fontFamily: "Fraunces, Helvetica",
        fontSize: "200px",
        fontWeight: 400,
        letterSpacing: "8px",
        textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        transform: "rotate(-0.06deg)",
      }}
    >
      01
    </div>

    {/* Landing Page label */}
    <div
      style={{
        position: "absolute",
        top: "304px",
        left: "1152px",
        width: "277px",
        height: "190px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#c1bfbc",
        fontFamily: "Fraunces, Helvetica",
        fontSize: "48px",
        fontWeight: 400,
        textAlign: "center",
        textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
      }}
    >
      Landing Page
    </div>

    {/* Arrow link to UNEXIA */}
    <a
      href="https://unexia.odoo.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "absolute",
        bottom: "40px",
        right: "40px",
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="#1a1f33"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>

    {/* UNE */}
    <div
      style={{
        position: "absolute",
        top: "51px",
        left: "244px",
        color: "#1a1f33",
        fontFamily: "Fraunces, Helvetica",
        fontSize: "128px",
        fontWeight: 400,
        textAlign: "center",
        width: "717px",
      }}
    >
      UNE
    </div>

    {/* X */}
    <div
      style={{
        position: "absolute",
        top: "63px",
        left: "608px",
        color: "#1a1f33",
        fontFamily: "Pinyon Script, Helvetica",
        fontSize: "230px",
        fontWeight: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "192px",
        width: "324px",
        whiteSpace: "nowrap",
      }}
    >
      X
    </div>

    {/* XIA */}
    <div
      style={{
        position: "absolute",
        top: "57px",
        left: "615px",
        color: "#1a1f33",
        fontFamily: "Fraunces, Helvetica",
        fontSize: "128px",
        fontWeight: 400,
        textAlign: "center",
        width: "717px",
      }}
    >
      XIA
    </div>

    {/* Horizontal line */}
    <div
      style={{
        position: "absolute",
        top: "246px",
        left: "465px",
        width: "673px",
        height: "4px",
        backgroundColor: "#1a1f33",
        transform: "rotate(0.2deg)",
      }}
    />

    {/* Short line top right */}
    <div
      style={{
        position: "absolute",
        top: "277px",
        left: "1220px",
        width: "223px",
        height: "2px",
        backgroundColor: "#c2bdab",
      }}
    />

    {/* UNEXIA description image */}
    <img
      style={{
        position: "absolute",
        top: "306px",
        left: "461px",
        width: "385px",
        height: "266px",
        objectFit: "cover",
      }}
      alt="En la interseccion"
      src={unexia}
    />

    {/* Left screenshots */}
    <img
      style={{
        position: "absolute",
        top: "159px",
        left: "54px",
        width: "357px",
        height: "366px",
      }}
      alt="Image"
      src={sobreUnexia}
    />

    <img
      style={{
        position: "absolute",
        top: "609px",
        left: "459px",
        width: "399px",
        height: "480px",
        objectFit: "cover",
      }}
      alt="Image"
      src={contactoUnexia}
    />

    <img
      style={{
        position: "absolute",
        top: "1010px",
        left: "54px",
        width: "358px",
        height: "143px",
        objectFit: "cover",
      }}
      alt="Image"
      src={marcasUnexia}
    />

    {/* Captura screenshot */}
    <img
      style={{
        position: "absolute",
        top: "302px",
        left: "835px",
        width: "385px",
        height: "333px",
        objectFit: "cover",
      }}
      alt="Captura"
      src={landingUnexia}
    />

    {/* Small image */}
    <img
      style={{
        position: "absolute",
        top: "518px",
        left: "44px",
        width: "358px",
        height: "427px",
        objectFit: "cover",
      }}
      alt="Image"
      src={landingUnexia}
    />

    {/* Right description text */}
    <p
      style={{
        position: "absolute",
        top: "710px",
        left: "890px",
        width: "212px",
        color: "#1a1f33",
        fontFamily: "Pinyon Script, Helvetica",
        fontSize: "32px",
        fontWeight: 400,
        textAlign: "right",
      }}
    >
      <span style={{ fontFamily: "Pinyon Script, Helvetica" }}>E</span>
      <span style={{ fontFamily: "Kurale, Helvetica", fontSize: "20px" }}>
        s una interfaz donde la usabilidad se encuentra con la aspiración,
        permitiendo que el usuario navegue sin fricciones entre programas de
        alta especialización y una comunidad vibrante de beneficios exclusivos.
      </span>
    </p>

    {/* Bottom line */}
    <div
      style={{
        position: "absolute",
        bottom: "57px",
        left: "766px",
        width: "370px",
        height: "2px",
        backgroundColor: "#1a1f33",
      }}
    />

    {/* Tech icons */}
    <img
      style={{
        position: "absolute",
        top: "1139px",
        left: "575px",
        width: "60px",
        height: "60px",
        objectFit: "cover",
      }}
      alt="HTML"
      src={htmlIcon}
    />
    <img
      style={{
        position: "absolute",
        top: "1139px",
        left: "635px",
        width: "60px",
        height: "60px",
        objectFit: "cover",
      }}
      alt="CSS"
      src={cssIcon}
    />
    <img
      style={{
        position: "absolute",
        top: "1139px",
        left: "695px",
        width: "60px",
        height: "60px",
        objectFit: "cover",
      }}
      alt="JS"
      src={jsIcon}
    />

    {/* Next arrow button */}
    <button
      onClick={onNext}
      style={{
        position: "absolute",
        top: "50%",
        right: "350px",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        cursor: "pointer",
        zIndex: 20,
      }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" stroke="#1a1f33" strokeWidth="1.5" />
        <path
          d="M20 16l8 8-8 8"
          stroke="#1a1f33"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);

// ─────────────────────────────────────────────────────────────────
// SLIDE 2 — ENERQON
// ─────────────────────────────────────────────────────────────────
const SlideEnerqon = ({ onNext, onPrev }) => (
  <div
    style={{
      position: "relative",
      width: "1482px",
      height: "1228px",
      overflow: "hidden",
    }}
  >
    {/* Light background */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "26px",
        width: "1429px",
        height: "1228px",
        backgroundColor: "#f1efeb",
      }}
    />
    {/* Dark left sidebar */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "8px",
        width: "681px",
        height: "1228px",
        backgroundColor: "#1a1f33",
      }}
    />

    {/* Landing Page label */}
    <div
      style={{
        position: "absolute",
        top: "828px",
        left: "8px",
        width: "277px",
        height: "190px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#c1bfbc",
        fontFamily: "Fraunces, Helvetica",
        fontSize: "48px",
        fontWeight: 400,
        textAlign: "center",
        textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
      }}
    >
      Landing Page
    </div>

    {/* 02 number */}
    <div
      style={{
        position: "absolute",
        top: "1000px",
        left: "1px",
        color: "#c2bdab",
        fontFamily: "Fraunces, Helvetica",
        fontSize: "200px",
        fontWeight: 400,
        letterSpacing: "8px",
        textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        transform: "rotate(-0.06deg)",
      }}
    >
      02
    </div>

    {/* E */}
    <div
      style={{
        position: "absolute",
        top: "92px",
        left: "600px",
        color: "#1a1f33",
        fontFamily: "Pinyon Script, Helvetica",
        fontSize: "230px",
        fontWeight: 400,
        height: "192px",
        width: "324px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      E
    </div>

    {/* NERQON */}
    <div
      style={{
        position: "absolute",
        top: "119px",
        left: "706px",
        color: "#1a1f33",
        fontFamily: "Fraunces, Helvetica",
        fontSize: "124px",
        fontWeight: 400,
        textAlign: "center",
        width: "717px",
      }}
    >
      NERQON
    </div>

    {/* Horizontal line */}
    <div
      style={{
        position: "absolute",
        top: "259px",
        left: "689px",
        width: "658px",
        height: "2px",
        backgroundColor: "#1a1f33",
      }}
    />

    {/* Images */}
    <img
      style={{
        position: "absolute",
        top: "67px",
        left: "72px",
        width: "331px",
        height: "352px",
        objectFit: "cover",
      }}
      alt="Image"
      src={homeEnerqon}
    />
    <img
      style={{
        position: "absolute",
        top: "443px",
        left: "72px",
        width: "596px",
        height: "378px",
      }}
      alt="Image"
      src={paquetesEnerqon}
    />
    <img
      style={{
        position: "absolute",
        top: "677px",
        left: "892px",
        width: "542px",
        height: "380px",
        objectFit: "cover",
      }}
      alt="Image"
      src={pagoEnerqon}
    />
    <img
      style={{
        position: "absolute",
        top: "295px",
        left: "713px",
        width: "456px",
        height: "316px",
        objectFit: "cover",
      }}
      alt="Image"
      src={cotizadorEnerqon}
    />

    {/* Description left (white text on dark) */}
    <p
      style={{
        position: "absolute",
        top: "88px",
        left: "418px",
        width: "250px",
        color: "#f2f0ec",
        fontFamily: "Pinyon Script, Helvetica",
        fontSize: "32px",
        fontWeight: 400,
        textAlign: "right",
      }}
    >
      <span>T</span>
      <span style={{ fontFamily: "Kurale, Helvetica", fontSize: "16px" }}>
        he challenge behind ENERQON was to humanize the complexity of the energy
        sector. The site's architecture moves away from cold industrial
        aesthetics to focus entirely on the end-user experience. Through a
        meticulously planned user flow, the design guides the visitor through a
        seamless three-step journey: quotation, credit, and
        installation—effectively eliminating both technical and emotional
        friction
      </span>
    </p>

    {/* Description right */}
    <p
      style={{
        position: "absolute",
        top: "305px",
        left: "1179px",
        width: "250px",
        color: "#1a1f33",
        fontFamily: "Pinyon Script, Helvetica",
        fontSize: "32px",
        fontWeight: 400,
        textAlign: "right",
      }}
    >
      <span>T</span>
      <span style={{ fontFamily: "Kurale, Helvetica", fontSize: "16px" }}>
        he interactive 'Savings Calculator' and the optimized payment flow are
        standout features, integrating minimalist design principles to maintain
        informational clarity without sacrificing visual impact.
      </span>
    </p>

    {/* Can solar energy */}
    <p
      style={{
        position: "absolute",
        top: "674px",
        left: "713px",
        width: "161px",
        color: "#1a1f33",
        fontFamily: "Kurale, Helvetica",
        fontSize: "20px",
        fontWeight: 400,
      }}
    >
      <span>Can solar energy feel as agile as a cutting-edge application?</span>
      <br />
      <br />
      <span style={{ fontSize: "16px" }}>
        ENERQON proves that it can. This landing page and financial dashboard
        design combines a sleek 'Dark Mode' aesthetic with vibrant neon accents.
      </span>
    </p>

    {/* LOGOTIPO */}
    <img
      style={{
        position: "absolute",
        top: "888px",
        left: "576px",
        width: "92px",
        height: "322px",
      }}
      alt="Logotipo ENERQON"
      src={logoEnerqon}
    />

    {/* Bottom line */}
    <div
      style={{
        position: "absolute",
        top: "1022px",
        left: "27px",
        width: "239px",
        height: "2px",
        backgroundColor: "#1a1f33",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "1152px",
        left: "1078px",
        width: "370px",
        height: "2px",
        backgroundColor: "#1a1f33",
      }}
    />

    {/* Tech icons */}
    <img
      style={{
        position: "absolute",
        top: "1124px",
        left: "892px",
        width: "60px",
        height: "60px",
        objectFit: "cover",
      }}
      alt="HTML"
      src={htmlIcon}
    />
    <img
      style={{
        position: "absolute",
        top: "1124px",
        left: "952px",
        width: "60px",
        height: "60px",
        objectFit: "cover",
      }}
      alt="CSS"
      src={cssIcon}
    />
    <img
      style={{
        position: "absolute",
        top: "1124px",
        left: "1012px",
        width: "60px",
        height: "60px",
        objectFit: "cover",
      }}
      alt="JS"
      src={jsIcon}
    />

    {/* Arrow link */}
    <a
      href="https://enerqon.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "absolute",
        bottom: "40px",
        right: "40px",
        zIndex: 10,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="#1a1f33"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>

    {/* Prev / Next buttons */}
    <button
      onClick={onPrev}
      style={{
        position: "absolute",
        top: "50%",
        left: "700px",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        cursor: "pointer",
        zIndex: 20,
      }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" stroke="#f2f0ec" strokeWidth="1.5" />
        <path
          d="M28 16l-8 8 8 8"
          stroke="#f2f0ec"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <button
      onClick={onNext}
      style={{
        position: "absolute",
        top: "50%",
        right: "40px",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        cursor: "pointer",
        zIndex: 20,
      }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" stroke="#1a1f33" strokeWidth="1.5" />
        <path
          d="M20 16l8 8-8 8"
          stroke="#1a1f33"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);

// ─────────────────────────────────────────────────────────────────
// SLIDE 3 — MOVIE CATALOGUE
// ─────────────────────────────────────────────────────────────────
const SlideMovieCatalogue = ({ onNext, onPrev }) => (
  <div
    style={{
      position: "relative",
      width: "1683px",
      height: "1228px",
      overflow: "hidden",
    }}
  >
    {/* Dark background */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "27px",
        width: "1629px",
        height: "1228px",
        backgroundColor: "#1a1f33",
      }}
    />
    {/* Light card */}
    <div
      style={{
        position: "absolute",
        top: "34px",
        left: "60px",
        width: "944px",
        height: "1153px",
        backgroundColor: "#f2f0ec",
      }}
    />

    {/* 03 */}
    <div
      style={{
        position: "absolute",
        top: "1025px",
        left: "993px",
        color: "#c2bdab",
        fontFamily: "Fraunces, Helvetica",
        fontSize: "200px",
        fontWeight: 400,
        letterSpacing: "8px",
        textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        whiteSpace: "nowrap",
      }}
    >
      03
    </div>

    {/* "catalogue" rotated */}
    <div
      style={{
        position: "absolute",
        top: "476px",
        left: "1135px",
        color: "#f2f0ec",
        fontFamily: "Pinyon Script, Helvetica",
        fontSize: "120px",
        fontWeight: 400,
        transform: "rotate(-90deg)",
        whiteSpace: "nowrap",
        width: "833px",
      }}
    >
      catalogue
    </div>

    {/* MOVIE letters rotated */}
    {[
      { char: "E", top: "835px", left: "1479px", rotate: "-139.03deg" },
      { char: "O", top: "527px", left: "1278px", rotate: "-106.11deg" },
      { char: "I", top: "135px", left: "1278px", rotate: "-41.06deg" },
      { char: "E", top: "29px", left: "1479px", rotate: "-24.82deg" },
      { char: "V", top: "374px", left: "1176px", rotate: "-75.25deg" },
    ].map((l, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          top: l.top,
          left: l.left,
          color: "#f2f0ec",
          fontFamily: "Fraunces, Helvetica",
          fontSize: "200px",
          fontWeight: 400,
          transform: `rotate(${l.rotate})`,
          whiteSpace: "nowrap",
        }}
      >
        {l.char}
      </div>
    ))}

    {/* Images */}
    <img
      style={{
        position: "absolute",
        top: "76px",
        left: "89px",
        width: "527px",
        height: "566px",
        objectFit: "cover",
      }}
      alt="Movie catalogue 1"
      src={homeCine}
    />
    <img
      style={{
        position: "absolute",
        top: "677px",
        left: "435px",
        width: "546px",
        height: "324px",
        objectFit: "cover",
      }}
      alt="Movie catalogue 2"
      src={dulceriaCine}
    />

    {/* Description */}
    <p
      style={{
        position: "absolute",
        top: "144px",
        left: "669px",
        width: "286px",
        color: "#1a1f33",
        fontFamily: "Kurale, Helvetica",
        fontSize: "24px",
        fontWeight: 400,
        textAlign: "right",
      }}
    >
      <span>I</span>
      <span style={{ fontSize: "18px" }}>
        n an era of on-demand data consumption, the ability to manage
        information intuitively is a significant competitive advantage. The
        Movie Catalog project was conceived as a Single Page Application (SPA).
      </span>
    </p>

    <p
      style={{
        position: "absolute",
        top: "677px",
        left: "89px",
        width: "322px",
        color: "#1a1f33",
        fontFamily: "Pinyon Script, Helvetica",
        fontSize: "32px",
        fontWeight: 400,
      }}
    >
      <span>F</span>
      <span style={{ fontFamily: "Kurale, Helvetica", fontSize: "18px" }}>
        rom a technical perspective, this catalog is a robust demonstration of
        implementing modern applications within the React ecosystem.
      </span>
    </p>

    {/* React icon */}
    <img
      style={{
        position: "absolute",
        top: "1114px",
        left: "556px",
        width: "60px",
        height: "55px",
        objectFit: "cover",
      }}
      alt="React"
      src={jsIcon}
    />

    {/* Line */}
    <div
      style={{
        position: "absolute",
        top: "1140px",
        left: "634px",
        width: "370px",
        height: "2px",
        backgroundColor: "#f2f0ec",
      }}
    />

    {/* Arrow */}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "absolute",
        bottom: "40px",
        right: "40px",
        zIndex: 10,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="#f2f0ec"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>

    {/* Prev / Next */}
    <button
      onClick={onPrev}
      style={{
        position: "absolute",
        top: "50%",
        left: "1000px",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        cursor: "pointer",
        zIndex: 20,
      }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" stroke="#f2f0ec" strokeWidth="1.5" />
        <path
          d="M28 16l-8 8 8 8"
          stroke="#f2f0ec"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <button
      onClick={onNext}
      style={{
        position: "absolute",
        top: "50%",
        right: "40px",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        cursor: "pointer",
        zIndex: 20,
      }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" stroke="#f2f0ec" strokeWidth="1.5" />
        <path
          d="M20 16l8 8-8 8"
          stroke="#f2f0ec"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);

// ─────────────────────────────────────────────────────────────────
// SLIDE 4 — DOCTOR APPOINTMENT
// ─────────────────────────────────────────────────────────────────
const SlideDoctorAppointment = ({ onPrev }) => (
  <div
    style={{
      position: "relative",
      width: "1631px",
      height: "1228px",
      backgroundColor: "#f2f0ec",
      overflow: "hidden",
    }}
  >
    {/* Dark left bar */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "366px",
        height: "1228px",
        backgroundColor: "#1a1f33",
      }}
    />

    {/* 04 rotated */}
    <div
      style={{
        position: "absolute",
        top: "481px",
        left: "-70px",
        color: "#c2bdab",
        fontFamily: "Fraunces, Helvetica",
        fontSize: "200px",
        fontWeight: 400,
        letterSpacing: "8px",
        textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        transform: "rotate(89.32deg)",
        width: "293px",
      }}
    >
      04
    </div>

    {/* Vertical lines */}
    <div
      style={{
        position: "absolute",
        top: "51px",
        left: "76px",
        width: "2px",
        height: "391px",
        backgroundColor: "#c2bdab",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "753px",
        left: "76px",
        width: "2px",
        height: "391px",
        backgroundColor: "#c2bdab",
      }}
    />

    {/* D */}
    <div
      style={{
        position: "absolute",
        top: "51px",
        left: "308px",
        color: "#1a1f33",
        fontFamily: "Pinyon Script, Helvetica",
        fontSize: "230px",
        fontWeight: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "192px",
        width: "324px",
      }}
    >
      D
    </div>

    {/* OCTOR */}
    <div
      style={{
        position: "absolute",
        top: "81px",
        left: "414px",
        color: "#1a1f33",
        fontFamily: "Fraunces, Helvetica",
        fontSize: "124px",
        fontWeight: 400,
        textAlign: "center",
        width: "717px",
      }}
    >
      OCTOR
    </div>

    {/* appointment */}
    <div
      style={{
        position: "absolute",
        top: "89px",
        left: "849px",
        color: "#1a1f33",
        fontFamily: "Pinyon Script, Helvetica",
        fontSize: "120px",
        fontWeight: 400,
        whiteSpace: "nowrap",
        transform: "rotate(-0.19deg)",
      }}
    >
      appointment
    </div>

    {/* Lines under title */}
    <div
      style={{
        position: "absolute",
        top: "232px",
        left: "565px",
        width: "415px",
        height: "2px",
        backgroundColor: "#1a1f33",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "232px",
        left: "1106px",
        width: "415px",
        height: "2px",
        backgroundColor: "#1a1f33",
      }}
    />

    {/* Description */}
    <p
      style={{
        position: "absolute",
        top: "280px",
        left: "418px",
        width: "613px",
        color: "#1a1f33",
        fontFamily: "Kurale, Helvetica",
        fontSize: "24px",
        fontWeight: 400,
      }}
    >
      <span>S</span>
      <span style={{ fontSize: "18px" }}>
        imify optimizes healthcare management by centralizing scheduling and
        communication. The platform bridges the gap between specialists and
        patients, ensuring a seamless, friction-free booking process for a
        modern, efficient clinical workflow.
      </span>
    </p>

    <p
      style={{
        position: "absolute",
        top: "265px",
        left: "1049px",
        width: "529px",
        color: "#1a1f33",
        fontFamily: "Kurale, Helvetica",
        fontSize: "18px",
        fontWeight: 400,
        textAlign: "right",
      }}
    >
      Built with Laravel and Eloquent, Simify leverages a modular architecture
      to handle complex relational data. The platform implements sophisticated
      role-based access control, a secure booking engine that prevents
      double-scheduling, and integrated tools for automated reminders and
      clinical data analysis.
    </p>

    {/* Images */}
    <img
      style={{
        position: "absolute",
        top: "432px",
        left: "418px",
        width: "609px",
        height: "298px",
        objectFit: "cover",
      }}
      alt="Doctor 1"
      src={pacientesSimify}
    />
    <img
      style={{
        position: "absolute",
        top: "427px",
        left: "1049px",
        width: "535px",
        height: "326px",
        objectFit: "cover",
      }}
      alt="Doctor 2"
      src={citaSimify}
    />
    <img
      style={{
        position: "absolute",
        top: "780px",
        left: "418px",
        width: "654px",
        height: "320px",
        objectFit: "cover",
      }}
      alt="Doctor 3"
      src={horariosSimify}
    />

    {/* Key features */}
    <div
      style={{
        position: "absolute",
        top: "796px",
        left: "1103px",
        color: "#1a1f33",
        fontFamily: "Kurale, Helvetica",
        fontSize: "24px",
        fontWeight: 400,
      }}
    >
      Key Features
    </div>
    <p
      style={{
        position: "absolute",
        top: "844px",
        left: "1103px",
        width: "475px",
        color: "#1a1f33",
        fontFamily: "Kurale, Helvetica",
        fontSize: "16px",
        fontWeight: 400,
      }}
    >
      Role-Based Access Control: Secure management for patients, doctors, and
      admins.
      <br />
      Dynamic Scheduling Engine: Conflict-free slot management for doctors.
      <br />
      Automated Communication: Integrated email notifications for reminders and
      confirmations.
      <br />
      Data Reporting: Advanced exporting capabilities for clinical statistics
      and monthly trends.
      <br />
      Scalable Architecture: Built with Laravel for reliability and easy
      maintenance.
    </p>

    {/* PHP icon */}
    <img
      style={{
        position: "absolute",
        top: "1151px",
        left: "1163px",
        width: "60px",
        height: "37px",
      }}
      alt="PHP"
      src={phpIcon}
    />

    {/* Bottom line */}
    <div
      style={{
        position: "absolute",
        top: "1168px",
        left: "1258px",
        width: "370px",
        height: "2px",
        backgroundColor: "#1a1f33",
      }}
    />

    {/* Arrow */}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "absolute",
        bottom: "40px",
        right: "40px",
        zIndex: 10,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="#1a1f33"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>

    {/* Prev button */}
    <button
      onClick={onPrev}
      style={{
        position: "absolute",
        top: "50%",
        left: "380px",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        cursor: "pointer",
        zIndex: 20,
      }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" stroke="#1a1f33" strokeWidth="1.5" />
        <path
          d="M28 16l-8 8 8 8"
          stroke="#1a1f33"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);

// ─────────────────────────────────────────────────────────────────
// MAIN SLIDER
// ─────────────────────────────────────────────────────────────────
export const ProjectSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = 4;

  const next = () => setCurrent((c) => Math.min(c + 1, total - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <div
      style={{
        position: "relative",
        width: "1440px",
        overflow: "hidden",
      }}
    >
      {/* Slides container */}
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: `translateX(-${current * 1440}px)`,
          width: `${total * 1440}px`,
        }}
      >
        <div style={{ width: "1440px", flexShrink: 0 }}>
          <SlideUnexia onNext={next} />
        </div>
        <div style={{ width: "1440px", flexShrink: 0 }}>
          <SlideEnerqon onNext={next} onPrev={prev} />
        </div>
        <div style={{ width: "1440px", flexShrink: 0 }}>
          <SlideMovieCatalogue onNext={next} onPrev={prev} />
        </div>
        <div style={{ width: "1440px", flexShrink: 0 }}>
          <SlideDoctorAppointment onPrev={prev} />
        </div>
      </div>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 30,
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "1px solid #1a1f33",
              backgroundColor: i === current ? "#1a1f33" : "transparent",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};
