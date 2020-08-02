import axios from "axios";
import React, { useState, useEffect } from "react";

import { ShopItem } from "../../components";
import "./shop.scss";

export const Shop = ({ history }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("./ingredients.json")
      .then((res) => setData(res.data.ingredients));
  }, []);

  const handelClick = () => {
    history.push("/checkout");
  };

  return (
    <div className="shop-page">
      <h1>Add Ingredients</h1>
      <div className="shop-header">
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
      </div>
      {data.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
      <button className="ChkOutbtn" onClick={handelClick}>
        Proceed to checkout
      </button>
    </div>
  );
};
