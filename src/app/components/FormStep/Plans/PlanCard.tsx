import Image from "next/image";
import React from "react";

import { PlanWithPrices } from "../../../types/plan";

import { useForm } from "../../../hooks/use-form";
import { priceFormatter } from "../../../utils/price-formatter";

import UnconventionalTabs from "./UnconventionalTabs";

interface PlanCard {
  plan: PlanWithPrices;
  icon: string;
  isSelected: boolean;
  handleSelectPlan: (plan: PlanWithPrices) => void;
  freeTrialDescription: string;
}

export function PlanCard({ plan, icon, isSelected, handleSelectPlan, freeTrialDescription }: PlanCard) {
  const { isCoupon } = useForm()
  const planType = isCoupon ? 'coupon' : 'noCoupon';

  

  return (

    <div>
     
    
    <button
      className={`
        flex gap-4 justify-start items-center w-full rounded border-[1px] border-border-grey bg-white p-4 transition duration-200
        hover:border-purple hover:bg-very-light-grey 
        ${isSelected ? 'border-purple bg-very-light-grey' : ''}
        sm:flex-col sm:gap-0 sm:justify-between sm:items-start sm:h-[181px]
      `}
      onClick={() => handleSelectPlan({ name: plan.name, radio: plan.name, price: plan.price })}
    >
      <Image
        src={icon}
        alt="Plan icon"
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-1 items-center">
        <strong className="text-base font-medium text-denim">
          {plan.name}
        </strong>

{
  /**
   
   
        <span className="text-sm font-normal text-grey leading-5">
          {priceFormatter(plan.price[planType], isCoupon)}
        </span>
*/
}
        {(isCoupon && freeTrialDescription) && (
          <span className="hidden text-xs font-normal text-denim sm:block">
            {freeTrialDescription}
          </span>
        )}
      </div>
    </button>
    </div>
  )
}