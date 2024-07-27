import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// CreateRoot method basically creates Virtual DOM like structure. it compare it's DOM structure with the Browser's DOM, and Update the UI only where changes occured.
// Browsers DOM recreates the DOM structure Completely if any changes occured. THis is called Page reload.

// Virtual DOM gets updated based on Fiber Algorithm.

// Reconciliation is the algorithm known as Virtual-DOM.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
