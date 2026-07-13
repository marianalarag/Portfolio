import cafeBeans from "./img/cafe.png";
import coffeeBg from "./img/fondo coffee.png";
import coffeeCharacter from "./img/logo coffee map.png";
import coffeeTitle from "./img/Coffee.png";
import lineCoffee from "./img/linea coffee.png";
import mapTitle from "./img/Map.png";
import placeIcon from "./img/place icon.png";
import reactIcon from "./img/react.png";

const projectText =
  "Coffee Map emerges as a sensory atlas designed to turn every cup into a documented memory. More than a simple location tool, it is an interactive lifestyle log where the map evolves with every visit, allowing users to curate their unique coffee identity while exploring and rating their local scene.";

export const CoffeeMap = () => {
  return (
    <article className="project-card project-card--coffee relative h-full w-full overflow-hidden bg-[#211a16] text-[#e8dec5] [container-type:inline-size]">
      <img
        src={coffeeBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <img
        src={cafeBeans}
        alt=""
        aria-hidden="true"
        className="project-beans pointer-events-none absolute right-[-13%] top-[-3%] z-10 w-[47%] max-w-[30rem] object-contain sm:right-[-2%] sm:w-[35%] lg:right-0 lg:w-[30%]"
      />

      <h1 className="sr-only">Coffee Map</h1>
      <div
        aria-hidden="true"
        className="project-title-group absolute left-[4.2%] top-[6.5%] z-10 box-border max-w-[58%] sm:max-w-none"
      >
        <div className="flex items-start gap-[clamp(0.35rem,2.1vw,1.85rem)]">
          <img
            src={coffeeTitle}
            alt=""
            className="ml-[clamp(1.35rem,8cqw,3rem)] mt-[clamp(0.35rem,1.65vw,1.35rem)] h-[clamp(3rem,12cqw,3.9rem)] w-auto max-w-[72%] object-contain sm:h-[min(9rem,14svh)] sm:max-w-none lg:h-[7.5rem]"
          />
          <img
            src={placeIcon}
            alt=""
            className="self-center translate-y-[1.5rem] h-[clamp(5.35rem,26cqw,6.2rem)] w-[clamp(3.25rem,15cqw,3.75rem)] shrink-0 object-contain sm:self-start sm:translate-y-0 sm:h-[min(12rem,20svh)] sm:w-[min(7rem,12svh)] lg:h-[10rem] lg:w-[6rem]"
          />
        </div>
        <img
          src={mapTitle}
          alt=""
          className="ml-[clamp(1.9rem,10.5cqw,4rem)] mt-[clamp(0.35rem,1.6cqw,1rem)] h-[clamp(7rem,32cqw,8rem)] w-auto max-w-full object-contain sm:mt-[clamp(1rem,4vw,1rem)] sm:h-[min(18rem,25svh)] sm:max-w-none lg:h-[15rem]"
        />
      </div>

      <div className="project-copy absolute left-[8.3%] top-[43%] z-20 box-border w-[42%] max-w-[25rem] min-w-0 sm:top-[50%] sm:w-[31%] lg:top-[52%]">
        <div className="flex w-full max-w-[24rem] items-center gap-[clamp(0.4rem,1.6cqw,0.8rem)] pr-[8%] sm:w-[80%] sm:pr-0">
          <img
            src={lineCoffee}
            alt=""
            aria-hidden="true"
            className="h-px min-w-0 flex-1 object-fill"
          />
          <img
            src={reactIcon}
            alt="React"
            className="h-[1.15rem] w-[1.15rem] object-contain drop-shadow-[0_3px_7px_rgba(0,0,0,0.35)] sm:h-[1.65rem] sm:w-[1.65rem]"
          />
        </div>

        <p className="project-text mt-[0.55rem] box-border max-h-[28svh] overflow-hidden pr-[0.15rem] font-kurale text-[clamp(0.66rem,2.55cqw,0.86rem)] font-normal leading-[1.34] text-[#e8dec5] sm:mt-[0.85rem] sm:max-h-none sm:pr-0 sm:text-[clamp(0.95rem,1.62vw,1.38rem)] sm:leading-[1.42] lg:text-[1.08rem]">
          <span className="font-pinyon text-[1.35em] leading-none">C</span>
          {projectText.slice(1)}
        </p>
      </div>

      <a
        href="https://coffee-map-delta.vercel.app/login"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver mas sobre Coffee Map"
        className="project-cta absolute left-[7.9%] top-[87.3%] z-30 inline-flex h-[2.35rem] min-w-[6.35rem] items-center justify-center rounded-full bg-[#e0d6c0] px-[1.35rem] font-fraunces text-[0.88rem] font-normal text-[#493a33] shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition duration-200 hover:scale-105 hover:bg-[#eee4ce] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#013fd0] sm:h-[3.2rem] sm:min-w-[9rem] sm:px-[1.7rem] sm:text-[1.15rem] lg:h-[3.95rem] lg:min-w-[11.3rem] lg:text-[1.35rem]"
      >
        Ver m&aacute;s
      </a>

      <img
        src={coffeeCharacter}
        alt="Iced coffee character holding a map"
        className="project-hero-asset pointer-events-none absolute bottom-[-5.8%] right-[-27%] z-20 h-auto w-[76%] max-w-none object-contain drop-shadow-[0_22px_34px_rgba(0,0,0,0.24)] sm:bottom-[-8%] sm:right-[2%] sm:w-[55%] lg:bottom-[-6%] lg:right-[23%] lg:w-[35%]"
      />
    </article>
  );
};
