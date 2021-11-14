/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import { Router } from "react-router";

ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid">
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
