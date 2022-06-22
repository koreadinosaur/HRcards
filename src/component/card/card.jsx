import React from "react";
import styles from "./card.module.css";

const Card = ({ card, onDelete, onUpdateForm }) => {
  const {
    name,
    company,
    theme,
    email,
    message,
    department,
    id,
    update,
    fileName,
  } = card;
  const formRef = React.createRef();
  const handleDelete = (event) => {
    onDelete(card);
  };
  const handleUpdate = () => {
    onUpdateForm(id);
  };
  return (
    <section className={styles.cardContainer}>
      <div className={styles.row}>
        <span className={styles.name}>{name}</span>
        <span className={styles.company}>{company}</span>
        <select defaultValue={theme}>
          <option value="dark">dark</option>
          <option value="white">white</option>
          <option value="pink">pink</option>
        </select>
      </div>
      <div className={styles.row}>
        <span>{department}</span>
        <span>{email}</span>
      </div>
      <div className={styles.row}>
        <span>{`"${message}"`}</span>
      </div>
      <div className={styles.row}>
        <span className={`${styles.fileName} ${styles.row4Element}`}>
          {fileName ? `file: ${fileName}` : "업로드된 파일이 없습니다"}
        </span>
        <button className={styles.update} onClick={handleUpdate}>
          수정하기
        </button>
        <button
          onClick={handleDelete}
          className={`${styles.delete} ${styles.row4Element}`}
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default Card;
