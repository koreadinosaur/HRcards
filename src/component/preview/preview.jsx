import React from "react";
import styles from "./preview.module.css";
import PreviewCard from "../preview_card/previewcard";

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
