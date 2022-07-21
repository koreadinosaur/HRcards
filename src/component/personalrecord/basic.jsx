import React from "react";
import styles from "./personalrecord.module.css";

const Basic = ({ card }) => {
  const { name } = card;
  return (
    <section className={styles.basic}>
      <ul className={styles.container}>
        <li className={styles.nameType}>
          <span>이름(국문)</span>
          <span>이름(한문)</span>
        </li>
        <li className={styles.nameType}>
          <span>{name || "미입력"}</span>
          <span>""</span>
        </li>
        <li className={styles.birth}>
          <span>생년월일</span>
          <span>성별</span>
        </li>
        <li className={styles.birth}>
          <span>""</span>
          <span>""</span>
        </li>
      </ul>
      <div className={styles.address}>
        <span>주소</span>
        <span>""</span>
      </div>
    </section>
  );
};

export default Basic;
