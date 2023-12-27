export type Addon = {
    title: string;
    description: string;
    price: number
  }
  
  export type AddonWithPrices = {
    title: string;
    description: string;
    price: {
      coupon: number;
      noCoupon: number;
    }
  }