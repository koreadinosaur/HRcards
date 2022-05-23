import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/nav.module.css";

const Nav = ({ user, logout }) => {
  const navigate = useNavigate();
  const onlogout = () => {
    logout();
  };
  return (
    <ul className={styles.navContainer}>
      <li onClick={() => navigate("/")} className={styles.nav__item}>
        Home
      </li>
      {user ? (
        <li onClick={onlogout} className={styles.nav__item}>
          logout
        </li>
      ) : (
        <li onClick={() => navigate("/login")} className={styles.nav__item}>
          login
        </li>
      )}
    </ul>
  );
};

export default Nav;
