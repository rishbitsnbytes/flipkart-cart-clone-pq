const getDiscountedPrice = (originalMRP, discountPercent) => {
  return Number(
    Math.round(originalMRP - (originalMRP * discountPercent) / 100)
  );
};

export { getDiscountedPrice };
