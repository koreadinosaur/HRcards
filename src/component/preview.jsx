import React from "react";
import styles from "../css/preview.module.css";
import PreviewCard from "./previewcard";

const Preview = ({ cards }) => {
  return (
    <div className={styles.preview}>
      {cards.map((card) => (
        <PreviewCard card={card} />
      ))}
    </div>
  );
};

export default Preview;
