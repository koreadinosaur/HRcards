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
    },
    {
      id: "2",
      name: "khj",
      company: "kakao",
      department: "frontend",
      email: "khj7741@gamil.com",
      message: "hi, i am hyeoung jin",
      theme: "pink",
    },
  ]);
  const addCards = (card) => {
    const newCards = [...cards, card];
    setCards(newCards);
  };

  return (
    <section className={styles.cardMakerContainer}>
      <Editor onAdd={addCards} cards={cards} />
      <Preview cards={cards} />
    </section>
  );
};

export default Cardmaker;
