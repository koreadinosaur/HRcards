import React, { useEffect } from "react";
import styles from "./editor.module.css";
import Card from "../card/card";
import Addcardform from "../addcardform/addcardform";
import UpdateCardForm from "../updatecardform/updatecardform";

const Editor = ({
  cards,
  onAdd,
  onDelete,
  onUpdate,
  onUpdateForm,
  onUpload,
  database,
  cardsFromDB,
  userId,
}) => {
  useEffect(() => {
    if (!userId) {
      return;
    }
    database.getData(cardsFromDB, userId);
  }, [userId]);
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
              database={database}
            />
          );
        } else {
          return (
            <UpdateCardForm
              card={card}
              key={card.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
              onUpload={onUpload}
            />
          );
        }
      })}
      <Addcardform onAdd={onAdd} onUpload={onUpload} />
    </section>
  );
};

export default Editor;
