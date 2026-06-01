import { useEffect, useState } from "react";

export const ScaleWrapper = ({
  children,
  designWidth = 1440,
  designHeight = 4602,
}) => {
  const [scale, setScale] = useState(1);
  const [wrapperHeight, setWrapperHeight] = useState("100vh");

  useEffect(() => {
    const updateScale = () => {
      const newScale = window.innerWidth / designWidth;
      setScale(newScale);
      // La altura ahora es dinámica basada en el contenido
      setWrapperHeight("100vh");
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [designWidth]);

  return (
    <div
      style={{
        width: "100%",
        height: wrapperHeight,
        overflowY: "auto",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          width: `${designWidth}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "relative",
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};
