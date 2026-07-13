import bgEnerqon from "./img/enerqon fondo.png";
import logoEnerqon from "./img/Enerqon Logo.png";
import symbolEnerqon from "./img/logo azul enerqon.png";
import panelSolar from "./img/panel solar.png";
import htmlIcon from "./img/html.png";
import cssIcon from "./img/css.png";
import jsIcon from "./img/js.png";

const projectText =
  'The challenge behind ENERQON was to humanize the energy sector by moving away from industrial coldness toward a user-centric digital architecture. We streamlined the customer journey into three fluid steps, effectively removing technical and emotional barriers. Key features, such as our interactive "Savings Calculator" and optimized payment flow, prioritize clarity without sacrificing visual impact. This project demonstrates how strategic product design acts as a primary driver for technology adoption in emerging markets like the Mexican Southeast.';

const icons = [
  [htmlIcon, "HTML"],
  [cssIcon, "CSS"],
  [jsIcon, "JavaScript"],
];

export const Enerqon = () => {
  return (
    <article className="project-card project-card--enerqon relative h-full w-full overflow-hidden bg-[#101729] text-white">
      <img
        src={bgEnerqon}
        alt=""
        aria-hidden="true"
        className="project-bg absolute inset-0 h-full w-full object-cover opacity-45 saturate-[0.85]"
      />
      <div className="absolute inset-0 bg-[#101729]/68" />
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_78%_34%,rgba(1,63,208,0.26),transparent_30%),linear-gradient(110deg,rgba(11,17,35,0.96)_0%,rgba(12,18,36,0.86)_48%,rgba(9,21,48,0.72)_100%)]" />

      <header className="project-header absolute left-[3.2%] right-[8.2%] top-[6.8%] z-20 flex items-center gap-[4vw] sm:left-[2%] sm:right-[4%] sm:top-[6.2%]">
        <img
          src={logoEnerqon}
          alt="ENERQON"
          className="project-logo h-auto w-[58%] max-w-[880px] object-contain sm:w-[66%] md:w-[62%] lg:ml-[5%]"
        />
        <div className="hidden h-px flex-1 bg-[#00ff41] sm:block" />
        <div className="ml-auto flex items-center gap-[0.65rem] sm:gap-[0.85rem]">
          {icons.map(([src, alt]) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="h-[1.7rem] w-[1.7rem] object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] sm:h-[2.25rem] sm:w-[2.25rem] lg:h-[3rem] lg:w-[3rem]"
            />
          ))}
        </div>
      </header>

      <div className="project-copy absolute left-[4.2%] top-[18.5%] z-30 box-border flex max-h-[68%] w-[56%] max-w-[36rem] min-w-0 flex-col items-start overflow-hidden rounded-[0.35rem] bg-[#101729]/24 p-[0.15rem] sm:left-[3.2%] sm:top-[24%] sm:w-[43%] sm:bg-transparent sm:p-0 md:top-[23%] lg:left-[10%] lg:top-[24%] lg:w-[35%]">
        <h1 className="sr-only">ENERQON case study</h1>
        <p className="project-text max-h-[55svh] overflow-hidden font-kurale text-[clamp(0.68rem,2.2vw,0.98rem)] leading-[1.33] tracking-[-0.01em] text-white sm:max-h-none sm:text-[clamp(0.86rem,1.65vw,1.25rem)] lg:text-[1.55rem]">
          {projectText}
        </p>

        <a
          href="https://alan-cr2020-enerqon-main-24385807.dev.odoo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-cta mt-[1.05rem] inline-flex h-[2.65rem] min-w-[7.6rem] shrink-0 items-center justify-center rounded-full bg-[#013fd0] px-[1.8rem] font-fraunces text-[0.92rem] font-semibold text-[#00ff41] transition duration-200 hover:scale-105 hover:bg-[#064be8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ff41] sm:mt-[1.65rem] sm:h-[3.35rem] sm:min-w-[9.8rem] sm:text-[1.08rem] lg:mt-[2rem] lg:h-[4rem] lg:min-w-[12rem] lg:text-[1.28rem]"
        >
          Ver m&aacute;s
        </a>
      </div>

      <img
        src={symbolEnerqon}
        alt=""
        aria-hidden="true"
        className="project-symbol absolute right-[-36%] top-[30%] z-10 w-[64%] max-w-[500px] object-contain opacity-100 sm:right-[-8%] sm:top-[17%] sm:w-[55%] lg:right-[0%] lg:top-[10%] lg:w-[65%] lg:max-w-[700px]"
      />
      <img
        src={panelSolar}
        alt="Paneles solares de ENERQON"
        className="project-hero-asset absolute bottom-[-2%] right-[-30%] z-20 w-[68%] max-w-[650px] object-contain drop-shadow-[0_20px_32px_rgba(0,0,0,0.45)] sm:right-[-4%] sm:w-[56%] lg:right-[10%] lg:w-[42%] lg:max-w-[500px]"
      />
    </article>
  );
};
