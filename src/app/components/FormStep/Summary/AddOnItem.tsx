import { priceFormatter } from "../../../utils/price-formatter";

interface AddOnItemProps {
  title: string;
  price: number;
  isCoupon: boolean;
  timeFrom: string;
  timeTo: string;
}

export function AddOnItem({ title, price, isCoupon, timeFrom, timeTo }: AddOnItemProps) {
  const formattedPrice = priceFormatter(price, isCoupon)

  return (
    <div className="flex items-center justify-between">
      <strong className="text-sm leading-5 font-normal text-grey">
        {title} 
        (      <i className="">{new Date(new Date(timeFrom).getTime() + 4*60*60*1000).toLocaleTimeString()} - {new Date(new Date(timeTo).getTime() + 4*60*60*1000).toLocaleTimeString()}</i>
)
      </strong>
      <span className="text-sm leading-5 font-normal text-denim">
        {`+${formattedPrice}`}
      </span>
    </div>
  )
} 