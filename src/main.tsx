import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // 👈 ESTA LÍNEA ES LA CLAVE

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
