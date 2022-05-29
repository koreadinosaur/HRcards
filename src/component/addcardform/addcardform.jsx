import React, { createRef } from "react";
import styles from "./addcardform.module.css";

const Addcardform = ({ onAdd }) => {
  const formRef = React.createRef();
  const addCard = (event) => {
    event.preventDefault();
    const id = new Date();
    const name = formRef.current[0].value;
    const company = formRef.current[1].value;
    const theme = formRef.current[2].value;
    const department = formRef.current[3].value;
    const email = formRef.current[4].value;
    const message = formRef.current[5].value;
    const newObj = { id, name, company, theme, department, email, message };
    console.log(newObj);
    onAdd(newObj);
  };
  return (
    <form ref={formRef} onSubmit={addCard} className={styles.cardContainer}>
      <div className={styles.row}>
        <input type="text" />
        <input type="text" />
        <select>
          <option value="dark">dark</option>
          <option value="white">white</option>
        </select>
      </div>
      <div className={styles.row}>
        <input type="text" />
        <input type="text" />
      </div>
      <div className={styles.row}>
        <input type="text" />
      </div>
      <div className={styles.row}>
        <input type="file" />
        <button className={styles.add}>Add</button>
      </div>
    </form>
  );
};

export default Addcardform;
