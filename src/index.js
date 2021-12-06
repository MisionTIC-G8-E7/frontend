/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import "./index.css";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { firebase } from "./firebase/firebase-config"
import { login } from "./actions/auth";


ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
