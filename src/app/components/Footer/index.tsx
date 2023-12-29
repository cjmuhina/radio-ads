import { useFormStep } from "../../hooks/use-form-step";

interface FooterProps {
  handleGoBack: () => void;
  handleGoForwardStep: () => void;
}

export function Footer({ handleGoBack, handleGoForwardStep }: FooterProps) {
  const { currentStep, steps } = useFormStep();

  const numberOfSteps = steps.length;
  const isLastStep = currentStep === numberOfSteps;

  return (
    <footer className="p-4 bg-white flex justify-between items-center">
      <button
        onClick={handleGoBack}
        className={`${currentStep === 1 ? 'invisible' : 'visible'} py-3 px-4 rounded text-sm text-white  font-medium sm:text-base bg-gradient-to-tr from-yellow-600 to-yellow-800 text-white shadow-lg`}
      >
        Go back
      </button>
      <button
        onClick={handleGoForwardStep}
        className={`${isLastStep ? 'bg-purple' : 'bg-denim'} py-3 px-4 rounded text-sm text-white  font-medium sm:text-base bg-gradient-to-tr from-yellow-600 to-yellow-800 text-white shadow-lg`}
      >
        {isLastStep ? 'Confirm' : 'Next step'}
      </button>
    </footer >
  )
}