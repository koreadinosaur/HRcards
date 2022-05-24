import "./app.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./component/login";
import Home from "./component/home";
import firebase from "firebase";
import Nav from "./component/nav";
import { useEffect, useState } from "react";

function App({ auth }) {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState();
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/");
      });
  };
  const isLogin = () => {
    auth.onAuthChange(setLoginUser);
    console.log(loginUser);
  };
  useEffect(() => isLogin);
  return (
    <div>
      <Nav logout={logout} user={loginUser} />
      <Routes>
        <Route path="/" element={<Home logout={logout} />} />
        <Route path="/login" element={<Login auth={auth} />} />
      </Routes>
    </div>
  );
}

export default App;
