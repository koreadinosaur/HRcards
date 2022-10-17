import React from "react";
import styles from "./homeheaderbtn.module.css";
const Homeheaderbtn = (props) => {
  return (
    <div className={styles.btnContainer}>
      <a href="#" className={`${styles.btn} ${styles.btn_white}`}>
        overview our service
      </a>
    </div>
  );
};

export default Homeheaderbtn;
