import React, { useEffect } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Login = ({ auth }) => {
  const navigate = useNavigate();
  const authLogin = (event) => {
    auth.login("Google").then(console.log);
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
    <div className={styles.loginPage}>
      <div className={styles.logoContainer}>
        <span>
          <FontAwesomeIcon icon={faAddressCard} className={styles.icon} />
        </span>
        <span className={styles.logoTitle}>make your business card</span>
      </div>
      <section className={styles.formContainer}>
        <form action="" type="submit" className={styles.form}>
          <span className={styles.title}>Log In</span>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            placeholder="type username"
            id="username"
            className={styles.input}
          />
          <label htmlFor="password" className={styles.label}>
            Password
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
            <FontAwesomeIcon
              icon={faGoogle}
              className={styles.googleIcon}
            ></FontAwesomeIcon>
            sign in Google
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
