import styles from "./app.module.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./component/login/login";
import Home from "./component/home";
import Cardmaker from "./component/cardmaker/cardmaker";
import firebase from "firebase";
import Header from "./component/header/header";
import { useEffect, useState } from "react";
import Footer from "./component/footer/footer";

function App({ auth, onUpload, database }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginUser, setLoginUser] = useState(location && location.state);
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/");
      });
    setLoginUser(null);
  };
  const isLogin = () => {
    auth.onAuthChange(setLoginUser);
    console.log(loginUser);
  };
  console.log("Location : " + location.state);
  useEffect(() => isLogin);
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
        </Routes>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
}

export default App;
