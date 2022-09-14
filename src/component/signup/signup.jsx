import React from "react";
import styles from "./signup.module.css";

const SignUp = (props) => {
  const checkPassword = (e) => {
    console.log(e.target.value);
  };
  return (
    <section className={styles.signUpPage}>
      <h1 className={styles.title}>Get started with your account</h1>
      <form className={styles.signUpFormContainer}>
        <div className={styles.signup__inputContainer}>
          <input
            type="text"
            className={styles.input}
            id="email"
            placeholder="Your Email"
          />
          <label className={styles.signup__inputLabel} htmlFor="email">
            Email
          </label>
        </div>
        <div className={styles.signup__inputContainer}>
          <input
            type="text"
            className={styles.input}
            id="username"
            placeholder="Your Uesrname"
          />
          <label className={styles.signup__inputLabel} htmlFor="username">
            Username
          </label>
        </div>
        <div className={styles.signup__inputContainer}>
          <input
            type="password"
            id="password"
            className={styles.input}
            placeholder="Your Password"
            onChange={checkPassword}
          />
          <label className={styles.signup__inputLabel} htmlFor="password">
            Password
          </label>
        </div>
        <div className={styles.signup__inputContainer}>
          <input
            type="password"
            id="confirm"
            className={styles.input}
            placeholder="confirm"
          />
          <label className={styles.signup__inputLabel} htmlFor="confirm">
            Confirm Password
          </label>
        </div>
        <ul className={styles.checkList}>
          <li className={`${styles.checkList__Item} ${styles.mismatch}`}>
            One lowercase character
          </li>
          <li className={`${styles.checkList__Item} ${styles.mismatch}`}>
            One special character
          </li>
          <li className={`${styles.checkList__Item} ${styles.mismatch}`}>
            One uppercase character
          </li>
          <li className={`${styles.checkList__Item} ${styles.mismatch}`}>
            8 characters minimum
          </li>
          <li className={`${styles.checkList__Item} ${styles.mismatch}`}>
            One number
          </li>
        </ul>
      </form>
    </section>
  );
};

export default SignUp;
