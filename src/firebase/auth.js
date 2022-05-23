import firebase from "firebase";
import firebaseApp from "./firebase";
class Authentication {
  login(providerName) {
    const provider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(provider).catch(console.log);
  }
}
export default Authentication;
