import React from "react";
import styles from "../css/cardmaker.module.css";

const Cardmaker = (props) => {
  return (
    <section className={styles.cardMakerContainer}>
      <div className={styles.cardMaker}>
        <div>Card Maker</div>
      </div>
      <div className={styles.cardPreview}>
        <div>Card Preview</div>
      </div>
    </section>
  );
};

export default Cardmaker;
