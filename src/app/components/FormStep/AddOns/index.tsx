import { Fragment, useState } from "react";

import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";

import { AddOnOption } from "./AddOnOption";
import { Footer } from "../../Footer";
import Form from "../../Form";
import { AddonWithPrices, Addon } from "../../../types/add-ons";

// import ADD_ONS from '../../../../data/add-ons.json'
import { FromToCard } from "./FromToCard";
import Datepicker from "react-tailwindcss-datepicker";
import { Tabs, Tab, Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, ScrollShadow, User, Button, Avatar } from "@nextui-org/react";

import TIMETABLE from '../../../../data/timetable.json'

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
function addDays(date: string, days: any) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function generateDummyData(selectedRadioDateRange: any) {

  let radioArray = [
    {
      id: "radio-1",
      name: "Clouds FM",
      logo: "https://scontent.fdar11-1.fna.fbcdn.net/v/t39.30808-1/339924489_1372068046706863_7473013869016800822_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=109&ccb=1-7&_nc_sid=4da83f&_nc_ohc=mqTI0vjMWTkAX9a7Tqu&_nc_ht=scontent.fdar11-1.fna&oh=00_AfAJ9ZyH5rs_c1BDR91MpOv3X6iqqw2qvkC4n_q3U6TRug&oe=65962AB0",
    },
    {
      id: "radio-2",
      name: "EFM Radio",
      logo: "https://scontent.fdar11-1.fna.fbcdn.net/v/t39.30808-1/339924489_1372068046706863_7473013869016800822_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=109&ccb=1-7&_nc_sid=4da83f&_nc_ohc=mqTI0vjMWTkAX9a7Tqu&_nc_ht=scontent.fdar11-1.fna&oh=00_AfAJ9ZyH5rs_c1BDR91MpOv3X6iqqw2qvkC4n_q3U6TRug&oe=65962AB0",
    },
    {
      id: "radio-3",
      name: "Radio ONE",
      logo: "https://scontent.fdar11-1.fna.fbcdn.net/v/t39.30808-1/339924489_1372068046706863_7473013869016800822_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=109&ccb=1-7&_nc_sid=4da83f&_nc_ohc=mqTI0vjMWTkAX9a7Tqu&_nc_ht=scontent.fdar11-1.fna&oh=00_AfAJ9ZyH5rs_c1BDR91MpOv3X6iqqw2qvkC4n_q3U6TRug&oe=65962AB0",
    },
    {
      id: "radio-4",
      name: "Choice FM",
      logo: "https://scontent.fdar11-1.fna.fbcdn.net/v/t39.30808-1/339924489_1372068046706863_7473013869016800822_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=109&ccb=1-7&_nc_sid=4da83f&_nc_ohc=mqTI0vjMWTkAX9a7Tqu&_nc_ht=scontent.fdar11-1.fna&oh=00_AfAJ9ZyH5rs_c1BDR91MpOv3X6iqqw2qvkC4n_q3U6TRug&oe=65962AB0",
    }
  ]

  const startDate: string = selectedRadioDateRange?.startDate;
  const endDate: string = selectedRadioDateRange?.endDate;

  const diff = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime());
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  // console.log("Diff in Days: " + diffDays);





  let dummyTimeTable = [];
  for (let i = 1; i < diffDays; i++) {
    let dateId = new Date(addDays(startDate, i).toString()).toLocaleDateString('en-GB')

    let radios: any[] = []
    radioArray.forEach((element) => {

      let newRadio: any = {
        id: element.id,
        name: element.name,
        logo: element.logo,
      };

      let radioAds = []
      let timeFrom = new Date();
      let timeTo = new Date();

      for (let iRadioAd = 1; iRadioAd < 24; iRadioAd++) {
        timeFrom.setHours(timeFrom.getHours() + iRadioAd);
        timeTo.setHours(timeFrom.getHours() + iRadioAd + 1);
        let newRadioAd = {
          id: newRadio.id + '-' + iRadioAd,
          name: iRadioAd + "", // change later
          timeFrom: timeFrom + "", // change later
          timeTo: timeTo + "", // change later
          price: 1000000,
        };
        radioAds.push(newRadioAd)
      }

      newRadio.radioAds = radioAds

      radios.push(newRadio)


    });




    let newTimetable = {
      id: dateId,
      label: dateId,
      radios: radios
    };
    dummyTimeTable.push(newTimetable);
  }
  console.log("dummyTimeTable==> ", dummyTimeTable)






  return dummyTimeTable;

}


export function AddOns() {


  // const [value, setDateRangeValue] = useState<any>({
  // 	startDate: null,
  // 	endDate: null,
  // });


  // let radioTimetableTabs: RadioTimetableTabs[] = [
  //   {
  //     id: "01/01/2024",
  //     label: "01/01/2024",
  //     radios: [
  //       {
  //         id: "clouds",
  //         name: "Clouds FM",
  //         logo: "https://scontent.fdar11-1.fna.fbcdn.net/v/t39.30808-1/339924489_1372068046706863_7473013869016800822_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=109&ccb=1-7&_nc_sid=4da83f&_nc_ohc=mqTI0vjMWTkAX9a7Tqu&_nc_ht=scontent.fdar11-1.fna&oh=00_AfAJ9ZyH5rs_c1BDR91MpOv3X6iqqw2qvkC4n_q3U6TRug&oe=65962AB0",
  //         radioAds: [
  //           {
  //             id: "string",
  //             name: "string",
  //             timeFrom: "string",
  //             timeTo: "string",
  //             price: "string",
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  // let tabs = [
  //   {
  //     id: "photos",
  //     label: "Photos",
  //     content: "Lorem ipsum photos."
  //   },
  //   {
  //     id: "music",
  //     label: "Music",
  //     content: "Lorem ipsum music."
  //   },
  //   {
  //     id: "videos",
  //     label: "Videos",
  //     content: "Lorem ipsum videos."
  //   }
  // ];


  let radioTimetableTabs: any[] = [];
  const [radioTimetableData, setRadioTimetableData] = useState([])
  const [tabData, setTabData] = useState([])


  const { addOns, setAddOns, selectedRadioDateRange, setSelectedRadioDateRange, isCoupon } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()
  function findIfSelectedById(source: any, id: any): boolean {
    // console.log("findIfSelectedById id: ", id)
    // console.log("findIfSelectedById source: ", source)
    for (var i = 0; i < source.length; i++) {
      if (source[i].id === id) {
        // return source[i];
        return true
      }
    }
    // throw "Couldn't find object with id: " + id;
    return false
  }
  function handleSelectAddon(addOn: AddonWithPrices) {
    console.log("handleSelectAddon selected: ", addOn)
    console.log("nrdout selected: ", findIfSelectedById(addOns, addOn.id))


    console.log("status selected: ", addOns.find(({ id }) => {
      if (addOn.id === id) {
        return "Yesssssss"
      } else {
        return "Noooooooooo"
      }
    }))

    // const formattedAddOn = {
    //   id: addOn.id,
    //   title: addOn.title,
    //   description: addOn.description,
    //   price: addOn.price[isCoupon ? 'coupon' : 'noCoupon']
    // }
    const formattedAddOn = {
      id: addOn.id,
      name: addOn.name,
      timeFrom: addOn.timeFrom,
      timeTo: addOn.timeTo,
      price: addOn.price
      // price: addOn.price[isCoupon ? 'coupon' : 'noCoupon']
    }
    setAddOns((currentAddons) => [...currentAddons, formattedAddOn])
    console.log("addOns ==> ", addOns)

  }

  function handleUnselectedAddon(addOn: Addon) {
    console.log("handleUnselectedAddon unselected: ", addOn)
    console.log("nrdout unselected: ", findIfSelectedById(addOns, addOn.id))



    setAddOns((currentAddons) => currentAddons.filter(currentAddon => currentAddon.id !== addOn.id))
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

    // radioTimetableTabs = generateDummyData(newValue)

    let resultValue: any = generateDummyData(newValue)

    setRadioTimetableData(resultValue)


    let tabs: any = [
      {
        id: "photos",
        label: "Photos",
        content: "Lorem ipsum photos."
      },
      {
        id: "music",
        label: "Music",
        content: "Lorem ipsum music."
      },
      {
        id: "videos",
        label: "Videos",
        content: "Lorem ipsum videos."
      }
    ];
    var JsonObject = JSON.parse(JSON.stringify(tabs));

    setTabData(JsonObject)

  };

  // const onSelectionChange = (selectedKey: any) => {
  // 	console.log('selectedKey newValue:', selectedKey);

  // }


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
              maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
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



          {selectedRadioDateRange &&
            <div className="flex w-full flex-col">



              <ScrollShadow orientation="horizontal" className="max-w-[500px] max-h-[500px]">

                <div className="flex flex-wrap ">
                  <Tabs aria-label="Timetables" items={TIMETABLE} fullWidth={false} color="warning" variant='bordered'>
                    {(item) => (
                      <Tab key={item.id} title={item.label}>

                        <i className="text-black">Timetable for date: {item.label}</i>
                        {item.radios.map((radio, radioIndex) => (
                          <>
                            <div key={radio.id}>
                            <Card className="max-w-md">
                              <CardHeader className="justify-between">
                                <div className="flex gap-5">
                                  <Avatar isBordered radius="full" size="md" src={radio.logo} />
                                  <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">{radio.name}</h4>
                                    <h5 className="text-small tracking-tight text-default-400">{item.label}</h5>
                                  </div>
                                </div>
                                <Button
                                  className="bg-transparent text-foreground border-default-200" 
                                  color="primary"
                                  radius="full"
                                  size="sm"
                                  variant="bordered"
                                >
                                Schedule
                                </Button>
                              </CardHeader>
                              <CardBody className="px-3 py-0 text-small text-default-400">
                              <div className="max-h-[340px]">
                                  {/* <div className="space-y-1">
                                    <h4 className="text-medium font-medium">NextUI Components</h4>
                                    <p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>
                                  </div> */}
                                  <Divider className="my-4" />
                                  <div className="flex h-5 items-center space-x-4 text-small">
                                      {radio.radioAds.map((radioAd, radioAdIndex) => (
                                        <>
                                          <AddOnOption
                                            key={radioAd.id}
                                            addOn={radioAd}
                                            isSelected={findIfSelectedById(addOns, radioAd.id)}
                                            // isSelected={!!addOns.find(({ id }) => radioAd.id === id)}
                                            handleSelectAddon={handleSelectAddon}
                                            handleUnselectedAddon={handleUnselectedAddon}
                                          />
                                          <Divider orientation="vertical" />
                                        </>
                                      ))}
                                    
                                   
                                  </div>
                                </div>
                              </CardBody>
                              <CardFooter className="gap-3">
                                <div className="flex gap-1">
                                  <p className="font-semibold text-default-400 text-small">{radio?.radioAds?.length}</p>
                                  <p className=" text-default-400 text-small">Vipindi</p>
                                </div>
                                <div className="flex gap-1">
                                  <p className="font-semibold text-default-400 text-small">{item.label}</p>
                                  <p className="text-default-400 text-small">Date</p>
                                </div>
                              </CardFooter>
                            </Card>

                           


                            
                             

                             




                            </div>

                          </>
                        ))}


                      </Tab>
                    )}
                  </Tabs>
                </div>
              </ScrollShadow>

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