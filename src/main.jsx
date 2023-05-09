import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { SubjectProvider } from "./contexts/subject_context";
import {ScoreProvider} from "./contexts/score_context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScoreProvider>
          <SubjectProvider>
            <App />
          </SubjectProvider>
      </ScoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
