import { ProductCard } from "../../components/";
import { useProducts } from "../../contexts";

const ProductListingSection = () => {
  const {
    productState: { products, areProductsLoading, productError },
  } = useProducts();

  const productsFilteredSorted = products;

  return (
    <div>
      <section className="flex-col flex-justify-start flex-align-start">
        <section className="w-full">
          <h2 className="main-section-head w-full mb-0-5 pb-0-5 font-xbold">
            PRODUCTS
          </h2>
          <div>
            <p className="h3 mb-0-5 pb-0-5">
              Number of Products showing below -{" "}
              <span className="color-tertiary font-bold h2">
                {productsFilteredSorted.length}
              </span>
            </p>
          </div>
        </section>
        <section className="product-list-wrapper grid grid-col-autofit-w-25 w-full gap-5 pt-1 mt-1">
          {/* Product Cards  */}
          {areProductsLoading ? (
            <h1 className="text-center color-primary">
              Products are loading...
            </h1>
          ) : productError ? (
            <div className="m-auto my-3 w-50-pc h-full flex-col flex-justify-center flex-align-center">
              <h1 className="text-center color-primary">
                Some Error occured while fetching products...
              </h1>
            </div>
          ) : productsFilteredSorted.length === 0 ? (
            <h1>
              Sorry there are no products for selected filters. Please relaxe
              your filters...
            </h1>
          ) : (
            productsFilteredSorted.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </section>
      </section>
    </div>
  );
};

export { ProductListingSection };
