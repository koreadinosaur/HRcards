import React, { createRef, useState } from "react";
import styles from "./addcardform.module.css";

import Uploadinput from "../uploadinput/uploadinput";

const Addcardform = ({ onAdd, onUpload }) => {
  const formRef = React.createRef();
  const [file, setFile] = useState({ url: null, fileName: null });
  const addCard = (event) => {
    event.preventDefault();
    const id = Date.now();
    const name = formRef.current[0].value;
    const company = formRef.current[1].value;
    const theme = formRef.current[2].value;
    const department = formRef.current[3].value;
    const email = formRef.current[4].value;
    const message = formRef.current[5].value;
    const update = false;
    const newObj = {
      id: Date.now(),
      name,
      company,
      theme,
      department,
      email,
      message,
      update,
      url: file.url,
      fileName: file.fileName,
    };
    console.log(newObj);
    formRef.current.reset();
    setFile({ url: null, fileName: null });
    onAdd(newObj);
  };
  const addFile = (obj) => {
    setFile({
      url: obj.url,
      fileName: obj.fileName,
    });
  };
  return (
    <form ref={formRef} onSubmit={addCard} className={styles.cardContainer}>
      <div className={styles.row}>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="company" />
        <select>
          <option value="dark">dark</option>
          <option value="white">white</option>
          <option value="pink">pink</option>
        </select>
      </div>
      <div className={styles.row}>
        <input type="text" placeholder="department" />
        <input type="text" placeholder="email" />
      </div>
      <div className={styles.row}>
        <input type="text" placeholder="message" />
      </div>
      <footer className={styles.row}>
        <div className={styles.inputContainer}>
          <Uploadinput onUpload={onUpload} onAddFile={addFile} file={file} />
        </div>
        <button className={styles.addBtn}>Add</button>
      </footer>
    </form>
  );
};

export default Addcardform;
