import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import Home from "./component/home";
import firebase from "firebase";

function App({ auth, user }) {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <Routes>
      <Route path="/" element={<Home user={user} logout={logout} />} />
      <Route path="/login" element={<Login auth={auth} />} />
    </Routes>
  );
}

export default App;
