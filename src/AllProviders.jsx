import { ProductProvider, CartProvider } from "./contexts";

export const AllProviders = ({ children }) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
};
