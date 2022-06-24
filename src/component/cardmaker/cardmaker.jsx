import React, { useEffect, useState, memo } from "react";
import styles from "./cardmaker.module.css";
import Editor from "../card_editor/editor";
import Preview from "../preview/preview";
import { useCallback } from "react";

const Cardmaker = memo(({ onUpload, database, userId }) => {
  const [cards, setCards] = useState({ 1: { name: "형진" } });
  const cardsFromDB = useCallback(() => {
    console.log("cardsFromDb");
    database.getData((data) => setCards(data), userId);
  }, [database]);
  console.log(cards);
  const addCards = (card) => {
    const newCards = { ...cards, [card.id]: card };
    setCards(newCards);
    database.addData(card, userId);
  };
  const deleteCard = (card) => {
    // const newCards = cards.filter((item) => item.id !== card.id);
    // setCards(newCards);
    database.delete(card, userId);
  };
  const changeToForm = (cardId) => {
    setCards((cards) => {
      const newCards = { ...cards };
      newCards[cardId].update = true;
      return newCards;
    });
  };

  const handleUpdate = (card) => {
    setCards((cards) => {
      const newCards = { ...cards };
      newCards[card.id] = card;
      return newCards;
    });
  };

  return (
    <section className={styles.cardMakerContainer}>
      <Editor
        userId={userId}
        onAdd={addCards}
        cards={cards}
        onDelete={deleteCard}
        onUpdateForm={changeToForm}
        onUpdate={handleUpdate}
        onUpload={onUpload}
        database={database}
        cardsFromDB={cardsFromDB}
      />
      <Preview cards={cards} />
    </section>
  );
});

export default Cardmaker;
