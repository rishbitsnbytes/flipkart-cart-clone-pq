import { initialProductState } from "../contexts/product-context";

const productActionTypes = {
  PRODUCT_INIT: "PRODUCT_INIT",
};

const productReducerFunction = (
  prevProductState,
  { type, payload: { products, areProductsLoading, productError } }
) => {
  switch (type) {
    case productActionTypes.PRODUCT_INIT: {
      return {
        ...prevProductState,
        products,
        areProductsLoading,
        productError,
      };
    }

    default:
      return {
        ...initialProductState,
      };
  }
};

export { productReducerFunction };
