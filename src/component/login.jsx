import React, { useEffect } from "react";
import Nav from "./nav.jsx";
import styles from "../css/login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ auth }) => {
  const navigate = useNavigate();
  const authLogin = (event) => {
    auth.login(event.currentTarget.textContent).then(console.log);
  };
  const goToHome = (user) => {
    if (user) {
      navigate("/");
    }
  };
  useEffect(() => {
    auth.onAuthChange(goToHome);
  });
  return (
    <section className={styles.formContainer}>
      <form action="" type="submit" className={styles.form}>
        <span className={styles.title}>Login</span>
        <label htmlFor="username" className={styles.label}>
          username
        </label>
        <input
          type="text"
          placeholder="type username"
          id="username"
          className={styles.input}
        />
        <label htmlFor="password" className={styles.label}>
          password
        </label>
        <input
          type="password"
          placeholder="type password"
          id="password"
          className={styles.input}
        />
        <button className={styles.button}>login</button>
      </form>
      <div className={styles.authLoginContainer}>
        <button className={styles.googleLogin} onClick={authLogin}>
          Google
        </button>
      </div>
    </section>
  );
};

export default Login;
