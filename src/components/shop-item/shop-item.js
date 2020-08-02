import React, { useState, useEffect } from "react";

import { useCartDispatch, useCartState } from "../../store/cart/cart";
import { Item } from "../item";

import "./shop-item.scss";

export const ShopItem = ({ item }) => {
  const { id } = item;
  const [quantity, setQuantity] = useState();
  const { addItem, removeItem } = useCartDispatch();
  const { cartItems } = useCartState();
  item.quantity = quantity;

  const handleAddItem = () => {
    addItem(item);
  };
  const handleRemoveItem = () => {
    removeItem(item);
  };

  useEffect(() => {
    const shopItem = cartItems.find((item) => item.id === id);
    setQuantity(shopItem?.quantity);
  }, [id, cartItems]);

  return (
    <Item
      item={item}
      handleAddItem={handleAddItem}
      handleRemoveItem={handleRemoveItem}
    />
  );
};
