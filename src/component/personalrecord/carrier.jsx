import React from "react";
import styles from "./personalrecord.module.css";

const Carrier = (props) => {
  return (
    <section className={styles.carrier}>
      <div>
        <span>경력</span>
      </div>
      <ul>
        <li>재직기간</li>
        <li>""</li>
        <li>""</li>
        <li>""</li>
        <li>""</li>
        <li>""</li>
      </ul>
      <ul>
        <li>직장명</li>
        <li>""</li>
        <li>""</li>
        <li>""</li>
        <li>""</li>
        <li>""</li>
      </ul>
      <ul>
        <li>직위</li>
        <li>""</li>
        <li>""</li>
        <li>""</li>
        <li>""</li>
        <li>""</li>
      </ul>
    </section>
  );
};

export default Carrier;
