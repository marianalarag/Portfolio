import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { WebDesign } from "./screens/WebDesign";
import "./index.css";

const App = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleCloseModal = () => {
    setExpandedImage(null);
  };

  return (
    <>
      <WebDesign setExpandedImage={setExpandedImage} />

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
