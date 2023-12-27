import { priceFormatter } from "../../../utils/price-formatter";

interface AddOnItemProps {
  title: string;
  price: number;
  isCoupon: boolean;
}

export function AddOnItem({ title, price, isCoupon }: AddOnItemProps) {
  const formattedPrice = priceFormatter(price, isCoupon)

  return (
    <div className="flex items-center justify-between">
      <strong className="text-sm leading-5 font-normal text-grey">
        {title}
      </strong>
      <span className="text-sm leading-5 font-normal text-denim">
        {`+${formattedPrice}`}
      </span>
    </div>
  )
} 