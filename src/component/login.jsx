import React from "react";
import Nav from "./nav.jsx";
import styles from "../css/login.module.css";

const Login = (props) => {
  return (
    <section>
      <Nav />
      <form action="" type="submit" className={styles.form}>
        <span className={styles.title}>Login</span>
        <input
          type="text"
          placeholder="type username"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="type password"
          className={styles.input}
        />
        <button className={styles.button}>login</button>
      </form>
    </section>
  );
};

export default Login;
