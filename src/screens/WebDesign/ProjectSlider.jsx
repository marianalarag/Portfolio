import { useState } from "react";

import { Unexia } from "./Unexia";
import { Enerqon } from "./Enerqon";
import { MovieCatalogue } from "./MovieCatalogue";
import { DoctorAppointment } from "./DoctorAppointment";

export const ProjectSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = 4;
  const slideWidth = 1683;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  const slides = [
    <Unexia key={0} />,
    <Enerqon key={1} />,
    <MovieCatalogue key={2} />,
    <DoctorAppointment key={3} />,
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "1228px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: `translateX(-${current * slideWidth}px)`,
          width: `${total * slideWidth}px`,
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} style={{ width: `${slideWidth}px`, flexShrink: 0 }}>
            {slide}
          </div>
        ))}
      </div>

      {/* Left navigation area - más pequeña, solo en los bordes */}
      <div
        onClick={prev}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "150px" /* Antes: 50% */,
          height: "100%",
          cursor: "pointer",
          zIndex: 20,
        }}
      />

      {/* Right navigation area - más pequeña, solo en los bordes */}
      <div
        onClick={next}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "150px" /* Antes: 50% */,
          height: "100%",
          cursor: "pointer",
          zIndex: 20,
        }}
      />

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "16px",
          zIndex: 30,
          background: "rgba(255, 255, 255, 0.5)",
          padding: "8px 20px",
          borderRadius: "40px",
          backdropFilter: "blur(4px)",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "1.5px solid #1a1f33",
              backgroundColor: i === current ? "#1a1f33" : "transparent",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};
