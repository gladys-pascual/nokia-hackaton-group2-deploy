import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// import "./Fonts/NokiaPureTWeb_Bd.ttf";
// import "./Fonts/NokiaPureTWeb_Lt.ttf";
// import "./Fonts/NokiaPureTWeb_Rg.ttf";
// import "./Fonts/NokiaPureHeadline_Lt.ttf";
// import "./Fonts/NokiaPureHeadline_Rg.ttf";
// import "./Fonts/NokiaPureHeadline_BD.ttf";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
