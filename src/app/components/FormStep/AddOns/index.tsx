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


function generateDummyData(selectedRadioDateRange: any){

  const startDate: string  = selectedRadioDateRange?.startDate;
  const endDate: string    = selectedRadioDateRange?.endDate;

  var diff = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime());
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
  console.log("Diff in Days: " + diffDays);


    let dummyTimeTable = [];
    for (let i = 1; i < diffDays; i++) {
        let newName = {
          id:i.toString(),
          name:"Tony"
        };
        dummyTimeTable.push(newName);
    }
    console.log("dummyTimeTable==> ",dummyTimeTable)

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
          logo: "https://scontent.fdar11-1.fna.fbcdn.net/v/t39.30808-1/339924489_1372068046706863_7473013869016800822_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=109&ccb=1-7&_nc_sid=4da83f&_nc_ohc=mqTI0vjMWTkAX9a7Tqu&_nc_ht=scontent.fdar11-1.fna&oh=00_AfAJ9ZyH5rs_c1BDR91MpOv3X6iqqw2qvkC4n_q3U6TRug&oe=65962AB0",
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
      id: addOn.id,
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

    generateDummyData(newValue)

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
                maxDate={new Date(new Date().setMonth(new Date().getMonth()+3))} 
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


                      {item.radios.map((radioItem, radioIndex) => (
                          <>
                              <Card>
                                <CardHeader className="flex gap-3">
                                  <Image
                                    alt={radioItem?.name}
                                    height={40}
                                    radius="sm"
                                    src={radioItem.logo}
                                    width={40}
                                  />
                                  <div className="flex flex-col">
                                    <p className="text-md">{radioItem?.name}</p>
                                    {/* <p className="text-small text-default-500">{radioItem?.name}</p> */}
                                  </div>
                                </CardHeader>
                                <Divider/>
                                <CardBody>
                                  {ADD_ONS.map((addOn, index) => (
                                        <>
                                        <AddOnOption
                                          key={index}
                                          addOn={addOn}
                                          isSelected={!!addOns.find(({ title }) => addOn.title === title)}
                                          handleSelectAddon={handleSelectAddon}
                                          handleUnselectedAddon={handleUnselectedAddon}
                                        />
                                        <p></p>
                                        </>
                                      ))}
                                </CardBody>
                                <Divider/>
                                {/* <CardFooter>
                                  <Link
                                    isExternal
                                    showAnchorIcon
                                    href="https://github.com/nextui-org/nextui"
                                  >
                                    Visit source code on GitHub.
                                  </Link>
                                </CardFooter> */}
                                </Card>
                          </>
                        ))}

                     

                </Tab>
              )}
            </Tabs>

             </div>  

            
            }

           

          {/* {ADD_ONS.map((addOn, index) => (
            <>
            <AddOnOption
              key={index}
              addOn={addOn}
              isSelected={!!addOns.find(({ title }) => addOn.title === title)}
              handleSelectAddon={handleSelectAddon}
              handleUnselectedAddon={handleUnselectedAddon}
            />
            <p></p>
            </>
          ))} */}
        </div>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
}