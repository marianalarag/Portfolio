import catalogueTitle from "./img/catalogue.png";
import clapperBoard from "./img/claqueta cine.png";
import movieE from "./img/E.png";
import movieI from "./img/I.png";
import movieM from "./img/M.png";
import movieO from "./img/O.png";
import movieReel from "./img/logo cine.png";
import movieV from "./img/V.png";
import filmRoll from "./img/rollo peli.png";
import lineCinema from "./img/linea cine.png";
import reactIcon from "./img/react.png";

const descriptionText =
  "The Movie Catalog project was developed to provide a seamless, high-performance experience in an era of instant data consumption. By building a robust Single Page Application (SPA) with a reactive architecture, we eliminated navigation latency and enabled fluid user interactions. The implementation focuses on modular design and clean state management, ensuring full CRUD functionality through asynchronous RESTful API communication. This project highlights a commitment to scalable, efficient front-end engineering and a prioritize-the-user approach to complex data management.";

const titleLetters = [
  {
    src: movieM,
    alt: "M",
    className: "left-[3%] top-[55%] w-[30.3%]",
  },
  {
    src: movieO,
    alt: "O",
    className: "left-[25.4%] top-[28.4%] w-[20.6%]",
  },
  {
    src: movieV,
    alt: "V",
    className: "left-[45.5%] top-[22.6%] w-[18.7%]",
  },
  {
    src: movieI,
    alt: "I",
    className: "left-[62%] top-[27.2%] w-[15.5%]",
  },
  {
    src: movieE,
    alt: "E",
    className: "left-[72%] top-[45.2%] w-[24.8%]",
  },
];

export const MovieCatalogue = () => {
  return (
    <article className="project-card project-card--movie relative h-full w-full overflow-hidden bg-[#101527] text-[#e5e0d9]">
      <h1 className="sr-only">Movie Catalogue</h1>

      <img
        src={filmRoll}
        alt=""
        aria-hidden="true"
        className="project-film-roll pointer-events-none absolute left-[-28%] top-[-10%] z-0 w-[112%] max-w-none object-contain sm:left-[-9%] sm:top-[-18%] sm:w-[78%] lg:left-[-1%] lg:top-[-10%] lg:w-[72%]"
      />

      <div
        aria-hidden="true"
        className="project-title-group absolute left-[-5%] top-[19%] z-20 h-[31%] w-[66%] max-w-[43rem] sm:left-[3.5%] sm:top-[18%] sm:w-[47%] lg:left-[4.5%] lg:top-[20%] lg:w-[42%]"
      >
        {titleLetters.map((letter) => (
          <img
            key={letter.alt}
            src={letter.src}
            alt=""
            className={`absolute h-auto object-contain ${letter.className}`}
          />
        ))}
      </div>

      <img
        src={movieReel}
        alt=""
        aria-hidden="true"
        className="project-symbol pointer-events-none absolute left-[4%] top-[37%] z-10 w-[58%] max-w-[43rem] object-contain drop-shadow-[0_18px_26px_rgba(0,0,0,0.24)] sm:left-[5.5%] sm:top-[35%] sm:w-[42%] lg:left-[11.5%] lg:top-[35%] lg:w-[26%]"
      />

      <div className="project-subtitle absolute left-[9%] top-[73.2%] z-20 w-[43%] max-w-[24.5rem] sm:left-[10%] sm:top-[73%] sm:w-[29%] lg:left-[12.8%] lg:top-[78.7%]">
        <img
          src={catalogueTitle}
          alt=""
          aria-hidden="true"
          className="w-full object-contain"
        />
        <div className="mt-[-0.15rem] flex items-center gap-[0.65rem] pl-[0.35rem]">
          <img
            src={lineCinema}
            alt=""
            aria-hidden="true"
            className="h-px min-w-0 flex-1 object-fill"
          />
          <img
            src={reactIcon}
            alt="React"
            className="h-[1rem] w-[1rem] object-contain drop-shadow-[0_3px_7px_rgba(0,0,0,0.35)] sm:h-[1.35rem] sm:w-[1.35rem]"
          />
        </div>
      </div>

      <p className="project-text absolute right-[5.2%] top-[18.8%] z-20 box-border max-h-[61svh] w-[42%] max-w-[39rem] min-w-0 overflow-hidden text-right font-kurale text-[clamp(0.74rem,2.45vw,1.04rem)] leading-[1.38] text-[#e5e0d9] sm:right-[4.6%] sm:top-[23.8%] sm:max-h-none sm:w-[42%] sm:text-[clamp(1rem,1.92vw,1.55rem)] lg:right-[7%] lg:top-[23.8%] lg:w-[38%] lg:text-[1.28rem]">
        {descriptionText}
      </p>

      <a
        href="https://github.com/marianalarag/Cine-UX-UI"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver mas sobre Movie Catalogue"
        className="project-cta absolute right-[9%] top-[84.5%] z-30 inline-flex h-[2.25rem] min-w-[6rem] items-center justify-center rounded-full bg-[#f0c326] px-[1.45rem] font-fraunces text-[0.84rem] font-normal text-[#1a1f33] shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition duration-200 hover:scale-105 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0c326] sm:right-[6%] sm:top-[84%] sm:h-[3rem] sm:min-w-[8.6rem] sm:text-[1.08rem] lg:right-[3.8%] lg:top-[80.2%] lg:h-[3.7rem] lg:min-w-[11.3rem] lg:text-[1.35rem]"
      >
        Ver m&aacute;s
      </a>

      <img
        src={clapperBoard}
        alt=""
        aria-hidden="true"
        className="project-hero-asset pointer-events-none absolute bottom-[-9%] right-[-13%] z-10 w-[71%] max-w-[42rem] object-contain sm:bottom-[-11%] sm:right-[-5%] sm:w-[43%] lg:bottom-[-10%] lg:right-[5%] lg:w-[38%]"
      />
    </article>
  );
};
