import styles from "./app.module.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./component/login";
import Home from "./component/home";
import Cardmaker from "./component/cardmaker";
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
      <header className={styles.header}>
        <Nav logout={logout} user={loginUser} />
      </header>
      <Routes>
        <Route path="/" element={<Home logout={logout} />} />
        <Route path="/login" element={<Login auth={auth} />} />
        <Route path="/maker" element={<Cardmaker />} />
      </Routes>
    </div>
  );
}

export default App;
