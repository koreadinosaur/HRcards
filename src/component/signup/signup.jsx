import React from "react";
import styles from "./signup.module.css";

const SignUp = (props) => {
  const checkPassword = (e) => {
    console.log(e.target.value);
  };
  return (
    <section className={styles.signUpPage}>
      <h1>Welcome to P.R. Manager</h1>
      <form className={styles.signUpFormContainer}>
        <input type="text" className={styles.input} placeholder="Your Id" />
        <input
          type="text"
          className={styles.input}
          placeholder="Your Password"
          onChange={checkPassword}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Password Retype"
        />
      </form>
    </section>
  );
};

export default SignUp;
