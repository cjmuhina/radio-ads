import { Input } from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

interface TextInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: any) => void;
    errorMessage: string
    hasError: boolean
    clearError: () => void
    nameOfClasses?: string,
    isTextareaInput?: boolean,
    isRequiredValue?: boolean,

  }
  
  export function TextInput(
    { label, 
      placeholder, 
      value, 
      onChange, 
      errorMessage, 
      hasError, 
      clearError , 
      nameOfClasses = '',
      isTextareaInput = false,
      isRequiredValue = true}: TextInputProps) {
  
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      const value = e.target.value
      onChange(value)
    }
  
    return (
      <div className="flex flex-col gap-1">
        {/* <div className="flex items-center justify-between">
          <label className="text-denim text-xs sm:text-sm	">{label}</label>
          {hasError && <span className="text-red text-xs sm:text-sm">{errorMessage}</span>}
        </div>
        <input
          className={`
            px-4 py-3 rounded ${hasError ? 'border-red' : 'border-border-color'} border-[1px] text-base text-denim font-medium  
            placeholder:text-black
            focus:outline-none focus:border-purple ${nameOfClasses}
          `}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onFocus={() => clearError()}
          
        /> */}

        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">

        {!isTextareaInput  &&
          <Input
            isRequired={isRequiredValue}
            type="text"
            label={label}
            defaultValue={placeholder}
            // className="max-w-xs"
            onChange={handleInputChange}
            onFocus={() => clearError()}
            value={value}
            size="md"
            isInvalid={hasError}
            errorMessage={errorMessage}
          />
        }


      {isTextareaInput  &&
          <Textarea
            // variant="bordered"
            placeholder="Enter your description"
            disableAnimation
            disableAutosize
            classNames={{
              // base: "max-w-lg",
              input: "resize-y min-h-[100px]",
            }}
            isRequired={isRequiredValue}
            label={label}
            defaultValue={placeholder}
            // className="max-w-xs"
            onChange={handleInputChange}
            onFocus={() => clearError()}
            value={value}
            size="md"
            isInvalid={hasError}
            errorMessage={errorMessage}
          />
      }
         </div>
         
        
      </div>

      
    )
  } 