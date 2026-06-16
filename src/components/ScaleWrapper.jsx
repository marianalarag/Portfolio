import { useEffect, useState, useRef } from "react";

export const ScaleWrapper = ({
  children,
  designWidth = 1440,
  designHeight = 4602,
}) => {
  const [scale, setScale] = useState(1);
  const [wrapperHeight, setWrapperHeight] = useState(designHeight);
  const contentRef = useRef(null);

  useEffect(() => {
    const updateScale = () => {
      const newScale = window.innerWidth / designWidth;
      setScale(newScale);

      // Calcular la altura real del contenido después del escalado
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        // La altura del wrapper debe ser la altura del contenido * escala
        setWrapperHeight(Math.ceil(contentHeight * newScale));
      } else {
        setWrapperHeight(designHeight * newScale);
      }
    };

    // Ejecutar después de que el DOM se haya actualizado
    const timer = setTimeout(updateScale, 50);

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateScale);
    };
  }, [designWidth, designHeight, children]);

  return (
    <div
      style={{
        width: "100%",
        height: `${wrapperHeight}px`,
        overflowX: "hidden",
        overflowY: "hidden",
        position: "relative",
      }}
    >
      <div
        ref={contentRef}
        style={{
          width: `${designWidth}px`,
          height: `${designHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};
