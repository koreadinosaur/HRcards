import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./app";
import Authentication from "./firebase/auth";
import firebase from "firebase";
import UploadFile from "./service/cloudinary/upload";

const upload = new UploadFile();
const Auth = new Authentication();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App auth={Auth} onUpload={upload} />
  </BrowserRouter>
);
