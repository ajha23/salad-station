export const addItemToCart = (cartItems, itemsToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemsToAdd.id
  );
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemsToAdd.id
        ? { ...itemsToAdd, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemsToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, removeItem) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === removeItem.id
  );
  if (existingItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === removeItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
