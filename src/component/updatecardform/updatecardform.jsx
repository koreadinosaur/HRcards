import React, { createRef, useState } from "react";
import styles from "./updatecardform.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

import UpdateInput from "../updateinput/updateinput";

const UpdateCardForm = ({ onUpdate, card, onUpload }) => {
  const formRef = React.createRef();
  const [file, setFile] = useState({ url: null, fileName: null });
  const { name, company, theme, email, message, department, id, update } = card;

  const updateCard = (event) => {
    event.preventDefault();
    const newObj = {
      ...card,
      update: "false",
      url: file.url ? file.url : card.url,
      fileName: file.fileName ? file.fileName : card.fileName,
    };
    onUpdate(id, newObj);
  };
  const addFile = (obj) => {
    setFile({
      url: obj.url,
      fileName: obj.fileName,
    });
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
        <div className={styles.inputContainer}>
          <UpdateInput
            card={card}
            file={file}
            onUpload={onUpload}
            onAddFile={addFile}
          />
        </div>
        <button className={styles.add}>Update</button>
      </div>
    </form>
  );
};

export default UpdateCardForm;
