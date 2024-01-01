import { priceFormatter } from "../../../utils/price-formatter";

interface TotalPriceProps {
  isCoupon: boolean;
  finalPrice: number;
}

export function TotalPrice({ finalPrice, isCoupon }: TotalPriceProps) {

  const period = isCoupon ? 'TZS' : 'TZS'

  return (
    <div className="mt-6 flex items-center justify-between px-4 sm:px-6">
      <strong className="text-sm leading-5 font-normal text-grey">
        {`Total (${period})`}
      </strong>
      <span className="text-base leading-5 font-bold text-purple sm:text-xl">
        {priceFormatter(finalPrice, isCoupon)}
      </span>
    </div>
  )
}