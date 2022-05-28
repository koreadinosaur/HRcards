import React from "react";
import styles from "./editor.module.css";
import Card from "../card/card";
const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </section>
  );
};

export default Editor;
