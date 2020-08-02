import React from "react";

import { useCartDispatch } from "../../store/cart/cart";

import { Item } from "../item";

import "./checkout-item.scss";

export const CheckoutItem = ({ cartItem }) => {
  const { clearItem } = useCartDispatch();
  const handleClearItem = () => {
    clearItem(cartItem);
  };

  return (
    <Item
      item={cartItem}
      addToCartBtn={false}
      handleClearItem={handleClearItem}
    />
  );
};
