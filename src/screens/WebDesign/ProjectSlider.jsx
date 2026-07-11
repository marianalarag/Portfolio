import { useState } from "react";

import { CoffeeMap } from "./CoffeeMap";
import { DoctorAppointment } from "./DoctorAppointment";
import { Enerqon } from "./Enerqon";
import { MovieCatalogue } from "./MovieCatalogue";
import { Unexia } from "./Unexia";

const slides = [
  <Enerqon key="enerqon" />,
  <Unexia key="unexia" />,
  <CoffeeMap key="coffee-map" />,
  <MovieCatalogue key="movie-catalogue" />,
  <DoctorAppointment key="doctor-appointment" />,
];

export const ProjectSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="h-full w-full shrink-0">
            {slide}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Proyecto anterior"
        className="group absolute left-[0.35rem] top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center focus-visible:outline-none sm:left-[0.6rem] sm:h-11 sm:w-11 lg:left-[0.75rem]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur transition duration-300 group-hover:scale-110 group-hover:bg-white/70 group-focus-visible:scale-110 group-focus-visible:bg-white/70 sm:h-11 sm:w-11">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1a1f33"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </span>
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Siguiente proyecto"
        className="group absolute right-[0.35rem] top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center focus-visible:outline-none sm:right-[0.6rem] sm:h-11 sm:w-11 lg:right-[0.75rem]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur transition duration-300 group-hover:scale-110 group-hover:bg-white/70 group-focus-visible:scale-110 group-focus-visible:bg-white/70 sm:h-11 sm:w-11">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1a1f33"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </span>
      </button>

      <div className="absolute bottom-[1.8rem] left-1/2 z-40 flex -translate-x-1/2 gap-4 rounded-full bg-white/50 px-5 py-2 backdrop-blur">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Ir al proyecto ${index + 1}`}
            className={`h-3 w-3 rounded-full border border-[#1a1f33] transition ${
              index === current ? "bg-[#1a1f33]" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
