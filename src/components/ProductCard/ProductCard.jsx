import "./products.css";
import { getDiscountedPrice, getFullImgUrl } from "../../utils";

const ProductCard = ({ product }) => {
  const { _id, title, originalMRP, discountPercent, brand, imgUrl, sizes } =
    product;

  return (
    <div className="w-fit">
      <div className="card-container w-25 h-full relative flex-col flex-justify-between flex-align-center rounded-md">
        <img
          src={getFullImgUrl(imgUrl, title)}
          alt={title}
          className="w-full h-25 rounded-md"
        />
        <div className="card-product-details flex-col flex-justify-start flex-align-start gap-0-5 w-full px-1 m-1">
          <div className="card-product-heads mb-0-5">
            <p className="text-md font-bold text-truncate-lines-2">{title}</p>
            <p className="h6 color-faded">{brand}</p>
          </div>
          <div className="card-price-container my-0-25">
            <div>
              <p className="h2 color-primary font-bold inline mr-1">
                ₹{getDiscountedPrice(originalMRP, discountPercent)}
              </p>
              <p className="text-md color-faded inline">
                <s>₹{originalMRP}</s>
              </p>
            </div>
            <div>
              <p className="text-sm-2 inline color-tertiary mr-1">
                {discountPercent}% off
              </p>
              <p className="text-sm-2 inline color-tertiary">
                You save : ₹
                {originalMRP - getDiscountedPrice(originalMRP, discountPercent)}
              </p>
              <p>Sizes :- {sizes.map((size) => `${size}, `)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
