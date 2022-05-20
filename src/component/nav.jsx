import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/nav.module.css";

const Nav = (props) => {
  const navigate = useNavigate();
  return (
    <ul className={styles.navContainer}>
      <li onClick={() => navigate("/")} className={styles.nav__item}>
        Home
      </li>
      <li onClick={() => navigate("/login")} className={styles.nav__item}>
        login
      </li>
    </ul>
  );
};

export default Nav;
