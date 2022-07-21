import { AnimatePresence } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import Detailcard from "../hrcard/detailcard";
import Hrcard from "../hrcard/hrcard";
import styles from "./hrcards.module.css";

const Hrcards = ({ database, userId }) => {
  const [cards, setCards] = useState({});
  const match = useMatch("/cards/:id");
  const cardId = match && match.params.id;
  useEffect(() => {
    database.getData((data) => {
      if (data === null) {
        return;
      }
      setCards(data);
    }, userId);
  }, [database, userId, cardId]);

  return (
    <section className={styles.hrcards}>
      {Object.keys(cards).map((key) => (
        <Hrcard card={cards[key]} key={key} />
      ))}
      <AnimatePresence>
        {cards[cardId] && <Detailcard id={cardId} card={cards[cardId]} />}
      </AnimatePresence>
    </section>
  );
};

export default Hrcards;
