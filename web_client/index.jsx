import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

window.onload = function () {
  // Setting tab title
  document.title = "React demo";

  // We render the app
  ReactDOM.render(<App />, document.getElementById("root"));
};
