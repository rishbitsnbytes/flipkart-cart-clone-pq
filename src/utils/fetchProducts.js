import receivedProducts from "../data/products.json";

const fetchProducts = (productDispatch) => {
  productDispatch({
    type: "PRODUCT_INIT",
    payload: {
      products: receivedProducts,
      areProductsLoading: false,
      productError: null,
    },
  });
};

export { fetchProducts };
