import React, { useCycle, useState } from "react";
import styles from "./hrcard.module.css";
import { motion } from "framer-motion";
import { MenuToggle } from "../animation/toggle";

const cardColor = (theme) => {
  switch (theme) {
    case "dark":
      return styles.black;
    case "white":
      return styles.white;
    case "pink":
      return styles.pink;
  }
};

const Hrcard = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, company, theme, email, contact, department, url } = card;
  return (
    <div className={`${styles.preview} ${cardColor(theme)}`}>
      <div className={styles.imgContainer}>
        <img src={url} alt="" />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.company}>{company}</span>
        <span className={styles.department}>{department}</span>
        <span className={styles.email}>{email}</span>
        <span className={styles.contact}>"{contact}"</span>
      </div>
      <motion.nav>
        <MenuToggle toggle={() => setIsOpen((isOpen) => !isOpen)} />
      </motion.nav>
    </div>
  );
};

export default Hrcard;
