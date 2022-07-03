import * as React from "react";
import { motion } from "framer-motion";
import styles from "../hrcard/hrcard.module.css";

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
      <div>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" />
        <label htmlFor="department">부서</label>
        <input type="text" id="department" />
      </div>
      <div>
        <label htmlFor="position">직책</label>
        <input type="text" id="position" />
        <label htmlFor="email">이메일</label>
        <input type="text" id="email" />
      </div>
      <div>
        <label htmlFor="entry">입사연도</label>
        <input type="text" id="entry" />
      </div>
    </motion.li>
  );
};
