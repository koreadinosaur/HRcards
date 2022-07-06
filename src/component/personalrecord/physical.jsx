import React from "react";
import styles from "./personalrecord.module.css";

const Physical = (props) => {
  return (
    <section className={styles.physical}>
      <div>
        <span>신 체</span>
      </div>
      <ul>
        <li>
          <span>신장</span>
          <div className={styles.centimeter}>
            <span>cm</span>
          </div>
        </li>
        <li>
          <span>시력</span>
          <div>
            <span>좌 / 우</span>
          </div>
        </li>
        <li>
          <span>혈액형</span>
          <div>
            <span>""</span>
          </div>
        </li>
        <li>
          <span>색맹</span>
          <div>
            <span>유/무</span>
          </div>
        </li>
        <li>
          <span>병력</span>
          <div>
            <span>병력없음</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Physical;
