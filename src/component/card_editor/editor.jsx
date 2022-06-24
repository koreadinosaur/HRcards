import React, { useEffect, memo } from "react";
import styles from "./editor.module.css";
import Card from "../card/card";
import Addcardform from "../addcardform/addcardform";
import UpdateCardForm from "../updatecardform/updatecardform";

const Editor = memo(
  ({
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
      cardsFromDB();
    }, [userId, database]);
    return (
      <section className={styles.editor}>
        {Object.keys(cards).map((key) => {
          if (cards[key].update !== true) {
            return (
              <Card
                card={cards[key]}
                key={key}
                onUpdateForm={onUpdateForm}
                onDelete={onDelete}
                database={database}
              />
            );
          } else {
            return (
              <UpdateCardForm
                card={cards[key]}
                key={key}
                onUpdate={onUpdate}
                onDelete={onDelete}
                onUpload={onUpload}
                database={database}
                userId={userId}
              />
            );
          }
        })}
        <Addcardform onAdd={onAdd} onUpload={onUpload} />
      </section>
    );
  }
);

export default Editor;
