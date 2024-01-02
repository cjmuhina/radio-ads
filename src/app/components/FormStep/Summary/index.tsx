'use client';

import { Fragment, useEffect, useState } from "react";

import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";
import { priceFormatter } from "../../../utils/price-formatter";

import { Footer } from "../../Footer";
import Form from "../../Form";
import { PostConfirmation } from "./PostConfirmation";
import { TotalPrice } from "./TotalPrice";
import { AddOnItem } from "./AddOnItem";

export function Summary() {
  const [submitted, setSubmitted] = useState(false)

  const { handlePreviousStep, moveToStep } = useFormStep()

  const { addOns, selectedPlan, isCoupon, clearForm } = useForm()

  function handleGoForwardStep() {
    setSubmitted(true)
  }

  function handleChangePlan() {
    moveToStep(2)
  }

  useEffect(() => {
    if (submitted) {
      clearForm()

      setTimeout(() => {
        moveToStep(1)
      }, 10000)
    }
  }, [submitted, moveToStep])

  if (submitted) {
    return (
      <PostConfirmation />
    )
  }

  const addOnsTotalPrice = addOns.reduce((acc, addOn) => acc + addOn.price, 0)
  const finalPrice = selectedPlan?.price + addOnsTotalPrice

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Finishing up"
          description="Double-check everything if looks OK before confirming."
        />

        <div className="mt-5 flex flex-col gap-3 bg-very-light-grey rounded-lg p-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 items-start">

              
              <strong className="text-sm font-medium text-denim sm:text-base">
                {`${selectedPlan?.name}`}

{
                  /**(${isCoupon ? 'Yearly' : 'Monthly'}) */
                }
              </strong>
             
            </div>

                {
                  /**
                   <span className="text-sm leading-5 font-bold text-denim sm:text-base">
                    {priceFormatter(selectedPlan?.price, isCoupon)}
                  </span>
                   */
                }
                <span className="text-sm leading-5 font-bold text-denim sm:text-base">
                <button
                                className="text-sm leading-5 font-normal text-grey underline cursor-pointer hover:text-purple duration-200 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                                onClick={handleChangePlan}
                              >
                                Change
                              </button>
              </span>
          </div>

          {addOns.length > 0 && (
            <div className="h-px w-full bg-border-grey" />
          )}

          {addOns.map((addOn, index) => (
            <AddOnItem
              key={index}
              title={addOn.name}
              price={addOn.price}
              timeFrom={addOn.timeFrom}
              timeTo={addOn.timeTo}
              isCoupon={isCoupon}
            />
          ))}
        </div>

        <TotalPrice
          finalPrice={finalPrice}
          isCoupon={isCoupon}
        />

             

      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
}