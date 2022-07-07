import React from "react";
import styles from "./personalrecord.module.css";

const Education = (props) => {
  return (
    <section className={styles.education}>
      <div>
        <span>학력</span>
      </div>
      <ul>
        <li className={styles.school}>학교</li>
        <li>
          <span>OO중학교</span>
        </li>
        <li>
          <span>OO고등학교</span>
        </li>
        <li>
          <span>OO대학(교)</span>
        </li>
        <li>OO대학원</li>
      </ul>
      <ul>
        <li>
          <span>전공</span>
        </li>
        <li>
          <span>""</span>
        </li>
        <li>
          <span>""</span>
        </li>
        <li>
          <span>""</span>
        </li>
        <li>
          <span>""</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>졸업연월</span>
        </li>
        <li>
          <span>""</span>
        </li>
        <li>
          <span>""</span>
        </li>
        <li>
          <span>""</span>
        </li>
        <li>
          <span>""</span>
        </li>
      </ul>
    </section>
  );
};

export default Education;
