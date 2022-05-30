import React from "react";
import styles from "./editor.module.css";
import Card from "../card/card";
import Addcardform from "../addcardform/addcardform";
const Editor = ({ cards, onAdd, onDelete }) => {
  return (
    <section className={styles.editor}>
      {cards.map((card) => (
        <Card card={card} key={card.id} onDelete={onDelete} />
      ))}
      <Addcardform onAdd={onAdd} />
    </section>
  );
};

export default Editor;
