import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import Home from "./component/home";
import Authentication from "./firebase/auth";

function App({ auth }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login auth={auth} />} />
    </Routes>
  );
}

export default App;
