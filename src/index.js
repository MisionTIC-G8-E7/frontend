/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./views/Home";

ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid">
      {/* <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 /> */}
      <Home />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
