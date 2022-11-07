import { ProductProvider } from "./contexts";

export const AllProviders = ({ children }) => {
  return <ProductProvider>{children}</ProductProvider>;
};
