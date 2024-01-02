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
        ${isSelected ? 'border-black bg-yellow-700' : ''}
        hover:border-black duration-200 hover:bg-yellow-700 hover:text-black
        sm:gap-6 sm:px-6 w-[200px]
      `}
    >
      
      {/* <div className="flex flex-col gap-1 items-start">
        <i className="">{new Date(new Date(addOn.timeFrom).getTime() + 4*60*60*1000).toLocaleTimeString()} - {new Date(new Date(addOn.timeTo).getTime() + 4*60*60*1000).toLocaleTimeString()}</i>
        <span className="text-xs text-purple font-normal leading-5 ml-auto sm:text-sm ">
        
      </span>
      </div> */}

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
       <div className="flex flex-col gap-1 items-start justify-center ">
      <i className="">{new Date(new Date(addOn.timeFrom).getTime() + 4*60*60*1000).toLocaleTimeString()} - {new Date(new Date(addOn.timeTo).getTime() + 4*60*60*1000).toLocaleTimeString()}</i>

      {"TZS " + addOn.price} 
      </div>
      
     

      
    </button>
  )

}