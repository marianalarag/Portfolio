import { useEffect, useRef, useState } from "react";

export const ScaleWrapper = ({
  children,
  designWidth = 1440,
  designHeight = 4602,
}) => {
  const [scale, setScale] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(designWidth);
  const [wrapperHeight, setWrapperHeight] = useState(designHeight);
  const contentRef = useRef(null);

  useEffect(() => {
    const updateScale = () => {
      const newScale = window.innerWidth / designWidth;
      setScale(newScale);
      setViewportWidth(window.innerWidth);

      requestAnimationFrame(() => {
        if (!contentRef.current) {
          setWrapperHeight(designHeight * newScale);
          return;
        }

        const contentHeight = contentRef.current.scrollHeight * newScale;
        const contentTop = contentRef.current.getBoundingClientRect().top;
        const certificates = contentRef.current.querySelector(".certificates");
        const certificatesBottom = certificates
          ? certificates.getBoundingClientRect().bottom - contentTop
          : 0;

        setWrapperHeight(Math.ceil(Math.max(contentHeight, certificatesBottom)));
      });
    };

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
        backgroundColor: "#e4e4e4",
        overflow: "visible",
        position: "relative",
      }}
    >
      <div
        ref={contentRef}
        style={{
          "--page-scale": scale,
          "--inverse-page-scale": 1 / scale,
          "--viewport-width": `${viewportWidth}px`,
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
