import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = ({ user, logout }) => {
  const navigate = useNavigate();
  const onlogout = () => {
    logout();
  };
  return (
    <section className={styles.header}>
      <div>
        <FontAwesomeIcon
          onClick={() => navigate("/")}
          icon={faAddressCard}
          className={styles.icon}
        />
      </div>

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
        <li onClick={() => navigate("/maker")} className={styles.nav__item}>
          card maker
        </li>
      </ul>
    </section>
  );
};

export default Header;
