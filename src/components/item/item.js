import React from "react";

import "./item.scss";

export const Item = ({
  addToCartBtn = true,
  item,
  handleAddItem,
  handleClearItem,
  handleRemoveItem,
}) => {
  const { name, price, quantity } = item;

  return (
    <li className="item">
      <span className="name">{name}</span>
      {quantity > 0 ? (
        <span className="quantity">
          {handleRemoveItem ? (
            <div className="add-remove" onClick={handleRemoveItem}>
              -
            </div>
          ) : null}

          <span className="value">{quantity}</span>
          {handleAddItem ? (
            <div className="add-remove" onClick={handleAddItem}>
              +
            </div>
          ) : null}
        </span>
      ) : addToCartBtn ? (
        <div className="btn-container">
          <button onClick={handleAddItem}>Add to cart</button>
        </div>
      ) : null}
      <span className="price">&#36;{price}</span>
      {handleClearItem ? (
        <div className="remove-button" onClick={handleClearItem}>
          &#10005;
        </div>
      ) : null}
    </li>
  );
};
