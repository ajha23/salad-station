import React from "react";

import "./home.scss";

export const Home = ({ history }) => {
  const handelClick = () => {
    history.push("/shop");
  };
  return (
    <div className="home-container">
      <h1 className="header">Welcome to salad station</h1>
      <button onClick={handelClick}>Order Salad</button>
    </div>
  );
};
