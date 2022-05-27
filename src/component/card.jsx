import React from "react";
import styles from "../css/card.module.css";

const Card = ({ card }) => {
  return (
    <section className={styles.cardContainer}>
      <div className={styles.row}>
        <span className={styles.row1Element}>{card.name}</span>
        <span className={styles.row1Element}>{card.company}</span>
        <select className={styles.row1Element}>
          <option value="dark">dark</option>
          <option value="white">white</option>
        </select>
      </div>
      <div className={styles.row}>
        <span className={styles.row2Element}>{card.department}</span>
        <span className={styles.row2Element}>{card.email}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.row3Element}>{card.introduction}</span>
      </div>
      <div className={styles.row}>
        <span className={[styles.row4Element, styles.fileName].join(" ")}>
          {card.name}
        </span>
        <span className={[styles.row4Element, styles.delete].join(" ")}>
          Delete
        </span>
      </div>
    </section>
  );
};

export default Card;