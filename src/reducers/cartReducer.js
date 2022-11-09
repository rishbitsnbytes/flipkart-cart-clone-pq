const cartActionTypes = {
  UPDATE_CART: "UPDATE_CART",
  UPDATE_SAVE_FOR_LATER: "UPDATE_SAVE_FOR_LATER",
};

const cartReducerFunction = (prevCartState, { type, payload }) => {
  switch (type) {
    case cartActionTypes.UPDATE_CART: {
      return {
        ...prevCartState,
        cartItems: payload.cartItems,
      };
    }

    case cartActionTypes.UPDATE_SAVE_FOR_LATER: {
      return {
        ...prevCartState,
        saveForLaterItems: payload.saveForLaterItems,
      };
    }

    default:
      return { ...prevCartState };
  }
};

export { cartReducerFunction };
