import React from "react";
import styles from "./personalrecord.module.css";

const Entry = (props) => {
  return (
    <section className={styles.entry}>
      <div>
        <span>입사</span>
      </div>
      <ul className={styles.container}>
        <li className={styles.nameType}>
          <span>일자</span>
          <span>직위</span>
        </li>
        <li className={styles.nameType}>
          <span>""</span>
          <span>""</span>
        </li>
        <li className={styles.birth}>
          <span>부서</span>
          <span>ㅁㅁ</span>
        </li>
        <li className={styles.birth}>
          <span>""</span>
          <span>""</span>
        </li>
      </ul>
    </section>
  );
};

export default Entry;
