import React from "react";
import styles from "./editor.module.css";
import Card from "../card/card";
import Addcardform from "../addcardform/addcardform";
import UpdateCardForm from "../updatecardform/updatecardform";

const Editor = ({ cards, onAdd, onDelete, onUpdate, onUpdateForm }) => {
  return (
    <section className={styles.editor}>
      {cards.map((card) => {
        if (card.update !== "true") {
          return (
            <Card
              card={card}
              key={card.id}
              onUpdateForm={onUpdateForm}
              onDelete={onDelete}
            />
          );
        } else {
          return (
            <UpdateCardForm
              card={card}
              key={card.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        }
      })}
      <Addcardform onAdd={onAdd} />
    </section>
  );
};

export default Editor;
