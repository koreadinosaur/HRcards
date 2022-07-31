import React, { createRef, useState, memo } from "react";
import styles from "./updatecardform.module.css";

import UpdateInput from "../updateinput/updateinput";
import { useCallback, useRef } from "react";

const UpdateCardForm = memo(
  ({ database, onUpdate, card, onUpload, userId }) => {
    const [file, setFile] = useState({ url: null, fileName: null });
    const { name, contact, theme, email, department, id, position, update } =
      card;
    const formRef = useRef();
    const nameRef = useRef();
    const departmentRef = useRef();
    const positionRef = useRef();
    const emailRef = useRef();
    const contactRef = useRef();
    const themeRef = useRef();

    const updateCard = useCallback(
      (event) => {
        console.log("updatecard Function");
        event.preventDefault();
        const newObj = {
          id,
          name: nameRef.current.value || "",
          position: positionRef.current.value || "",
          theme: themeRef.current.value || "",
          department: departmentRef.current.value || "",
          email: emailRef.current.value || "",
          contact: contactRef.current.value || "",
          update: false,
          url: file.url ? file.url : card.url ? card.url : "",
          fileName: file.fileName
            ? file.fileName
            : card.fileName
            ? card.fileName
            : "",
        };
        database.update(newObj, userId);
        onUpdate(newObj);
      },
      [database, file]
    );
    const addFile = (obj) => {
      console.log(obj);
      setFile({
        url: obj.url,
        fileName: obj.fileName,
      });
      console.log(file);
    };
    return (
      <form
        ref={formRef}
        onSubmit={updateCard}
        className={styles.cardContainer}
      >
        <div className={styles.row}>
          <input
            type="text"
            defaultValue={name}
            ref={nameRef}
            placeholder="이름"
          />
          <input
            type="text"
            defaultValue={department}
            ref={departmentRef}
            placeholder="부서"
          />
          <select defaultValue={theme} ref={themeRef}>
            <option value="dark">dark</option>
            <option value="white">white</option>
            <option value="pink">pink</option>
          </select>
        </div>
        <div className={styles.row}>
          <input
            type="text"
            ref={positionRef}
            placeholder="직책(담당)"
            defaultValue={position}
          />
          <input
            type="text"
            ref={emailRef}
            placeholder="email"
            defaultValue={email}
          />
        </div>
        <div className={styles.row}>
          <input
            type="text"
            ref={contactRef}
            placeholder="연락처"
            defaultValue={contact}
          />
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
  }
);

export default UpdateCardForm;
