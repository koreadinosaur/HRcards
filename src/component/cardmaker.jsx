import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import styles from "../css/cardmaker.module.css";
import Editor from "./editor";
import Preview from "./preview";
const Cardmaker = (props) => {
  const cards = [
    {
      name: "khj",
      company: "kakao",
      department: "frontend",
      email: "khj7741@gamil.com",
      introduction: "hi, i am hyeoung jin",
    },
    {
      name: "khj",
      company: "kakao",
      department: "frontend",
      email: "khj7741@gamil.com",
      introduction: "hi, i am hyeoung jin",
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
