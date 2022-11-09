import "./cart.css";
import { CartProductCard, CartPricing, SaveForLater } from "../../components";
import { useCart } from "../../contexts";

const CartMain = () => {
  const {
    cartState: { cartItems, saveForLaterItems },
  } = useCart();

  return (
    <main className="cart-page-main flex-col flex-justify-start flex-align-center gap-5 m-1 p-5 h-full">
      {
        <div className="flex-col flex-justify-start flex-align-center gap-5">
          <h1>
            {cartItems.length > 0 ? "Your Cart has " : "Your Cart is "}
            <span>
              {cartItems.length > 0
                ? cartItems.length === 1
                  ? ` only ${cartItems.length} item!`
                  : ` ${cartItems.length} items!`
                : " Empty!"}
            </span>
          </h1>
          {cartItems.length > 0 && (
            <section className="grid grid-50-50-layout grid-cols-2 grid-rows-1 m-1 gap-5">
              <section className="flex-col flex-justify-start flex-align-start gap-3 w-full mx-auto h-fit">
                {cartItems.map((cartItem) => {
                  return (
                    <CartProductCard product={cartItem} key={cartItem._id} />
                  );
                })}
              </section>
              <section className="w-80-pc mx-auto">
                <CartPricing />
              </section>
            </section>
          )}
        </div>
      }
      {saveForLaterItems && (
        <section className="w-full">
          <SaveForLater saveForLaterItems={saveForLaterItems} />
        </section>
      )}
    </main>
  );
};

export { CartMain };
