'use client';

import { Fragment } from "react";

import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { ACTIONS } from "../../../contexts/form";

import { TextInput } from "../../Form/TextInput";
import Form from "../../Form";
import { Footer } from "../../Footer";

export function YourInfo() {
  const {
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField,
    companyNameField,
    dispatchCompanyNameField,
  } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()

  function validateForm() {
    let formHasError = false

    if (!nameField.value) {
      dispatchNameField({ type: ACTIONS.SET_ERROR, errorMessage: 'Name is required' })
      formHasError = true
    }

    if (!emailField.value) {
      // dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is required' })
      // formHasError = true
    } else {
      const emailRegex = /\S+@\S+\.\S+/
      if (!emailRegex.test(emailField.value)) {
        dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is invalid' })
        formHasError = true
      }
    }

    if (!phoneNumberField.value) {
      dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is required' })
      formHasError = true
    } else {
      if (phoneNumberField.value.length < 6) {
        dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is invalid' })
        formHasError = true
      }
    }

    if (!companyNameField.value) {
        dispatchCompanyNameField({ type: ACTIONS.SET_ERROR, errorMessage: 'Company Full Name is required' })
        formHasError = true
      }

    return !formHasError
  }

  function handleGoForwardStep() {
    const isValid = validateForm()
    if (isValid) {
      saveValueToLocalStorage('your-info', JSON.stringify({
        name: nameField.value,
        email: emailField.value,
        phoneNumber: phoneNumberField.value,
        companyName: companyNameField.value
      }))
      handleNextStep()
    }
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Personal & Company Info"
          description="Please provide your Company Name, your Full name, phone number, and email address."
        />

        <div className="mt-5 flex flex-col gap-4">

        <TextInput
            label="Company Name"
            placeholder="e.g. ComapnyFull Name"
            value={companyNameField.value}
            onChange={(value: string) => dispatchCompanyNameField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={companyNameField.errorMessage}
            clearError={() => dispatchCompanyNameField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={companyNameField.hasError}
          />

          <TextInput
            label="Your Full Name"
            placeholder="e.g. First Middle Last"
            value={nameField.value}
            onChange={(value: string) => dispatchNameField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={nameField.errorMessage}
            clearError={() => dispatchNameField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={nameField.hasError}
          />
          
          <TextInput
            label="Phone Number"
            placeholder="e.g. +255 71XX XXX XXX"
            value={phoneNumberField.value}
            onChange={(value: string) => dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={phoneNumberField.errorMessage}
            clearError={() => dispatchPhoneNumberField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={phoneNumberField.hasError}
          />

          <TextInput
              label="Email Address"
              placeholder="e.g. example@domain.com"
              value={emailField.value}
              onChange={(value: string) => dispatchEmailField({ type: ACTIONS.SET_VALUE, value })}
              errorMessage={emailField.errorMessage}
              clearError={() => dispatchEmailField({ type: ACTIONS.CLEAR_ERROR })}
              hasError={emailField.hasError}
              isRequiredValue={false}
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