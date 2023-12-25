export type TypeOfPlan = 'coupon' | 'noCoupon';

export type PlanWithPrices = {
  radio: string;
  name: string;
  price: {
    coupon: number;
    noCoupon: number;
  }
}