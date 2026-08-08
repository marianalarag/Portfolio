import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { CoffeeMap } from "./CoffeeMap";
import { DoctorAppointment } from "./DoctorAppointment";
import { Enerqon } from "./Enerqon";
import { MovieCatalogue } from "./MovieCatalogue";
import { Unexia } from "./Unexia";

import coffeeCover from "./img/Coffe Map Cover.png";
import cssIcon from "./img/css.png";
import doctorCover from "./img/Doctor Appointment Cover.png";
import enerqonCover from "./img/Enerqon Cover.png";
import htmlIcon from "./img/html.png";
import jsIcon from "./img/js.png";
import movieCover from "./img/Movie Catalogue Cover.png";
import phpIcon from "./img/php.png";
import reactIcon from "./img/react.png";
import databaseIcon from "./img/base datos.png";
import unexiaCover from "./img/Unexia Cover.png";

const projects = [
  {
    id: "enerqon",
    title: "Enerqon",
    subtitle: "Energy platform · HTML, CSS & JavaScript",
    technologies: [
      [htmlIcon, "HTML"],
      [cssIcon, "CSS"],
      [jsIcon, "JavaScript"],
    ],
    url: "https://alan-cr2020-enerqon-main-24385807.dev.odoo.com/",
    cover: enerqonCover,
    Card: Enerqon,
  },
  {
    id: "unexia",
    title: "Unexia",
    subtitle: "Education ecosystem · HTML, CSS & JavaScript",
    technologies: [
      [htmlIcon, "HTML"],
      [cssIcon, "CSS"],
      [jsIcon, "JavaScript"],
    ],
    url: "https://unexia.odoo.com/",
    cover: unexiaCover,
    Card: Unexia,
  },
  {
    id: "coffee-map",
    title: "Coffee Map",
    subtitle: "Interactive lifestyle app · React",
    technologies: [[reactIcon, "React"]],
    url: "https://coffe-map-khaki.vercel.app/",
    cover: coffeeCover,
    Card: CoffeeMap,
  },
  {
    id: "movie-catalogue",
    title: "Movie Catalogue",
    subtitle: "Reactive single-page app · React",
    technologies: [[reactIcon, "React"]],
    url: "https://github.com/marianalarag/Cine-UX-UI",
    cover: movieCover,
    Card: MovieCatalogue,
  },
  {
    id: "doctor-appointment",
    title: "Simify",
    subtitle: "Medical appointment platform · PHP & database",
    technologies: [
      [phpIcon, "PHP"],
      [databaseIcon, "Database"],
    ],
    url: "https://github.com/marianalarag/appointment-app2",
    cover: doctorCover,
    Card: DoctorAppointment,
  },
];

const WHEEL_ITEMS = 18;
const STEP = 360 / WHEEL_ITEMS;
const INITIAL_DELAY = 200;
const INITIAL_ARC_DURATION = 2200;
const INITIAL_SETTLE_DURATION = 1100;

const wrapAngle = (from, to) => ((to - from + 540) % 360) - 180;

const easeInOut = (value) =>
  value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;

const getWheelLayout = (width, height) => {
  const isNarrow = width < 768;
  const peak = isNarrow ? width * 0.38 : width * 0.36;
  const radius = Math.max(height * 0.75, peak + 40);
  const size = Math.min(Math.max(height * 0.375, 187.5), 375, width * 0.45);

  return {
    cx: peak - radius,
    cy: height / 2,
    radius,
    size,
    isNarrow,
  };
};

export const ProjectSlider = () => {
  const stageRef = useRef(null);
  const itemRefs = useRef([]);
  const layoutRef = useRef(null);
  const angleRef = useRef(0);
  const velocityRef = useRef(0);
  const targetRef = useRef(null);
  const pointerIdRef = useRef(null);
  const pointerAngleRef = useRef(0);
  const pointerDistanceRef = useRef(0);
  const draggedRef = useRef(false);
  const [viewport, setViewport] = useState({ width: 390, height: 844 });
  const [focusedSlot, setFocusedSlot] = useState(0);
  const [openProject, setOpenProject] = useState(null);

  const wheelItems = useMemo(
    () =>
      Array.from({ length: WHEEL_ITEMS }, (_, slot) => ({
        slot,
        project: projects[slot % projects.length],
      })),
    [],
  );

  const updateViewport = () => {
    if (!stageRef.current) return;
    setViewport({
      width: stageRef.current.offsetWidth || 390,
      height: stageRef.current.offsetHeight || 844,
    });
  };

  useEffect(() => {
    updateViewport();
    const resizeObserver = new ResizeObserver(updateViewport);
    if (stageRef.current) resizeObserver.observe(stageRef.current);
    window.addEventListener("resize", updateViewport);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    layoutRef.current = getWheelLayout(viewport.width, viewport.height);
  }, [viewport]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const initialState = {
      done: reducedMotion,
      start: reducedMotion ? null : null,
    };
    let frame = null;

    const render = (time) => {
      const layout = layoutRef.current;
      if (!layout) {
        frame = requestAnimationFrame(render);
        return;
      }

      const { width, height } = viewport;
      let cx = layout.cx;
      let cy = layout.cy;
      let radius = layout.radius;
      let scale = 1;

      if (!initialState.done) {
        if (initialState.start === null) initialState.start = time;
        const elapsed = time - initialState.start;
        const offset = Math.max(0, elapsed - INITIAL_DELAY);
        const arcProgress = easeInOut(Math.min(1, offset / INITIAL_ARC_DURATION));
        const settleProgress = easeInOut(
          Math.min(1, Math.max(0, (offset - INITIAL_ARC_DURATION) / INITIAL_SETTLE_DURATION)),
        );
        const fit = 1 + layout.size / layout.radius / 2;
        const compactRadius = (Math.min(width, height) / 2 - 24) / fit;

        radius = compactRadius + (layout.radius - compactRadius) * settleProgress;
        cx = width / 2 + (layout.cx - width / 2) * settleProgress;
        cy = height / 2 + (layout.cy - height / 2) * settleProgress;
        scale = radius / layout.radius;

        const arc = 90 * (1 - settleProgress);
        const horizon = ((width / 2 + layout.size) / compactRadius) * (180 / Math.PI);
        const startAngle = -horizon + (360 + horizon) * arcProgress;

        for (let slot = 0; slot < WHEEL_ITEMS; slot += 1) {
          const element = itemRefs.current[slot];
          if (!element) continue;

          const itemAngle = startAngle - slot * STEP;
          let x;
          let y;

          if (itemAngle >= 0) {
            const radians = (arc - itemAngle) * (Math.PI / 180);
            x = cx + radius * Math.cos(radians);
            y = cy + radius * Math.sin(radians);
          } else {
            x = cx + (itemAngle * Math.PI) / 180 * radius;
            y = cy + radius;
          }

          element.style.visibility = "visible";
          element.style.transform = `translate3d(${x - layout.size * 0.36}px, ${y - layout.size / 2}px, 0) scale(${scale})`;
          element.style.zIndex = String(1000 - Math.round(Math.abs(wrapAngle(0, itemAngle))));

          if (slot === 0) {
            stage.style.setProperty("--project-info-x", `${x + layout.size * 0.65 + 24}px`);
            stage.style.setProperty("--project-info-y", `${y}px`);
          }
        }

        if (offset >= INITIAL_ARC_DURATION + INITIAL_SETTLE_DURATION) {
          initialState.done = true;
          velocityRef.current = 0.12;
        }

        frame = requestAnimationFrame(render);
        return;
      }

      if (!draggedRef.current) {
        if (targetRef.current !== null) {
          const distance = targetRef.current - angleRef.current;
          angleRef.current += distance * 0.12;
          if (Math.abs(distance) < 0.05) {
            angleRef.current = targetRef.current;
            targetRef.current = null;
          }
        } else {
          angleRef.current += velocityRef.current;
          velocityRef.current *= 0.95;

          if (Math.abs(velocityRef.current) < 0.04) {
            velocityRef.current = 0;
            const snapped = Math.round(angleRef.current / STEP) * STEP;
            angleRef.current += (snapped - angleRef.current) * 0.1;
          }
        }
      }

      let closestSlot = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      let activeX = layout.cx + layout.radius;
      let activeY = layout.cy;

      for (let slot = 0; slot < WHEEL_ITEMS; slot += 1) {
        const element = itemRefs.current[slot];
        if (!element) continue;

        const itemAngle = angleRef.current + slot * STEP;
        const radians = (itemAngle * Math.PI) / 180;
        const x = layout.cx + layout.radius * Math.cos(radians);
        const y = layout.cy + layout.radius * Math.sin(radians);
        const distance = Math.abs(wrapAngle(itemAngle, 0));

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSlot = slot;
          activeX = x;
          activeY = y;
        }

        if (
          x < -layout.size * 1.5 ||
          y < -layout.size * 2 ||
          y > height + layout.size * 2 ||
          distance > 120
        ) {
          element.style.visibility = "hidden";
          continue;
        }

        element.style.visibility = "visible";
        element.style.transform = `translate3d(${x - layout.size * 0.36}px, ${y - layout.size / 2}px, 0)`;
        element.style.zIndex = String(1000 - Math.round(Math.abs(wrapAngle(0, itemAngle))));
      }

      stage.style.setProperty("--project-info-x", `${activeX + layout.size * 0.65 + 24}px`);
      stage.style.setProperty("--project-info-y", `${activeY}px`);
      setFocusedSlot((value) => (value === closestSlot ? value : closestSlot));
      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [viewport]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const getPointerAngle = (event) => {
      const layout = layoutRef.current;
      if (!layout) return 0;
      const rect = stage.getBoundingClientRect();
      const scaleX = stage.offsetWidth ? stage.offsetWidth / rect.width : 1;
      const scaleY = stage.offsetHeight ? stage.offsetHeight / rect.height : 1;
      const x = (event.clientX - rect.left) * scaleX;
      const y = (event.clientY - rect.top) * scaleY;
      return Math.atan2(y - layout.cy, x - layout.cx) * (180 / Math.PI);
    };

    const handleWheel = (event) => {
      event.preventDefault();
      targetRef.current = null;
      velocityRef.current = Math.max(-5, Math.min(5, velocityRef.current + event.deltaY * 0.003));
    };

    const handlePointerDown = (event) => {
      pointerIdRef.current = event.pointerId;
      pointerDistanceRef.current = 0;
      draggedRef.current = false;
      velocityRef.current = 0;
      pointerAngleRef.current = getPointerAngle(event);
    };

    const handlePointerMove = (event) => {
      if (pointerIdRef.current === null) return;
      pointerDistanceRef.current += Math.abs(event.movementX) + Math.abs(event.movementY);

      if (!draggedRef.current && pointerDistanceRef.current > 8) {
        draggedRef.current = true;
        targetRef.current = null;
        try {
          stage.setPointerCapture(pointerIdRef.current);
        } catch {
          // Pointer capture is not available in every embedded preview.
        }
        pointerAngleRef.current = getPointerAngle(event);
        return;
      }

      if (!draggedRef.current) return;
      const nextAngle = getPointerAngle(event);
      const delta = wrapAngle(pointerAngleRef.current, nextAngle);
      pointerAngleRef.current = nextAngle;
      angleRef.current += delta;
      velocityRef.current = delta;
    };

    const handlePointerUp = () => {
      pointerIdRef.current = null;
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });
    stage.addEventListener("pointerdown", handlePointerDown);
    stage.addEventListener("pointermove", handlePointerMove);
    stage.addEventListener("pointerup", handlePointerUp);
    stage.addEventListener("pointercancel", handlePointerUp);

    return () => {
      stage.removeEventListener("wheel", handleWheel);
      stage.removeEventListener("pointerdown", handlePointerDown);
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerup", handlePointerUp);
      stage.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  const rotateBy = (amount) => {
    const target = targetRef.current ?? angleRef.current;
    targetRef.current = target + amount * STEP;
    velocityRef.current = 0;
  };

  const navigateProject = (amount) => {
    rotateBy(amount);
    setOpenProject((value) =>
      value === null ? value : (value + amount + projects.length) % projects.length,
    );
  };

  const openSelectedProject = (slot) => {
    if (draggedRef.current) return;
    rotateBy(-slot);
    setOpenProject(slot % projects.length);
  };

  useEffect(() => {
    if (openProject === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpenProject(null);
      if (event.key === "ArrowUp") navigateProject(-1);
      if (event.key === "ArrowDown") navigateProject(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openProject]);

  const selectedProject = openProject === null ? null : projects[openProject];
  const wheelLayout = getWheelLayout(viewport.width, viewport.height);
  const DetailCard = selectedProject?.Card;
  const focusedProject = projects[focusedSlot % projects.length];

  return (
    <div ref={stageRef} className="dvd-project-stage relative h-full w-full overflow-hidden">
      <header className="dvd-portfolio-header">
        <p className="dvd-portfolio-kicker">Projects</p>
        <h2>A collection of digital experiences</h2>
        <p className="dvd-portfolio-description">
          A selection of web interfaces, visual systems and thoughtful digital experiences.
        </p>
        <a href="mailto:marianalarag@outlook.com" className="dvd-portfolio-contact">
          Let&apos;s talk
        </a>
      </header>

      <div className="dvd-wheel-interaction" aria-label="Portfolio project wheel">
        {wheelItems.map(({ project, slot }) => (
          <button
            key={`${project.id}-${slot}`}
            ref={(element) => {
              itemRefs.current[slot] = element;
            }}
            type="button"
            className="dvd-case"
            style={{
              width: `${wheelLayout.size * 0.72}px`,
              height: `${wheelLayout.size}px`,
              visibility: "hidden",
            }}
            aria-label={`Abrir proyecto ${project.title}`}
            onClick={() => openSelectedProject(slot)}
          >
            <span className={`dvd-case__tilt ${focusedSlot === slot ? "focused" : ""}`}>
              <span className="dvd-case__shell">
                <span className="dvd-case__spine" aria-hidden="true" />
                <span className="dvd-case__front">
                  <img src={project.cover} alt={`Portada de ${project.title}`} draggable="false" />
                  <span className="dvd-case__gloss" aria-hidden="true" />
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="dvd-wheel-controls" aria-label="Navegar proyectos">
        <button type="button" onClick={() => rotateBy(-1)} aria-label="Proyecto anterior">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 15 L12 8 L19 15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <button type="button" onClick={() => rotateBy(1)} aria-label="Siguiente proyecto">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 9 L12 16 L19 9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <div className="dvd-wheel-project-info" aria-live="polite">
        <strong>{focusedProject.title}</strong>
        <span>{focusedProject.subtitle}</span>
        <div className="dvd-wheel-project-tech" aria-label="Tecnologías utilizadas">
          {focusedProject.technologies.map(([icon, label]) => (
            <img key={label} src={icon} alt={label} title={label} />
          ))}
        </div>
        <a
          href={focusedProject.url}
          target="_blank"
          rel="noopener noreferrer"
          className="dvd-wheel-project-link"
        >
          Ver más
        </a>
      </div>

      {selectedProject &&
        createPortal(
          <div
            className="dvd-detail-overlay fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalles de ${selectedProject.title}`}
            onClick={() => setOpenProject(null)}
          >
            <div
              className="dvd-detail-panel relative h-[min(88svh,52rem)] w-[min(94vw,92rem)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" onClick={() => setOpenProject(null)} aria-label="Cerrar proyecto" className="dvd-detail-close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div key={selectedProject.id} className="dvd-detail-card h-full w-full">
                {DetailCard && <DetailCard />}
              </div>
              <button type="button" onClick={() => navigateProject(-1)} aria-label="Proyecto anterior" className="dvd-detail-nav dvd-detail-nav--prev">
                &uarr;
              </button>
              <button type="button" onClick={() => navigateProject(1)} aria-label="Siguiente proyecto" className="dvd-detail-nav dvd-detail-nav--next">
                &darr;
              </button>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
