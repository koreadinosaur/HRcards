import React from "react";
import styles from "./personalrecord.module.css";

const Entry = ({ card }) => {
  const { department, position } = card;
  return (
    <section className={styles.entry}>
      <div>
        <span>입사</span>
      </div>
      <ul className={styles.container}>
        <li className={styles.list}>
          <div>
            <span>입사일자</span>
          </div>
          <div>
            <span>직위</span>
          </div>
        </li>
        <li className={styles.blank}>
          <div>
            <span>""</span>
          </div>
          <div>
            <span>{position ? position : "미입력"}</span>
          </div>
        </li>
        <li className={styles.list}>
          <div>
            <span>부서</span>
          </div>
          <div>
            <span>비고</span>
          </div>
        </li>
        <li className={styles.blank}>
          <div>
            <span>{department ? department : "미입력"}</span>
          </div>
          <div>
            <span>""</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Entry;
