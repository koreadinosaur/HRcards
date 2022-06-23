import React, { useEffect, useState } from "react";
import styles from "./cardmaker.module.css";
import Editor from "../card_editor/editor";
import Preview from "../preview/preview";

const Cardmaker = ({ onUpload, database, userId }) => {
  const [cards, setCards] = useState([
    {
      name: "기본",
      company: "기본",
      theme: "기본",
      email: "기본",
      message: "기본",
      department: "기본",
      id: 123123,
      update: "false",
      fileName: null,
    },
  ]);
  const cardsFromDB = () => {
    console.log("cardsFromDb");
    database.getData((data) => setCards(data), userId);
  };

  const addCards = (card) => {
    const newCards = [...cards, card];
    console.log(newCards);
    console.log(card);
    setCards(newCards);
    database.addData(card, userId);
  };
  const deleteCard = (card) => {
    // const newCards = cards.filter((item) => item.id !== card.id);
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
    console.log("updated");
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
