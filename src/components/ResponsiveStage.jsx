import { useEffect, useRef, useState } from "react";

export const ResponsiveStage = ({
  children,
  width,
  height,
  fit = "width",
  className = "",
  contentClassName = "",
}) => {
  const hostRef = useRef(null);
  const [layout, setLayout] = useState({ scaleX: 1, scaleY: 1, x: 0, y: 0 });

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const update = () => {
      const rect = host.getBoundingClientRect();
      const hostWidth = host.clientWidth || rect.width || width;
      const hostHeight =
        host.clientHeight ||
        rect.height ||
        host.parentElement?.clientHeight ||
        window.innerHeight ||
        height;
      const widthScale = hostWidth / width;

      if (fit === "contain") {
        const heightScale = hostHeight / height || widthScale;
        const scale = Math.min(widthScale, heightScale);

        setLayout({
          scaleX: scale,
          scaleY: scale,
          x: (hostWidth - width * scale) / 2,
          y: (hostHeight - height * scale) / 2,
        });
        return;
      }

      if (fit === "cover") {
        const heightScale = hostHeight / height || widthScale;
        const scale = Math.max(widthScale, heightScale);

        setLayout({
          scaleX: scale,
          scaleY: scale,
          x: (hostWidth - width * scale) / 2,
          y: (hostHeight - height * scale) / 2,
        });
        return;
      }

      if (fit === "stretch-height") {
        setLayout({
          scaleX: widthScale,
          scaleY: hostHeight / height || widthScale,
          x: 0,
          y: 0,
        });
        return;
      }

      setLayout({ scaleX: widthScale, scaleY: widthScale, x: 0, y: 0 });
    };

    const observer = new ResizeObserver(update);
    observer.observe(host);
    update();

    return () => observer.disconnect();
  }, [fit, height, width]);

  return (
    <div
      ref={hostRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={
        fit === "contain" || fit === "cover" || fit === "stretch-height"
          ? { height: "100%" }
          : { height: `${height * layout.scaleY}px` }
      }
    >
      <div
        className={`absolute left-0 top-0 origin-top-left ${contentClassName}`}
        style={{
          left: layout.x,
          top: layout.y,
          width,
          height,
          transform: `scale(${layout.scaleX}, ${layout.scaleY})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
