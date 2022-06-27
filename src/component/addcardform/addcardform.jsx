import React, { createRef, useState } from "react";
import styles from "./addcardform.module.css";

import Uploadinput from "../uploadinput/uploadinput";
import { useRef } from "react";

const Addcardform = ({ onAdd, onUpload }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const departmentRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const themeRef = useRef();
  const [file, setFile] = useState({ url: null, fileName: null });
  const addCard = (event) => {
    event.preventDefault();
    const update = false;
    const newObj = {
      id: Date.now(),
      name: nameRef.current.value || "",
      position: positionRef.current.value || "",
      theme: themeRef.current.value || "",
      department: departmentRef.current.value || "",
      email: emailRef.current.value || "",
      contact: contactRef.current.value || "",
      update,
      url: file.url,
      fileName: file.fileName,
    };
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
        <input type="text" ref={nameRef} placeholder="이름" />
        <input type="text" ref={departmentRef} placeholder="부서" />
        <select ref={themeRef}>
          <option value="dark">dark</option>
          <option value="white">white</option>
          <option value="pink">pink</option>
        </select>
      </div>
      <div className={styles.row}>
        <input type="text" ref={positionRef} placeholder="직책(담당)" />
        <input type="text" ref={emailRef} placeholder="email" />
      </div>
      <div className={styles.row}>
        <input type="text" ref={contactRef} placeholder="연락처" />
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
