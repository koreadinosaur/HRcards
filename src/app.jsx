import styles from "./app.module.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./component/login/login";
import Home from "./component/home/home";
import Cardmaker from "./component/cardmaker/cardmaker";
import Header from "./component/header/header";
import { useEffect, useState } from "react";
import Footer from "./component/footer/footer";
import Hrcards from "./component/hrcards/hrcards";

function App({ auth, onUpload, database }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginUser, setLoginUser] = useState(location && location.state);
  const logout = () => {
    auth.logout(() => navigate("/"));
    setLoginUser(null);
  };
  const isLogin = () => {
    auth.onAuthChange(setLoginUser);
  };

  useEffect(() => isLogin, [auth, loginUser, location]);
  return (
    <section className={styles.appContainer}>
      <header className={styles.header}>
        <Header logout={logout} user={loginUser} />
      </header>
      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login auth={auth} />} />
          <Route
            path="/maker"
            element={
              <Cardmaker
                userId={loginUser ? loginUser.uid : null}
                database={database}
                onUpload={onUpload}
              />
            }
          />
          <Route
            path="/cards"
            element={
              <Hrcards
                database={database}
                userId={loginUser ? loginUser.uid : null}
              />
            }
          />
        </Routes>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
}

export default App;
