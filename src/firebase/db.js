import { db } from "./firebase";

class Database {
  addData(data) {
    db.collection("cards")
      .add(data)
      .then((doc) => {
        console.log("Document ID: ", doc.id);
      })
      .catch(console.log);
  }
}

export default Database;
