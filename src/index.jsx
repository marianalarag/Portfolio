import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WebDesign } from "./screens/WebDesign";
import { ScaleWrapper } from "./components/ScaleWrapper";
import "./index.css";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ScaleWrapper designWidth={1440} designHeight={4602}>
      <WebDesign />
    </ScaleWrapper>
  </StrictMode>,
);
