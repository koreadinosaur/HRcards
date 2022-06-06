import React, { createRef, useState } from "react";
import styles from "./addcardform.module.css";

const Addcardform = ({ onAdd, upload }) => {
  const formRef = React.createRef();
  const [url, setUrl] = React.useState("");
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
      id,
      name,
      company,
      theme,
      department,
      email,
      message,
      update,
      url,
    };
    console.log(newObj);
    onAdd(newObj);
  };
  const uploadFile = async (e) => {
    const uploaded = await upload.upload(e.target.files);
    setUrl(uploaded.url);
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
      <div className={styles.row}>
        <input type="file" onChange={uploadFile} />
        <button className={styles.add}>Add</button>
      </div>
    </form>
  );
};

export default Addcardform;
