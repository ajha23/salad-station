import React from "react";

import { CheckoutItem } from "../checkout-item";

import { useCartState } from "../../store/cart/cart";

import "./checkout.scss";

export const Checkout = () => {
  const { cartItems, total } = useCartState();
  return (
    <div className="checkout">
      <div className="checkout-header">
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: &#36;{total}</div>
    </div>
  );
};
