import databaseIcon from "./img/base datos.png";
import cardioLine from "./img/cardio.png";
import doctorBg from "./img/fondo doctor web.jpg";
import doctorRectangle from "./img/rectangulo doctor.png";
import doctorSymbol from "./img/logo doctor.png";
import doctorTitle from "./img/doctor title.png";
import phpIcon from "./img/php.png";

const descriptionText =
  "Simify streamlines clinical operations by centralizing patient management and scheduling into a unified, high-performance platform. Built with Laravel, the system features a robust, conflict-free booking engine and automated communications to eliminate administrative friction. Through secure role-based access and data-driven reporting, Simify delivers an efficient, scalable solution that modernizes the healthcare experience for both providers and patients.";

export const DoctorAppointment = () => {
  return (
    <article className="relative h-full w-full overflow-hidden bg-[#f2f0ec] text-[#1a1f33]">
      <h1 className="sr-only">Simify Medical Appointment System</h1>

      <img
        src={doctorBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[54%_50%]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#f2f0ec]/45" />

      <img
        src={doctorRectangle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5%] top-[2.5%] z-10 w-[72%] max-w-none object-contain opacity-90 drop-shadow-[0_18px_32px_rgba(1,58,141,0.08)] sm:left-[-3%] sm:top-[4%] sm:w-[64%] lg:left-[1.5%] lg:top-[5%] lg:w-[57%]"
      />

      <img
        src={doctorTitle}
        alt=""
        aria-hidden="true"
        className="absolute left-[4%] top-[4.2%] z-20 w-[82%] max-w-[43rem] object-contain sm:left-[4.8%] sm:top-[5.8%] sm:w-[48%] lg:left-[5%] lg:top-[6%] lg:w-[47.6%]"
      />

      <div className="absolute left-[62%] top-[8.6%] z-30 flex items-center gap-[0.32rem] sm:left-[53%] sm:top-[14.1%] lg:left-[62.8%] lg:top-[15.2%]">
        <img
          src={phpIcon}
          alt="PHP"
          className="h-[1.2rem] w-[1.2rem] object-contain sm:h-[1.9rem] sm:w-[1.9rem] lg:h-[2.4rem] lg:w-[2.4rem]"
        />

        <img
          src={databaseIcon}
          alt="Database"
          className="h-[1rem] w-[1rem] object-contain sm:h-[1.6rem] sm:w-[1.6rem] lg:h-[2rem] lg:w-[2rem]"
        />
      </div>

      <img
        src={cardioLine}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[69%] top-[3.6%] z-20 w-[66%] max-w-none object-contain sm:left-[55.5%] sm:top-[0.4%] sm:w-[54%] lg:left-[55.7%] lg:top-[-10%] lg:w-[49%]"
      />

      <p className="absolute left-[4.2%] top-[30.6%] z-20 w-[39%] max-w-[38rem] font-kurale text-[clamp(0.74rem,2.65vw,1.05rem)] leading-[1.45] text-[#1a1f33] sm:left-[5.4%] sm:top-[34.2%] sm:w-[42%] sm:text-[clamp(1rem,1.86vw,1.5rem)] lg:left-[5.5%] lg:top-[38.6%] lg:w-[41%] lg:text-[1.42rem]">
        {descriptionText}
      </p>

      <img
        src={doctorSymbol}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-27%] top-[31.5%] z-10 w-[70%] max-w-[45rem] object-contain drop-shadow-[0_18px_28px_rgba(0,64,136,0.12)] sm:right-[4%] sm:top-[36%] sm:w-[43%] lg:right-[10%] lg:top-[45.5%] lg:w-[20%]"
      />

      <a
        href="https://github.com/marianalarag/appointment-app2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver mas sobre Simify"
        className="absolute left-[9%] top-[87.2%] z-30 inline-flex h-[2.65rem] min-w-[7rem] items-center justify-center rounded-full bg-[#013a8d] px-[1.7rem] font-fraunces text-[0.95rem] font-normal text-white shadow-[0_10px_20px_rgba(1,58,141,0.22)] transition duration-200 hover:scale-105 hover:bg-[#074aa9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#013a8d] sm:left-[5.5%] sm:top-[84.6%] sm:h-[3.35rem] sm:min-w-[9.5rem] sm:text-[1.14rem] lg:left-[5.5%] lg:h-[3.95rem] lg:min-w-[11.3rem] lg:text-[1.35rem]"
      >
        Ver m&aacute;s
      </a>
    </article>
  );
};
