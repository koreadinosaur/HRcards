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
      <div className={styles.imgContainer}>
        <img src={url} alt="" />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.company}>{department}</span>
        <span className={styles.department}>{position}</span>
        <span className={styles.email}>{email}</span>
        <span className={styles.contact}>{contact}</span>
      </div>
    </section>
  );
});

export default PreviewCard;
