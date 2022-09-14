import React from "react";
import { useState } from "react";
import styles from "./signup.module.css";

const SignUp = (props) => {
  const [validation, setValidation] = useState({});
  const checkUsername = (e) => {
    const inputValue = e.target.value;
    if (/[0-9a-zA-z]{4,16}/.test(inputValue) && !validation.username) {
      setValidation({ ...validation, username: true });
    } else if (!/[0-9a-zA-z]{4,16}/.test(inputValue) && validation.username) {
      setValidation({ ...validation, username: false });
    }
  };
  const checkPassword = (e) => {
    /* 의사코드 */
    const inputValue = e.target.value;
    if (
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,}$/.test(inputValue) &&
      !validation.character
    ) {
      setValidation({ ...validation, character: true });
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,}$/.test(
        inputValue
      ) &&
      validation.character
    ) {
      setValidation({ ...validation, character: false });
    }
    console.log(inputValue.length);
    if (inputValue.length >= 8 && !validation.length) {
      setValidation({ ...validation, length: true });
    } else if (inputValue.length < 8 && validation.length) {
      setValidation({ ...validation, length: false });
    }

    console.log(inputValue);
    console.log(validation);
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
            onChange={checkUsername}
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
          <li
            className={`${
              validation.username ? styles.match : styles.mismatch
            } ${styles.checkList__Item} ${styles.mismatch}`}
          >
            username is at least 4 character
          </li>
          <li
            className={`${validation.length ? styles.match : styles.mismatch} ${
              styles.checkList__Item
            } ${styles.mismatch}`}
          >
            8 characters minimum
          </li>
          <li
            className={`${
              validation.character ? styles.match : styles.mismatch
            } ${styles.checkList__Item}`}
          >
            inclunding number and special character
          </li>
        </ul>
      </form>
    </section>
  );
};

export default SignUp;
