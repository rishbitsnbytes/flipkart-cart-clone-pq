import { useContext, createContext, useReducer, useEffect } from "react";
import { fetchProducts } from "../utils/fetchProducts";
import { productReducerFunction } from "../reducers";

const initialProductState = {
  products: [],
  areProductsLoading: true,
  productError: null,
};

const ProductContext = createContext(initialProductState);

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducerFunction,
    initialProductState
  );

  useEffect(() => {
    fetchProducts(productDispatch);
  }, []);

  return (
    <ProductContext.Provider
      value={{ productState: { ...productState }, productDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts, initialProductState };
