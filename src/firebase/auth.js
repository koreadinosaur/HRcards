import { firebaseAuth, googleAuthProvider } from "./firebase";
class Authentication {
  login(providerName) {
    return firebaseAuth.signInWithPopup(googleAuthProvider).catch(console.log);
  }
  logout(callback) {
    firebaseAuth.signOut().then(() => callback());
  }
  onAuthChange(callback) {
    firebaseAuth.onAuthStateChanged((user) => callback(user));
  }
}
export default Authentication;
