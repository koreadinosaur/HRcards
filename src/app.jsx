import styles from "./app.module.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./component/login/login";
import Home from "./component/home";
import Cardmaker from "./component/cardmaker/cardmaker";
import firebase from "firebase";
import Header from "./component/header/header";
import { useEffect, useState } from "react";
import Footer from "./component/footer/footer";

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
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <Header logout={logout} user={loginUser} />
      </header>
      <section className={styles.main}>
        <Routes>
          <Route path="/" element={<Home logout={logout} />} />
          <Route path="/login" element={<Login auth={auth} />} />
          <Route path="/maker" element={<Cardmaker />} />
        </Routes>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
