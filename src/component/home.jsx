import React from "react";
import Nav from "./nav";

const Home = ({ user, logout }) => {
  return (
    <div>
      <Nav user={user} logout={logout} />
      <span>make your business card</span>
    </div>
  );
};

export default Home;
