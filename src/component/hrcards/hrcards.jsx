import React from "react";
import { useEffect, useState } from "react";
import Hrcard from "../hrcard/hrcard";
import styles from "./hrcards.module.css";

const Hrcards = ({ database, userId }) => {
  const [cards, setCards] = useState({});
  useEffect(() => {
    database.getData((data) => {
      if (data === null) {
        return;
      }
      setCards(data);
    }, userId);
  }, [database, userId]);

  return (
    <div className={styles.hrcards}>
      {Object.keys(cards).map((key) => (
        <Hrcard card={cards[key]} key={key} />
      ))}
    </div>
  );
};

export default Hrcards;
