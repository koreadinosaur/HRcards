import React, { createRef, useState } from "react";
import styles from "./addcardform.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

const Addcardform = ({ onAdd, upload }) => {
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
      id,
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
    onAdd(newObj);
  };
  const uploadFile = async (e) => {
    const uploaded = await upload.upload(e.target.files);
    setFile({ url: uploaded.url, fileName: uploaded.original_filename });
    console.log(file);
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
        <label htmlFor="upload" className={styles.label}>
          {file.fileName ? (
            `filename : ${file.fileName}`
          ) : (
            <span>
              <FontAwesomeIcon
                className={styles.uploadIcon}
                icon={faFileArrowUp}
              />
              Uplaod File
            </span>
          )}
        </label>
        <input
          type="file"
          accept="image/*"
          className={styles.input}
          onChange={uploadFile}
          id="upload"
        />
        <button className={styles.addBtn}>Add</button>
      </div>
    </form>
  );
};

export default Addcardform;
