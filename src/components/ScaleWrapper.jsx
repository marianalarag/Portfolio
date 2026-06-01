import { useEffect, useState } from "react";

export const ScaleWrapper = ({
  children,
  designWidth = 1440,
  designHeight = 4602,
}) => {
  const [scale, setScale] = useState(1);
  const [wrapperHeight, setWrapperHeight] = useState(designHeight);

  useEffect(() => {
    const updateScale = () => {
      const newScale = window.innerWidth / designWidth;
      setScale(newScale);
      setWrapperHeight(designHeight * newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [designWidth, designHeight]);

  return (
    <div
      style={{
        width: "100%",
        height: `${wrapperHeight}px`,
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <div
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
