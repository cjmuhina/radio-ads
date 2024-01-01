import { createContext, useEffect, useReducer, useState } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

type Field = {
  value: string;
  hasError: boolean;
  errorMessage: string;
}

const initialState = {
  value: '',
  hasError: false,
  errorMessage: ''
}

type FormContextData = {
  nameField: Field;
  dispatchNameField: React.Dispatch<any>;
  emailField: Field;
  dispatchEmailField: React.Dispatch<any>;
  phoneNumberField: Field;
  dispatchPhoneNumberField: React.Dispatch<any>;
  companyNameField: Field;
  dispatchCompanyNameField: React.Dispatch<any>;
  adsDescField: Field;
  dispatchAdsDescField: React.Dispatch<any>;
  isCoupon: boolean;
  setIsCoupon: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlan: Plan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
  selectedRadioDateRange: RadioDateRange;
  setSelectedRadioDateRange: React.Dispatch<React.SetStateAction<RadioDateRange>>;
  addOns: { id: string, name: string, timeFrom: string,timeTo: string, price: number }[];
  setAddOns: React.Dispatch<React.SetStateAction<{  id: string, name: string; timeFrom: string; timeTo: string; price: number; }[]>>;
  clearForm: () => void;
}

export const FormContext = createContext({
  nameField: initialState,
  dispatchNameField: () => {},
  emailField: initialState,
  dispatchEmailField: () => {},
  phoneNumberField: initialState,
  dispatchPhoneNumberField: () => {},
  companyNameField: initialState,
  dispatchCompanyNameField: () => {},
  adsDescField: initialState,
  dispatchAdsDescField: () => {},
  
  isCoupon: false,
  setIsCoupon: () => {},
  selectedPlan: null as any,
  setSelectedPlan: () => {},
  selectedRadioDateRange: null as any,
  setSelectedRadioDateRange: () => {},
  addOns: [],
  setAddOns: () => {},
  clearForm: () => {}
} as FormContextData);

export const ACTIONS = {
  SET_VALUE: 'SET_VALUE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
}

function handleFormState(
  state: Field,
  action: any
) {
  switch (action.type) {
    case ACTIONS.SET_VALUE:
      return {
        ...state,
        value: action.value,
        hasError: false,
        errorMessage: ''
      }
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.errorMessage
      }
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: '',
        hasError: false
      }
    default:
      return state
  }
}

export type Plan = {
  name: string;
  price: number
}

export type RadioDateRange = {
  startDate: string;
  endDate: string
}

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  // Your Info
  const [nameField, dispatchNameField] = useReducer(handleFormState, initialState)
  const [emailField, dispatchEmailField] = useReducer(handleFormState, initialState)
  const [phoneNumberField, dispatchPhoneNumberField] = useReducer(handleFormState, initialState)
  const [companyNameField, dispatchCompanyNameField] = useReducer(handleFormState, initialState)

  // Plan
  const [isCoupon, setIsCoupon] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(null as any);
  const [selectedRadioDateRange, setSelectedRadioDateRange] = useState<RadioDateRange>(null as any);

  // Description Ads
  const [adsDescField, dispatchAdsDescField] = useReducer(handleFormState, initialState)


  // Add Ons
  const [addOns, setAddOns] = useState<{ id: string, name: string, timeFrom: string,timeTo: string, price: number }[]>([]);

  const { getValueFromLocalStorage, removeValueFromLocalStorage } = useLocalStorage()

  function clearForm() {
    removeValueFromLocalStorage('your-info')
    removeValueFromLocalStorage('ads-info')
    removeValueFromLocalStorage('plan')
    removeValueFromLocalStorage('add-ons')

    dispatchNameField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchEmailField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchCompanyNameField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchAdsDescField({ type: ACTIONS.SET_VALUE, value: '' })
    setIsCoupon(false)
    setSelectedPlan(null as any)
    setSelectedRadioDateRange(null as any)
    setAddOns([])
  }

  useEffect(() => {
    const yourInfoFromLocalStorage = getValueFromLocalStorage('your-info')
    if (yourInfoFromLocalStorage) {
      dispatchNameField({ type: ACTIONS.SET_VALUE, value: yourInfoFromLocalStorage.name })
      dispatchEmailField({ type: ACTIONS.SET_VALUE, value: yourInfoFromLocalStorage.email })
      dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value: yourInfoFromLocalStorage.phoneNumber })
      dispatchCompanyNameField({ type: ACTIONS.SET_VALUE, value: yourInfoFromLocalStorage.companyName })
    }

    const adsInfoFromLocalStorage = getValueFromLocalStorage('ads-info')
    if (adsInfoFromLocalStorage) {
      dispatchAdsDescField({ type: ACTIONS.SET_VALUE, value: adsInfoFromLocalStorage.companyName })
    }

    const planFromLocalStorage = getValueFromLocalStorage('plan')
    if (planFromLocalStorage) {
      setSelectedPlan(planFromLocalStorage.name)
      setIsCoupon(planFromLocalStorage.isCoupon)
    }

    const radioDateRangeFromLocalStorage = getValueFromLocalStorage('radio-date-range')
    if (radioDateRangeFromLocalStorage) {
      setSelectedRadioDateRange(radioDateRangeFromLocalStorage)
    }

    const addOnsFromLocalStorage = getValueFromLocalStorage('add-ons')
    if (addOnsFromLocalStorage) {
      setAddOns(addOnsFromLocalStorage)
    }
  }, [])

  const value = {
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField,
    companyNameField,
    dispatchCompanyNameField,
    adsDescField,
    dispatchAdsDescField,
    isCoupon,
    setIsCoupon,
    selectedPlan,
    setSelectedPlan,
    selectedRadioDateRange,
    setSelectedRadioDateRange,
    addOns,
    setAddOns,
    clearForm
  }

  return (
    <FormContext.Provider value={{ ...value }}>
      {children}
    </FormContext.Provider>
  );
};