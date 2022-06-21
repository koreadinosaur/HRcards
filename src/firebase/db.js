import { db } from "./firebase";

class Database {
  addData(data, userId) {
    if (!userId) {
      return;
    }
    db.ref(userId + "/cards/" + data.id).set(data);
    // 이건 firestore 데이터 저장
    // db.collection("cards")
    //   .doc(userId)
    //   .set(data)
    //   .then((doc) => {
    //     console.log("Document ID: ", doc.id);
    //   })
    //   .catch(console.log);
  }
  getData(callback, userId) {
    const cardsRef = db.ref(userId + "/cards");
    cardsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const newArr = [];
      for (const key in data) {
        newArr.push(data[key]);
      }
      callback(newArr);
      return () => cardsRef.off;
    });
    // 여기는 firestore 여러 문서 읽기
    // const docRef = db.collection("cards").doc(userId);
    // docRef
    //   .get()
    //   .then((querySnapshot) => {
    //     let cards = [];
    //     querySnapshot.forEach((doc) => {
    //       if (doc.exists) {
    //         cards = [...cards, { ...doc.data(), id: doc.id }];
    //       }
    //     });
    //     const newCards = [...cards];
    //     console.log(newCards);
    //     callback(newCards);
    //   })
    //   .catch((err) => console.log(err));
  }
  delete(data, userId) {
    db.ref(userId + "/cards/" + data.id).remove();
  }
  update(data, userId) {
    db.ref(userId + "/cards/" + data.id).update(data);
  }
}

export default Database;
