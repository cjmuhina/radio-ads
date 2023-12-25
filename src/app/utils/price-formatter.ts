export function priceFormatter(price: number, isCoupon: boolean): string {
    return isCoupon ? ` TZS ${price} - with Discount` : `$${(price)} - No Discount`;
  }