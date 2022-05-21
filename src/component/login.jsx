import React from "react";
import Nav from "./nav.jsx";
import styles from "../css/login.module.css";

const Login = (props) => {
  return (
    <section>
      <Nav />
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
        <div>google</div>
      </form>
    </section>
  );
};

export default Login;
