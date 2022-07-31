import React, { memo } from "react";
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

const PreviewCard = memo(({ card }) => {
  const { name, position, theme, email, contact, department, url } = card;

  return (
    <section className={`${styles.preview} ${cardColor(theme)}`}>
      <span className={styles.department}>{department || "미입력"}</span>
      <div className={styles.imgContainer}>
        <img src={url} alt="" />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name || "미입력"}</span>
        <span className={styles.position}>{position || "미입력"}</span>
        <span className={styles.email}>{email || "미입력"}</span>
        <span className={styles.contact}>{contact || "미입력"}</span>
      </div>
    </section>
  );
});

export default PreviewCard;
