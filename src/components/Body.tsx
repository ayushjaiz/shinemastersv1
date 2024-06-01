import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Body = () => {
  const { user } = useContext(UserContext);

  return <h2 className="pt-16">This is Body{user?.name}</h2>;
};

export default Body;
