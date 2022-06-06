import React, { createRef } from "react";
import styles from "./updatecardform.module.css";

const UpdateCardForm = ({ onUpdate, card, upload }) => {
  const formRef = React.createRef();
  const [url, setUrl] = React.useState("");
  const { name, company, theme, email, message, department, id, update } = card;
  const updateCard = (event) => {
    event.preventDefault();
    const name = formRef.current[0].value;
    const company = formRef.current[1].value;
    const theme = formRef.current[2].value;
    const department = formRef.current[3].value;
    const email = formRef.current[4].value;
    const message = formRef.current[5].value;
    const newObj = {
      id,
      name,
      company,
      theme,
      department,
      email,
      message,
      update: "false",
      url,
    };
    onUpdate(id, newObj);
  };
  const uploadFile = async (e) => {
    const uploaded = await upload.upload(e.target.files);
    setUrl(uploaded.url);
  };
  return (
    <form ref={formRef} onSubmit={updateCard} className={styles.cardContainer}>
      <div className={styles.row}>
        <input type="text" placeholder="name" defaultValue={name} />
        <input type="text" placeholder="company" defaultValue={company} />
        <select defaultValue={theme}>
          <option value="dark">dark</option>
          <option value="white">white</option>
          <option value="pink">pink</option>
        </select>
      </div>
      <div className={styles.row}>
        <input type="text" placeholder="department" defaultValue={department} />
        <input type="text" placeholder="email" defaultValue={email} />
      </div>
      <div className={styles.row}>
        <input type="text" placeholder="message" defaultValue={message} />
      </div>
      <div className={styles.row}>
        <input type="file" onChange={uploadFile} />
        <button className={styles.add}>Update</button>
      </div>
    </form>
  );
};

export default UpdateCardForm;
