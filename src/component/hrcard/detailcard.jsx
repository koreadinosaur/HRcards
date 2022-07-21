import React, { memo } from "react";
import styles from "./hrcard.module.css";
import { motion } from "framer-motion";
import { PersonalRecord } from "../personalrecord/personalrecord";
import { Link } from "react-router-dom";

const Detailcard = memo(({ card, id }) => {
  const { name, company, theme, email, contact, department, url } = card;
  console.log(id);
  return (
    <section className={`${styles.detailContainer} styles.${theme}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className={styles.linkContainer}
      >
        <Link to="/cards" />
      </motion.div>
      <motion.div
        className={`${styles.cardRecordContainer} ${styles.open}`}
        layoutId={`cardContainer-${id}`}
      >
        <div className={styles.imgContainer}>
          <img src={url} alt="" />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>{name || "미입력"}</span>
          <span className={styles.company}>{company || "미입력"}</span>
          <span className={styles.department}>{department || "미입력"}</span>
          <span className={styles.email}>{email || "미입력"}</span>
          <span className={styles.contact}>"{contact || "미입력"}"</span>
        </div>
        <motion.div className={styles.recordContainer} animate>
          <PersonalRecord card={card} className={styles.personalRecord} />
        </motion.div>
      </motion.div>
    </section>
  );
});

export default Detailcard;
