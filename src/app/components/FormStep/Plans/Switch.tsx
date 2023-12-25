import { Fragment } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";

interface SwitchProps {
  isCoupon: boolean;
  handlePlanTypeChange: () => void;
}

export function Switch({ isCoupon, handlePlanTypeChange }: SwitchProps) {
  return (
    <Fragment>
      <span className={`text-sm font-normal ${isCoupon ? 'text-grey' : 'text-denim'} duration-100`}>
        No Coupon
      </span>

      <RadixSwitch.Root
        checked={isCoupon}
        onCheckedChange={handlePlanTypeChange}
        className={`
              w-10 h-5 p-1 relative bg-denim rounded-full
            `}
      >
        <RadixSwitch.Thumb
          className={`
                w-3 h-3 block bg-white rounded-full
                ${isCoupon ? 'translate-x-5	' : 'translate-x-0'} duration-300
              `}
        />
      </RadixSwitch.Root>

      <span className={`text-sm font-normal ${isCoupon ? 'text-denim' : 'text-grey'} duration-100`}>
        With Coupon
      </span>
    </Fragment>
  )
}