import React from "react";
import styles from "./hrcard.module.css";

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

const Hrcard = ({ card }) => {
  const { name, company, theme, email, contact, department, url } = card;
  return (
    <section className={`${styles.preview} ${cardColor(theme)}`}>
      <div className={styles.imgContainer}>
        <img src={url} alt="" />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.company}>{company}</span>
        <span className={styles.department}>{department}</span>
        <span className={styles.email}>{email}</span>
        <span className={styles.contact}>"{contact}"</span>
      </div>
    </section>
  );
};

export default Hrcard;
