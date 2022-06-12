import { db } from "./firebase";

class Database {
  addData(data, userId) {
    if (!userId) {
      return;
    }
    db.collection("cards")
      .doc(userId)
      .set(data)
      .then((doc) => {
        console.log("Document ID: ", doc.id);
      })
      .catch(console.log);
  }
  getData(callback, userId) {
    if (!userId) {
      return;
    }
    const docRef = db.collection("cards").doc(userId);
    docRef
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
  delete(id, userId) {
    db.collection("cards").doc(id).delete();
  }
}

export default Database;
