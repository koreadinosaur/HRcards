import * as React from "react";
import { motion } from "framer-motion";
import styles from "../hrcard/hrcard.module.css";
import Basic from "./basic";
import Certificate from "./certificate";
import Physical from "./physical";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const PersonalRecord = () => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.listContainer}
    >
      <Basic />
      <Certificate />
      <Physical />
    </motion.li>
  );
};
