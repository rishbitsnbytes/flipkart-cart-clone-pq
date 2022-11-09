import { getDiscountedPrice } from "../utils";

const getCartPricing = (cartItems) => {
  let totalMRP = 0,
    totalDiscountOnMRP = 0,
    totalDiscountedPrice = 0,
    totalAmount = 0;

  cartItems.forEach(({ originalMRP, discountPercent, cartQty }) => {
    originalMRP = Number(originalMRP);
    discountPercent = Number(discountPercent);
    cartQty = Number(cartQty);

    totalMRP += originalMRP * cartQty;
    totalDiscountedPrice +=
      getDiscountedPrice(originalMRP, discountPercent) * cartQty;
  });

  totalDiscountOnMRP = totalMRP - totalDiscountedPrice;

  totalAmount = totalDiscountedPrice;

  //   Rounding off all the computations before returning
  totalMRP = Math.round(totalMRP);
  totalDiscountOnMRP = Math.round(totalDiscountOnMRP);
  totalDiscountedPrice = Math.round(totalDiscountedPrice);
  totalAmount = Math.round(totalAmount);

  return {
    totalMRP: totalMRP,
    totalDiscountOnMRP: totalDiscountOnMRP,
    totalDiscountedPrice: totalDiscountedPrice,
    totalAmount: totalAmount,
  };
};

export { getCartPricing };
