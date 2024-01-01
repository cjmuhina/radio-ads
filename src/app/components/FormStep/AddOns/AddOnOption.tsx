import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from '@radix-ui/react-icons';

import { useForm } from "../../../hooks/use-form";
import { priceFormatter } from "../../../utils/price-formatter";

interface AddOnOptionProps {
  // addOn: {
  //   title: string;
  //   description: string;
  //   price: {
  //     noCoupon: number;
  //     coupon: number;
  //   }
  // }
  addOn: {
    id: string;
    name: string;
    timeFrom: string;
    timeTo: string;
    price: number
  },
  isSelected: boolean,
  handleSelectAddon: (addOn: any) => void,
  handleUnselectedAddon: (addOn: any) => void
}

export function AddOnOption({ addOn, isSelected, handleSelectAddon, handleUnselectedAddon }: AddOnOptionProps) {
  const { isCoupon } = useForm()

  const planType = isCoupon ? 'coupon' : 'noCoupon'

  function handleClick() {
    if (isSelected) {
      handleUnselectedAddon(addOn)
      console.log("AddOnOption isUnSelected")
    } else {
      handleSelectAddon(addOn)
      console.log("AddOnOption isSelected")

    }
  }

  return (
    <button
      onClick={handleClick}
      className={`
        flex items-center gap-4 px-4 py-3 bg-white rounded-lg border-border-grey border-[1px] 
        ${isSelected ? 'border-purple bg-very-light-grey' : ''}
        hover:border-purple duration-200 hover:bg-very-light-grey
        sm:gap-6 sm:px-6
      `}
    >
      <Checkbox.Root
        className={
          `
            rounded h-5 w-5 flex items-center justify-center duration-200 hover:bg-purple
            border border-blue-700	
            ${isSelected ? 'bg-purple' : 'bg-white'}
          `
        }
        checked={isSelected}
        defaultChecked={isSelected}
        disabled
      >
        <Checkbox.Indicator className="text-white font-bold text-base">
          <CheckIcon width={20} height={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <div className="flex flex-col gap-1 items-start">
        <strong className="text-sm text-denim font-medium sm:text-base">{addOn.name}</strong>
        <span className="text-xs text-grey font-normal sm:text-sm">{addOn.name}</span>
      </div>
      <span className="text-xs text-purple font-normal leading-5 ml-auto sm:text-sm ">
        {"" + addOn.price} ( selected {isSelected})
      </span>
    </button>
  )

}