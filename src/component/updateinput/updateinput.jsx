import React, { useState } from "react";
import styles from "./updateinput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

const UpdateInput = ({ onUpload, onAddFile, file, card }) => {
  const [loading, setLoading] = useState(false);
  const uploadFile = async (e) => {
    setLoading(true);
    const uploaded = await onUpload.upload(e.target.files);
    setLoading(false);
    onAddFile({ url: uploaded.url, fileName: uploaded.original_filename });
  };
  return (
    <div className={styles.row}>
      <label htmlFor="upload" className={styles.label}>
        {card.fileName || file.fileName ? (
          `file : ${card.fileName ? card.fileName : file.fileName}`
        ) : loading ? (
          <div className={styles.loading}>
            <span></span>
          </div>
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
    </div>
  );
};

export default UpdateInput;
