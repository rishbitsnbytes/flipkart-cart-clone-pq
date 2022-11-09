import "./cart.css";
import { getCartPricing } from "../../utils";
import { useCart } from "../../contexts";

const CartPricing = () => {
  const {
    cartState: { cartItems },
  } = useCart();

  const cartPricing = getCartPricing(cartItems);
  const { totalMRP, totalDiscountOnMRP, totalDiscountedPrice, totalAmount } =
    cartPricing;

  return (
    <section className="cart-price-details-card flex-col flex-justify-start flex-align-start w-full gap-1 rounded-md px-4 py-3 w-full">
      <div className="w-full">
        <p className="h2 text-center font-bold">PRICE DETAILS </p>
      </div>
      <div className="price-calculations w-full py-0-5">
        <div className="flex-row flex-justify-between flex-align-center w-full">
          <p className="h4 font-sbold">Total MRP</p>
          <p className="h4 font-sbold">₹{totalMRP}</p>
        </div>
        <div className="flex-row flex-justify-between flex-align-center w-full">
          <p className="h4 font-sbold">Total Discount on MRP</p>
          <p className="h4 font-sbold color-tertiary">₹{totalDiscountOnMRP}</p>
        </div>
        <div className="flex-row flex-justify-between flex-align-center w-full">
          <p className="h4 font-sbold">Price After Discount</p>
          <p className="h4 font-sbold color-tertiary">
            ₹{totalDiscountedPrice}
          </p>
        </div>
      </div>
      <div className="total-amount flex-row flex-justify-between flex-align-center w-full py-1">
        <p className="h3 font-bold">Total Amount</p>
        <p className="h3 font-bold">₹{totalAmount}</p>
      </div>
      <button className="h3 btn btn-primary w-full py-1 my-1 rounded-md">
        Checkout
      </button>
    </section>
  );
};

export { CartPricing };
