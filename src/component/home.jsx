import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Home = ({ logout }) => {
  const location = useLocation();
  const [user, setUser] = useState(location && location.state);
  console.log(user);
  return (
    <div>
      <span>make your business card</span>
    </div>
  );
};

export default Home;
