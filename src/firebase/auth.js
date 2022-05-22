import firebase from "firebase";
import firebaseApp from "./firebase";
import { GoogleAuthProvider } from "firebase/auth";
class Authentication {
  login(providerName) {
    const provider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(provider);
  }
}
export default Authentication;
