import collegeIcon from "./img/collegue icon.png";
import lineUnexia from "./img/linea unexia.png";
import unexiaIcon from "./img/unexia icon.png";
import unexiaLogo from "./img/logo unexia.png";
import unexiaTitle from "./img/unexia title.png";
import htmlIcon from "./img/html.png";
import cssIcon from "./img/css.png";
import jsIcon from "./img/js.png";

const icons = [
  [htmlIcon, "HTML"],
  [cssIcon, "CSS"],
  [jsIcon, "JavaScript"],
];

const projectText =
  'At the intersection of technology and business emerges UNEXIA, an ecosystem designed to break down the barriers of traditional education. This interface project does not merely aim to inform, but to inspire a new generation of leaders under the premise: "Learn, Connect, and Empower." The visual proposal favors a palette of deep violets and crisp whites, creating an atmosphere of modern professionalism that extends from its Virtual Campus to its network of strategic alliances with global brands.';

export const Unexia = () => {
  return (
    <article className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,#f2f0ec_0%,#f5f1f6_54%,#cfaedb_100%)] text-[#1a1f33]">
      <img
        src={unexiaLogo}
        alt=""
        aria-hidden="true"
        className="absolute right-[-55%] top-[10%] z-0 w-[118%] max-w-[880px] object-contain opacity-95 sm:right-[-34%] sm:top-[9%] sm:w-[82%] lg:right-[-10%] lg:top-[2%] lg:w-[62%]"
      />

      <header className="absolute left-[4.6%] right-[4.5%] top-[5.4%] z-20 flex items-start gap-[1rem] sm:left-[5.6%] sm:right-[6.5%] sm:top-[8.4%] lg:left-[9.8%]">
        <img
          src={collegeIcon}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[0.15rem] top-[-0.55rem] z-30 h-[3.6rem] w-[3.6rem] object-contain sm:h-[5.1rem] sm:w-[5.1rem] lg:left-[2.9rem] lg:top-[-3.6rem] lg:h-[10.4rem] lg:w-[6.4rem]"
        />

        <div className="min-w-0">
          <img
            src={unexiaTitle}
            alt="UNEXIA Universidad de Negocios y Emprendimiento"
            className="w-[72vw] max-w-[760px] object-contain sm:w-[58vw] lg:w-[50vw]"
          />
        </div>

        <div className="absolute left-[5.8rem] top-[2rem] z-40 hidden -translate-y-1/2 items-center gap-[0.7rem] sm:flex lg:left-auto lg:right-[1rem] lg:top-[1.8rem] lg:gap-[0.9rem]">
          <img
            src={lineUnexia}
            alt=""
            aria-hidden="true"
            className="h-px w-[12vw] max-w-[280px] object-fill lg:w-[9vw]"
          />
          {icons.map(([src, alt]) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="h-[2.1rem] w-[2.1rem] object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.16)] lg:h-[3rem] lg:w-[3rem]"
            />
          ))}
        </div>
      </header>

      <div className="absolute left-[6.1%] top-[24%] z-30 flex max-h-[68%] w-[62%] max-w-[34rem] flex-col items-start rounded-[0.35rem] bg-[#f5f1f6]/28 p-[0.15rem] backdrop-blur-[1px] sm:left-[6.1%] sm:top-[31%] sm:w-[44%] sm:bg-transparent sm:p-0 sm:backdrop-blur-0 lg:left-[12.5%] lg:top-[40%] lg:w-[38%]">
        <h1 className="sr-only">Unexia case study</h1>
        <p className="font-kurale text-[clamp(0.64rem,2.05vw,0.95rem)] leading-[1.32] tracking-[-0.01em] sm:text-[clamp(0.86rem,1.58vw,1.22rem)] lg:text-[1.5rem]">
          {projectText}
        </p>

        <a
          href="https://unexia.odoo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[1rem] inline-flex h-[2.55rem] min-w-[7.8rem] shrink-0 items-center justify-center rounded-full bg-[#9635e6] px-[1.75rem] font-fraunces text-[0.9rem] font-semibold text-white shadow-[0_12px_26px_rgba(150,53,230,0.24)] transition duration-200 hover:scale-105 hover:bg-[#842bd0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9635e6] sm:mt-[1.65rem] sm:h-[3.35rem] sm:min-w-[9.8rem] sm:text-[1.08rem] lg:mt-[2rem] lg:h-[4rem] lg:min-w-[12rem] lg:text-[1.28rem]"
        >
          Ver m&aacute;s
        </a>
      </div>

      <div className="absolute right-[4.5%] top-[6.2%] z-30 flex items-center gap-[0.35rem] sm:hidden">
        {icons.map(([src, alt]) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            className="h-[1.35rem] w-[1.35rem] object-contain drop-shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
          />
        ))}
      </div>

      <img
        src={unexiaIcon}
        alt="Vista de interfaz móvil y promociones del proyecto Unexia"
        className="absolute bottom-[-1.5%] right-[-38%] z-20 w-[66%] max-w-[500px] object-contain drop-shadow-[0_20px_42px_rgba(26,31,51,0.22)] sm:right-[-8%] sm:w-[58%] lg:left-[53%] lg:w-[40%]"
      />
    </article>
  );
};
