'use client';

import { Fragment } from "react";

import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { ACTIONS } from "../../../contexts/form";

import { TextInput } from "../../Form/TextInput";
import Form from "../../Form";
import { Footer } from "../../Footer";

export function YourAds() {
  const {
   
    adsDescField,
    dispatchAdsDescField,
  } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()

  function validateForm() {
    let formHasError = false

    
    if (!adsDescField.value) {
        dispatchAdsDescField({ type: ACTIONS.SET_ERROR, errorMessage: 'Ads description is required' })
        formHasError = true
      }

    return !formHasError
  }

  function handleGoForwardStep() {
    const isValid = validateForm()
    if (isValid) {
      saveValueToLocalStorage('ads-info', JSON.stringify({
        adsDesc: adsDescField.value
      }))
      handleNextStep()
    }
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Radio Ads"
          description="Please provide your Ads description."
        />

        <div className="mt-5 flex flex-col gap-4">
          
          
          <TextInput
          isTextarea={true}
            label="Description"
            placeholder="your Description here...."
            value={adsDescField.value}
            onChange={(value: string) => dispatchAdsDescField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={adsDescField.errorMessage}
            clearError={() => dispatchAdsDescField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={adsDescField.hasError}
            nameOfClasses = ' min-h-[200px]'
          />
        </div>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
} 