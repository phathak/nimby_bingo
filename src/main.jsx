import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { SubjectProvider } from "./contexts/subject_context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SubjectProvider>
        <App />
      </SubjectProvider>
    </BrowserRouter>
  </React.StrictMode>
);
