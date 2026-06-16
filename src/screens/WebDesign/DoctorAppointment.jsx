import "./doctor-appointment.css";

// Tus imágenes actuales de DOCTOR APPOINTMENT
import pacientesSimify from "./img/pacientes simify.png";
import horariosSimify from "./img/horarios simify.png";
import citaSimify from "./img/cita simify.png";
import phpIcon from "./img/php.png";

import line26 from "./img/Line 26.png";
import line29 from "./img/Line 29.png";
import line30 from "./img/Line 30.png";
import line31 from "./img/Line 31.png";
import vector from "./img/vector.png";

export const DoctorAppointment = () => {
  return (
    <div className="doctor-slide">
      {/* Fondo oscuro izquierdo */}
      <div className="doctor-bg-dark" />

      {/* Número 04 rotado */}
      <div className="doctor-number">04</div>

      {/* Líneas verticales */}
      <div className="doctor-line-vertical-top" />
      <div className="doctor-line-vertical-bottom" />

      {/* Letra D decorativa */}
      <div className="doctor-letter-d">D</div>

      {/* Título OCTOR */}
      <div className="doctor-title-octor">OCTOR</div>

      {/* Título appointment */}
      <div className="doctor-title-appointment">appointment</div>

      {/* Líneas bajo el título */}
      <div className="doctor-line-under-title-left" />
      <div className="doctor-line-under-title-right" />

      {/* Descripción principal */}
      <p className="doctor-description-main">
        <span className="doctor-letter-s">S</span>
        <span className="doctor-description-text">
          imify optimizes healthcare management by centralizing scheduling and
          communication. The platform bridges the gap between specialists and
          patients, ensuring a seamless, friction-free booking process for a
          modern, efficient clinical workflow.
        </span>
      </p>

      {/* Descripción técnica */}
      <p className="doctor-description-tech">
        Built with Laravel and Eloquent, Simify leverages a modular architecture
        to handle complex relational data. The platform implements sophisticated
        role-based access control, a secure booking engine that prevents
        double-scheduling, and integrated tools for automated reminders and
        clinical data analysis.
      </p>

      {/* Imágenes del proyecto */}
      <img
        className="doctor-image-pacientes"
        src={pacientesSimify}
        alt="Pacientes Simify"
      />
      <img className="doctor-image-cita" src={citaSimify} alt="Cita Simify" />
      <img
        className="doctor-image-horarios"
        src={horariosSimify}
        alt="Horarios Simify"
      />

      {/* Key Features título */}
      <div className="doctor-key-features-title">Key Features</div>

      {/* Key Features lista */}
      <p className="doctor-key-features-list">
        Role-Based Access Control: Secure management for patients, doctors, and
        admins.
        <br />
        Dynamic Scheduling Engine: Conflict-free slot management for doctors.
        <br />
        Automated Communication: Integrated email notifications for reminders
        and confirmations.
        <br />
        Data Reporting: Advanced exporting capabilities for clinical statistics
        and monthly trends.
        <br />
        Scalable Architecture: Built with Laravel for reliability and easy
        maintenance.
      </p>

      {/* Icono PHP */}
      <img className="doctor-icon-php" src={phpIcon} alt="PHP" />

      {/* Línea inferior */}
      <div className="doctor-line-bottom" />

      {/* Flecha SVG en lugar del vector */}
      <a
        href="https://github.com/marianalarag/appointment-app2"
        target="_blank"
        rel="noopener noreferrer"
        className="doctor-arrow-vector"
        onClick={(e) => e.stopPropagation()}
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
