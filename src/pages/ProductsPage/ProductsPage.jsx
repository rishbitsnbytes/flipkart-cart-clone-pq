import "./ProductsPage.css";
import { ProductListingSection } from "../../components";

const ProductsPage = () => {
  return (
    <div>
      <main className="section-main grid m-2 px-3 py-3 gap-5">
        <ProductListingSection />
      </main>
    </div>
  );
};

export { ProductsPage };
