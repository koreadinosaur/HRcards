import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.module.css";
import App from "./app";
import Authentication from "./firebase/auth";
import firebase from "firebase";

const Auth = new Authentication();
const User = firebase.auth().currentUser;
console.log(User);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App auth={Auth} user={User} />
  </BrowserRouter>
);
