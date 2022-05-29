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
        <span>{department}</span>
        <span>{email}</span>
      </div>
      <div className={styles.row}>
        <span>"{message}"</span>
      </div>
      <div className={styles.row}>
        <span className={`${styles.fileName} ${styles.row4Element}`}>
          {name}
        </span>
        <button className={`${styles.delete} ${styles.row4Element}`}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default Card;
