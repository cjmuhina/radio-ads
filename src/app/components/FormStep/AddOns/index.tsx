import { Fragment, useState } from "react";

import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";

import { AddOnOption } from "./AddOnOption";
import { Footer } from "../../Footer";
import Form from "../../Form";
import { AddonWithPrices, Addon } from "../../../types/add-ons";

import ADD_ONS from '../../../../data/add-ons.json'
import { FromToCard } from "./FromToCard";
import Datepicker from "react-tailwindcss-datepicker";
import {Tabs, Tab, Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


export type RadioAd = {
  id: string;
  name: string;
  timeFrom: string;
  timeTo: string;
  price: string;
}
export type Radio = {
  id: string;
  name: string;
  logo: string;
  radioAds: [RadioAd];
}
export type RadioTimetableTabs = {
  id: string;
  label: string;
  radios: [Radio];
  
}



export function AddOns() {


  
	// const [value, setDateRangeValue] = useState<any>({
	// 	startDate: null,
	// 	endDate: null,
	// });

  
  const radioTimetableTabs: RadioTimetableTabs[] = [
    {
      id: "01/01/2024",
      label: "01/01/2024",
      radios: [
        {
          id: "clouds",
          name: "Clouds FM",
          logo: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
          radioAds: [
            {
              id: "string",
              name: "string",
              timeFrom: "string",
              timeTo: "string",
              price: "string",
            }
          ]
        }
      ]
    }
  ];


  const { addOns, setAddOns, selectedRadioDateRange, setSelectedRadioDateRange, isCoupon } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()

  function handleSelectAddon(addOn: AddonWithPrices) {
    const formattedAddOn = {
      title: addOn.title,
      description: addOn.description,
      price: addOn.price[isCoupon ? 'coupon' : 'noCoupon']
    }
    setAddOns((currentAddons) => [...currentAddons, formattedAddOn])
  }

  function handleUnselectedAddon(addOn: Addon) {
    setAddOns((currentAddons) => currentAddons.filter(currentAddon => currentAddon.title !== addOn.title))
  }

  function handleGoForwardStep() {
    saveValueToLocalStorage('add-ons', JSON.stringify(addOns))
    handleNextStep()
  }


  const handleDateRangeValueChange = (newValue: any) => {
		console.log('handleDateRangeValueChange newValue:', newValue);
		// setDateRangeValue(newValue);
    setSelectedRadioDateRange(newValue)
    saveValueToLocalStorage('radio-date-range', JSON.stringify(newValue))
	};


  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Radio Timetable"
          description="Pick date range and radio timetable"
        />

        <div className="mt-5 flex flex-col gap-3">

          {/* <FromToCard/> */}

          <div className="flex gap-4">
              <Datepicker
                placeholder={'Select Date Range (from - to)'}
                minDate={new Date()} 
                maxDate={new Date(new Date().setMonth(new Date().getMonth()+1))} 
                showFooter={true}
                // showShortcuts={true}
                primaryColor={'yellow'}
                value={selectedRadioDateRange}
                onChange={handleDateRangeValueChange}
                displayFormat={"DD/MM/YYYY"}
                separator={" To "} 
                toggleClassName="absolute bg-yellow-600 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed" 
              />
          </div>

          {selectedRadioDateRange  &&
             <div className="flex w-full flex-col">
              
               {/* <Card>
               <CardBody>
                 <p>Radio slots available from {selectedRadioDateRange.startDate} to {selectedRadioDateRange.endDate} are below
                 </p>
               </CardBody>
             </Card> */}

             <Tabs aria-label="Radio timetable" items={radioTimetableTabs}>
              {(item) => (
                <Tab key={item.id} title={item.label}>
                  
                      {/* {item.content} */}

                      {item.radios.map((radioItem,i) => <li key={i}>Test</li>)}

                     

                </Tab>
              )}
            </Tabs>

             </div>  

            
            }

           

          {ADD_ONS.map((addOn, index) => (
            <AddOnOption
              key={index}
              addOn={addOn}
              isSelected={!!addOns.find(({ title }) => addOn.title === title)}
              handleSelectAddon={handleSelectAddon}
              handleUnselectedAddon={handleUnselectedAddon}
            />
          ))}
        </div>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
}