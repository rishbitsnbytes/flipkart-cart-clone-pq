import "./products.css";
import { getDiscountedPrice, getFullImgUrl } from "../../utils";
import { useCart } from "../../contexts/cart-context";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, title, originalMRP, discountPercent, brand, imgUrl, sizes } =
    product;

  const {
    cartState: { cartItems },
    cartDispatch,
  } = useCart();

  const isProductInCart = cartItems.find((cartItem) => cartItem._id === _id);

  const handleAddToCart = () => {
    let userCart = cartItems;
    userCart.push({
      ...product,
      cartQty: 1,
    });
    cartDispatch({
      type: "UPDATE_CART",
      payload: { cartItems: userCart },
    });
  };

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
          <div className="card-price-container my-0-25 w-full">
            <div>
              <p className="h2 color-primary font-bold inline mr-1">
                ₹{getDiscountedPrice(originalMRP, discountPercent)}
              </p>
              <p className="text-md color-faded inline">
                <s>₹{originalMRP}</s>
              </p>
            </div>
            <div className="w-full">
              <p className="text-sm-2 inline color-tertiary mr-1">
                {discountPercent}% off
              </p>
              <p className="text-sm-2 inline color-tertiary">
                You save : ₹
                {originalMRP - getDiscountedPrice(originalMRP, discountPercent)}
              </p>
              <p>Sizes :- {sizes.map((size) => `${size}, `)}</p>
              <div className="w-full flex-row flex-justify-center flex-align-center">
                {isProductInCart ? (
                  <Link
                    to="/cart"
                    className="btn btn-primary  mt-2 m-1 px-2 py-1 rounded-md w-full align-self-center text-center"
                  >
                    Go to cart
                  </Link>
                ) : (
                  <button
                    className="btn btn-primary  mt-2 m-1 px-2 py-1 rounded-md w-full align-self-center"
                    onClick={(event) => handleAddToCart(event)}
                  >
                    {" "}
                    Add to cart{" "}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
