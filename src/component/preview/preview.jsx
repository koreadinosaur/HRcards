import React, { memo } from "react";
import styles from "./preview.module.css";
import PreviewCard from "../preview_card/previewcard";

const Preview = memo(({ cards }) => {
  return (
    <div className={styles.preview}>
      {Object.keys(cards).map((key) => (
        <PreviewCard card={cards[key]} key={key} />
      ))}
    </div>
  );
});

export default Preview;
