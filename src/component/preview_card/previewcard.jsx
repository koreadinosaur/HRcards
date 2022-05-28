import React from "react";
import styles from "./previewcard.module.css";

const cardColor = (theme) => {
  switch (theme) {
    case "dark":
      return styles.black;
    case "white":
      return styles.white;
    case "pink":
      return styles.pink;
  }
};

const PreviewCard = ({ card }) => {
  const { name, company, theme, email, message, department } = card;

  return (
    <section className={`${styles.preview} ${cardColor(theme)}`}>
      <div className={styles.imgContainer}>
        <img src={require("../../img/favicon.ico")} alt="" />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.company}>{company}</span>
        <span className={styles.department}>{department}</span>
        <span className={styles.email}>{email}</span>
        <span className={styles.message}>"{message}"</span>
      </div>
    </section>
  );
};

export default PreviewCard;
