import { cartReducerFunction } from "../reducers";
import { createContext, useContext, useReducer } from "react";

const initialCartState = {
  cartItems: [],
  saveForLaterItems: [],
};

const CartContext = createContext(initialCartState);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(
    cartReducerFunction,
    initialCartState
  );

  return (
    <CartContext.Provider value={{ cartState: { ...cartState }, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider, initialCartState };
