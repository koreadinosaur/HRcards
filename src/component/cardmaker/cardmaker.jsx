import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import styles from "./cardmaker.module.css";
import Editor from "../card_editor/editor";
import Preview from "../preview/preview";
import imgUrl from "../../img/favicon.ico";

const Cardmaker = ({ onUpload, database }) => {
  const [cards, setCards] = useState([]);
  const dbToCards = (cards) => {
    setCards(cards);
  };

  const addCards = (card) => {
    const newCards = [...cards, card];
    setCards(newCards);
    database.addData(card);
  };
  const deleteCard = (cardId) => {
    const newCards = cards.filter((item) => item.id !== cardId);
    setCards(newCards);
    database.delete(cardId);
  };
  const changeToForm = (cardId) => {
    const newCards = [...cards];
    const findIndex = newCards.findIndex((card) => card.id == cardId);
    if (findIndex != -1) {
      newCards[findIndex] = { ...newCards[findIndex], update: "true" };
    }
    setCards(newCards);
  };

  const handleUpdate = (cardId, obj) => {
    const newCards = [...cards];
    const findIndex = newCards.findIndex((card) => card.id == cardId);
    if (findIndex != -1) {
      newCards[findIndex] = { ...obj };
    }
    setCards(newCards);
  };

  return (
    <section className={styles.cardMakerContainer}>
      <Editor
        onAdd={addCards}
        cards={cards}
        onDelete={deleteCard}
        onUpdateForm={changeToForm}
        onUpdate={handleUpdate}
        onUpload={onUpload}
        database={database}
        getFirestoreDB={dbToCards}
      />
      <Preview cards={cards} />
    </section>
  );
};

export default Cardmaker;
