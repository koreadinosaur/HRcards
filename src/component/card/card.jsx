import { faBlackberry } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  const { name, company, theme, email, message, department } = card;

  return (
    <section className={styles.cardContainer}>
      <div className={styles.row}>
        <span className={styles.name}>{name}</span>
        <span className={styles.company}>{company}</span>
        <select>
          <option value="dark">dark</option>
          <option value="white">white</option>
        </select>
      </div>
      <div className={styles.row}>
        <span className={styles.row2Element}>{department}</span>
        <span className={styles.row2Element}>{email}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.row3Element}>"{message}"</span>
      </div>
      <div className={styles.row}>
        <span className={`${styles.fileName} ${styles.row4Element}`}>
          {name}
        </span>
        <span className={`${styles.delete} ${styles.row4Element}`}>Delete</span>
      </div>
    </section>
  );
};

export default Card;
