import { useDispatch, useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "./cart.selectors";
import { addItem, clearItemFromCart, removeItem } from "./cart.actions";

export const useCartState = () => {
  return {
    cartItems: useSelector(selectCartItems),
    cartItemsCount: useSelector(selectCartItemsCount),
    total: useSelector(selectCartTotal),
  };
};

export const useCartDispatch = () => {
  const dispatch = useDispatch();
  return {
    addItem: (item) => dispatch(addItem(item)),
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    removeItem: (item) => dispatch(removeItem(item)),
  };
};
