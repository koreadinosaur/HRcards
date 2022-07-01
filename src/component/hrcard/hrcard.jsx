import React, { useRef, useState } from "react";
import styles from "./hrcard.module.css";
import { motion } from "framer-motion";
import { MenuToggle } from "../animation/toggle";
import { useDimensions } from "../animation/use-dimentions";
import { Navigation } from "../animation/navigation";
import { Detail } from "../animation/detail";

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
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 30px 30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 25px 20px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Hrcard = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { name, company, theme, email, contact, department, url } = card;
  return (
    <div className={`${styles.preview} ${cardColor(theme)}`}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
        custom={height}
        className={styles.motionContainer}
      >
        <MenuToggle toggle={() => setIsOpen((isOpen) => !isOpen)} />
        <motion.div className={styles.background} variants={sidebar}>
          <Navigation />
        </motion.div>
      </motion.nav>
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
    </div>
  );
};

export default Hrcard;
