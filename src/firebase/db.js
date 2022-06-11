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
  getData(callback) {
    db.collection("cards")
      .get()
      .then((querySnapshot) => {
        let cards = [];
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            cards = [...cards, { ...doc.data(), id: doc.id }];
          }
        });
        const newCards = [...cards];
        console.log(newCards);
        callback(newCards);
      })
      .catch((err) => console.log(err));
  }
  delete(id) {
    db.collection("cards").doc(id).delete();
  }
}

export default Database;
