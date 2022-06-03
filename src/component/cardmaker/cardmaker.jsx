import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";
import styles from "./cardmaker.module.css";
import Editor from "../card_editor/editor";
import Preview from "../preview/preview";
const Cardmaker = (props) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "khj",
      company: "kakao",
      department: "frontend",
      email: "khj7741@gamil.com",
      message: "hi, i am hyeoung jin",
      theme: "dark",
      update: "false",
    },
    {
      id: "2",
      name: "khj",
      company: "kakao",
      department: "frontend",
      email: "khj7741@gamil.com",
      message: "hi, i am hyeoung jin",
      theme: "pink",
      update: "flase",
    },
  ]);
  const addCards = (card) => {
    const newCards = [...cards, card];
    setCards(newCards);
  };
  const deleteCard = (cardId) => {
    const newCards = cards.filter((item) => item.id !== cardId);
    setCards(newCards);
  };
  const changeToForm = (cardId) => {
    const newCards = [...cards];
    const findIndex = newCards.findIndex((card) => card.id == cardId);
    if (findIndex != -1) {
      newCards[findIndex] = { ...newCards[findIndex], update: "true" };
    }
    console.log(newCards);
    setCards(newCards);
  };

  const handleUpdate = (cardId, obj) => {
    const newCards = [...cards];
    const findIndex = newCards.findIndex((card) => card.id == cardId);
    if (findIndex != -1) {
      newCards[findIndex] = { ...obj };
    }
    setCards(newCards);
    console.log(newCards);
  };

  return (
    <section className={styles.cardMakerContainer}>
      <Editor
        onAdd={addCards}
        cards={cards}
        onDelete={deleteCard}
        onUpdateForm={changeToForm}
        onUpdate={handleUpdate}
      />
      <Preview cards={cards} />
    </section>
  );
};

export default Cardmaker;
