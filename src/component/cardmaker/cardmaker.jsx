import React, { useEffect, useState } from "react";
import styles from "./cardmaker.module.css";
import Editor from "../card_editor/editor";
import Preview from "../preview/preview";

const Cardmaker = ({ onUpload, database, userId }) => {
  const [cards, setCards] = useState([
    {
      name: "김형진",
      company: "무직",
      theme: "pink",
      email: "비밀",
      message: "반갑습니다",
      department: "개발",
      id: 123123,
      update: "false",
      fileName: null,
    },
  ]);
  const cardsFromDB = (cards) => {
    setCards(cards);
    console.log(cards);
  };

  const addCards = (card) => {
    const newCards = [...cards, card];
    console.log(newCards);
    console.log(card);
    setCards(newCards);
    database.addData(card, userId);
  };
  const deleteCard = (card) => {
    // const newCards = cards.filter((item) => item.id !== cardId);
    // setCards(newCards);
    database.delete(card, userId);
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
};

export default Cardmaker;
