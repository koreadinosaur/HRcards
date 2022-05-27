import React from "react";
import styles from "../css/previewcard.module.css";

const PreviewCard = ({ card }) => {
  return (
    <section className={styles.preview}>
      <div className={styles.imgContainer}>
        <img src={require("../img/favicon.ico")} alt="" />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{card.name}</span>
        <span className={styles.company}>{card.company}</span>
        <span className={styles.department}>{card.department}</span>
        <span className={styles.email}>{card.email}</span>
        <span className={styles.introduction}>"{card.introduction}"</span>
      </div>
    </section>
  );
};

export default PreviewCard;
