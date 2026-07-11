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
    <article className="relative h-full w-full overflow-hidden bg-[#211a16] text-[#e8dec5]">
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
        className="pointer-events-none absolute right-[-13%] top-[-3%] z-10 w-[47%] max-w-[30rem] object-contain sm:right-[-2%] sm:w-[35%] lg:right-0 lg:w-[30%]"
      />

      <h1 className="sr-only">Coffee Map</h1>
      <div aria-hidden="true" className="absolute left-[4.2%] top-[3.3%] z-10">
        <div className="flex items-start gap-[clamp(0.55rem,2.1vw,1.85rem)]">
          <img
            src={coffeeTitle}
            alt=""
            className="ml-[3rem] mt-[clamp(0.35rem,1.65vw,1.35rem)] h-[clamp(4rem,8vw,9rem)] w-auto object-contain lg:h-[7.5rem]"
          />
          <img
            src={placeIcon}
            alt=""
            className="h-[12rem] w-[7rem] object-contain lg:h-[10rem] lg:w-[6rem]"
          />
        </div>
        <img
          src={mapTitle}
          alt=""
          className="ml-[4rem] mt-[clamp(1rem,4vw,1rem)] h-[16rem] w-auto object-contain lg:h-[13rem]"
        />
      </div>

      <div className="absolute left-[8.3%] top-[43%] z-20 w-[42%] max-w-[25rem] sm:top-[50%] sm:w-[31%] lg:top-[52%]">
        <div className="flex w-[80%] max-w-[24rem] items-center gap-[0.8rem]">
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

        <p className="mt-[0.55rem] max-h-[36svh] overflow-hidden font-kurale text-[clamp(0.72rem,2.75vw,1rem)] font-normal leading-[1.42] text-[#e8dec5] sm:mt-[0.85rem] sm:max-h-none sm:text-[clamp(0.95rem,1.62vw,1.38rem)] lg:text-[1.08rem]">
          <span className="font-pinyon text-[1.35em] leading-none">C</span>
          {projectText.slice(1)}
        </p>
      </div>

      <a
        href="https://coffee-map-delta.vercel.app/login"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver mas sobre Coffee Map"
        className="absolute left-[7.9%] top-[87.3%] z-30 inline-flex h-[2.45rem] min-w-[6.7rem] items-center justify-center rounded-full bg-[#e0d6c0] px-[1.7rem] font-fraunces text-[0.92rem] font-normal text-[#493a33] shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition duration-200 hover:scale-105 hover:bg-[#eee4ce] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#013fd0] sm:h-[3.2rem] sm:min-w-[9rem] sm:text-[1.15rem] lg:h-[3.95rem] lg:min-w-[11.3rem] lg:text-[1.35rem]"
      >
        Ver m&aacute;s
      </a>

      <img
        src={coffeeCharacter}
        alt="Iced coffee character holding a map"
        className="pointer-events-none absolute bottom-[-5.8%] right-[-27%] z-20 w-[80%] h-auto max-w-none object-contain drop-shadow-[0_22px_34px_rgba(0,0,0,0.24)] sm:bottom-[-8%] sm:right-[2%] sm:w-[55%] lg:bottom-[-6%] lg:right-[23%] lg:w-[35%]"
      />
    </article>
  );
};
