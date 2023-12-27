'use client';

import { useFormStep } from "../../hooks/use-form-step";

import { YourInfo } from "./YourInfo";
import { Plans } from "./Plans";
import { AddOns } from "./AddOns";
import { Summary } from "./Summary";

const steps = [
  {
    step: 1,
    component: YourInfo
  },
  {
    step: 2,
    component: AddOns
  },
  {
    step: 3,
    component: Plans
  },
  {
    step: 4,
    component: Summary
  }
]

export function FormStep() {
  const { currentStep } = useFormStep();

  const step = steps.find(({ step }) => step === currentStep);

  return (
    <div className="flex flex-col flex-1  justify-between pb-20">
     
        
            
            {
        /**
         * <div className="pb-20 	">
         <h1 className="uppercase text-center font-extrabold text-transparent text-lg	 bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">
              Online Radio Ads
            </h1>
            </div>
         */
      }
          

      {step && step.component()}
    </div>
  )
} 