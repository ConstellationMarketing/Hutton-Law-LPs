import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LpFrame } from "./screens/LpFrame/LpFrame";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LpFrame />
  </StrictMode>,
);
