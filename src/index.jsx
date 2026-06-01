import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { WebDesign } from "./screens/WebDesign";
import { ScaleWrapper } from "./components/ScaleWrapper";
import "./index.css";

const App = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleCloseModal = () => {
    setExpandedImage(null);
  };

  return (
    <>
      <ScaleWrapper designWidth={1440} designHeight={4602}>
        <WebDesign setExpandedImage={setExpandedImage} />
      </ScaleWrapper>

      {expandedImage && (
        <div className="global-modal-overlay" onClick={handleCloseModal}>
          <div
            className="global-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="global-modal-close" onClick={handleCloseModal}>
              ✕
            </button>
            <img
              src={expandedImage.src}
              alt={expandedImage.alt}
              className="global-modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
