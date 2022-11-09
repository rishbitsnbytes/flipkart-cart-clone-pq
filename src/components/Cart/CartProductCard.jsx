import "./cart.css";
import { getDiscountedPrice, getFullImgUrl } from "../../utils";
import { useCart } from "../../contexts";

const CartProductCard = ({ product, saveForLaterCard }) => {
  const {
    cartState: { cartItems, saveForLaterItems },
    cartDispatch,
  } = useCart();
  const { _id, title, originalMRP, discountPercent, brand, imgUrl, cartQty } =
    product;

  const handleCartItemQtyChange = (event, actionType) => {
    event.preventDefault();
    event.stopPropagation();
    let userCart = cartItems;
    switch (actionType) {
      case "INCREMENT":
        {
          userCart.forEach((cartItem) => {
            if (cartItem._id === _id) {
              cartItem.cartQty = Number(cartItem.cartQty) + 1;
            }
          });
        }
        break;

      case "DECREMENT":
        {
          userCart.forEach((cartItem) => {
            if (cartItem._id === _id) {
              cartItem.cartQty = Number(cartItem.cartQty) - 1;
            }
          });
        }
        break;

      default:
        return;
    }
    cartDispatch({
      type: "UPDATE_CART",
      payload: { cartItems: [...userCart] },
    });
  };

  const handleRemoveFromCart = () => {
    let userCart = cartItems.filter((cartItem) => cartItem._id !== _id);
    cartDispatch({
      type: "UPDATE_CART",
      payload: { cartItems: [...userCart] },
    });
  };

  const handleSaveForLater = () => {
    handleRemoveFromCart();
    let saveForLaterNewItems = [...saveForLaterItems];
    saveForLaterNewItems.find((item) => item._id === _id) ??
      saveForLaterNewItems.push(product);
    cartDispatch({
      type: "UPDATE_SAVE_FOR_LATER",
      payload: { saveForLaterItems: [...saveForLaterNewItems] },
    });
  };

  const addToCart = () => {
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

  const removeFromSaveLater = () => {
    let saveForLaterFilteredItems = saveForLaterItems.filter(
      (item) => item._id !== _id
    );
    cartDispatch({
      type: "UPDATE_SAVE_FOR_LATER",
      payload: { saveForLaterItems: saveForLaterFilteredItems },
    });
  };

  const handleMoveToCart = () => {
    removeFromSaveLater();
    addToCart();
  };

  return (
    <div className="cart-product-card flex-row flex-justify-evenly flex-align-center gap-1 w-full h-fit rounded-md">
      <div className="w-30-pc h-full">
        <div>
          <img
            src={getFullImgUrl(imgUrl, title)}
            alt={title}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="cart-card-product-details w-60-pc h-full flex-col flex-justify-evenly flex-align-start gap-1 py-2 px-1">
        <div className="cart-card-product-heads">
          <div>
            <p className="text-md font-bold">{title}</p>
            <p className="h6 color-faded">{brand}</p>
          </div>
        </div>
        <div className="cart-card-price-container">
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
          </div>
        </div>
        {saveForLaterCard ? null : (
          <div className="flex-col flex-justify-center flex-align-start">
            <div className="item-qty-btns flex-row flex-justify-start flex-align-center w-fit gap-2 my-0-75 h-3">
              <button
                className={`btn btn-qty h1 rounded-full w-3 h-3 flex-row flex-justify-center flex-align-center ${
                  cartQty === 1 ? "btn-disabled" : ""
                }`}
                onClick={(event) => handleCartItemQtyChange(event, "DECREMENT")}
                disabled={cartQty === 1}
              >
                -
              </button>
              <p className="w-3 text-xl text-center color-tertiary font-bold">
                {cartQty}
              </p>
              <button
                className="btn btn-qty h1 rounded-full w-3 h-3 flex-row flex-justify-center flex-align-center"
                onClick={(event) => handleCartItemQtyChange(event, "INCREMENT")}
              >
                +
              </button>
            </div>
          </div>
        )}
        {saveForLaterCard ? (
          <div className="flex-col flex-justify-center flex-align-start w-60-pc gap-1 mt-1">
            <button
              className="btn btn-primary px-2 py-1 rounded-md w-full align-self-center"
              onClick={(event) => handleMoveToCart(event)}
            >
              Move To Cart
            </button>
          </div>
        ) : (
          <div className="flex-col flex-justify-center flex-align-start w-60-pc gap-1 mt-1">
            <button
              className="btn btn-secondary px-2 py-1 rounded-md w-full align-self-center"
              onClick={(event) => handleSaveForLater(event)}
            >
              Save For Later
            </button>
            <button
              className="btn btn-secondary px-2 py-1 rounded-md w-full align-self-center"
              onClick={(event) => handleRemoveFromCart(event)}
            >
              Remove From Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { CartProductCard };
