import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import styles from "./cardmaker.module.css";
import Editor from "../card_editor/editor";
import Preview from "../preview/preview";
const Cardmaker = (props) => {
  const cards = [
    {
      name: "khj",
      company: "kakao",
      department: "frontend",
      email: "khj7741@gamil.com",
      message: "hi, i am hyeoung jin",
      theme: "dark",
    },
    {
      name: "khj",
      company: "kakao",
      department: "frontend",
      email: "khj7741@gamil.com",
      message: "hi, i am hyeoung jin",
      theme: "pink",
    },
  ];
  return (
    <section className={styles.cardMakerContainer}>
      <Editor cards={cards} />
      <Preview cards={cards} />
    </section>
  );
};

export default Cardmaker;
