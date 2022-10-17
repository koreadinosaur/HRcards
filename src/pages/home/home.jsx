import React from "react";
import styles from "./home.module.css";

import logo from "../../img/newlogo.png";
const Home = ({ logout }) => {
  return (
    <div>
      <header className={styles.home__header}>
        <div className={styles.logo_box}>
          <img src={logo} alt="hrcards" className={styles.logo} />
        </div>
        <div className={styles.text_box}>
          <h1 className={styles.heading_primary}>
            <span className={styles.heading_primary_main}>concentrate</span>
            <span className={styles.heading_primary_sub}>
              your own core business
            </span>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Home;
