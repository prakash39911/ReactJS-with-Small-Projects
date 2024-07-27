import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// React Library basically reacts on Variable Updation and can update multiple things on the UI simultaneously.

// How to create element using React ---

const userName = "Hello World";

const createElement = React.createElement(
  // Html element given to react finally converted into this type of tree structure(Object)..
  // first parameter - element name, second parameter - attributes, third parameter- Actual Content, 4th Prameter-Variable Name

  "a",
  {
    href: "www.ggogle.co.in",
    target: "_blank",
  },
  "inner content",
  userName
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    createElement
  </React.StrictMode>
);
