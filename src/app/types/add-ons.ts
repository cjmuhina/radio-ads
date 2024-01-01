// export type Addon = {
//     title: string;
//     description: string;
//     price: number
//   }
  
  // export type AddonWithPrices = {
  //   id: string;
  //   title: string;
  //   description: string;
  //   price: {
  //     coupon: number;
  //     noCoupon: number;
  //   }
  // }

  export type Addon = {
    id: string;
    name: number;
    timeFrom: number;
    timeTo: number;
    price: string
  }
  export type AddonWithPrices = {
    id: string;
    name: number;
    timeFrom: number;
    timeTo: number;
    price: string
  }
 