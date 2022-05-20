import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import Home from "./component/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
