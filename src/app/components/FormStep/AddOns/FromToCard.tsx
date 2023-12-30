import { Chip } from '@nextui-org/react';
import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';


export  function FromToCard() {


	const [value, setValue] = useState<any>({
		startDate: null,
		endDate: null,
	});

	const handleDateRangeValueChange = (newValue: any) => {
		console.log('newValue:', newValue);
		setValue(newValue);
	};
	return (
			<div>

			<div className="flex gap-4">
	
				<Datepicker
					placeholder={'Select Date Range (from - to)'}
					
					minDate={new Date()} 
					maxDate={new Date(new Date().setMonth(new Date().getMonth()+1))} 
					showFooter={true}
					// showShortcuts={true}
					primaryColor={'yellow'}
					value={value}
					onChange={handleDateRangeValueChange}
					displayFormat={"DD/MM/YYYY"}
					separator={" To "} 
					toggleClassName="absolute bg-yellow-500 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed" 
				/>
                
                 </div>



{/* <nav className="relative z-0 flex border rounded-xl dark:border-gray-700" aria-label="Tabs" role="tablist">
  <button type="button" className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400 active" id="bar-with-underline-item-1" data-hs-tab="#bar-with-underline-1" aria-controls="bar-with-underline-1" role="tab">
    12/12/2023
  </button>
  <button type="button" className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400" id="bar-with-underline-item-2" data-hs-tab="#bar-with-underline-2" aria-controls="bar-with-underline-2" role="tab">
  13/12/2023
  </button>
  <button type="button" className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400" id="bar-with-underline-item-3" data-hs-tab="#bar-with-underline-3" aria-controls="bar-with-underline-3" role="tab">
  14/12/2023
  </button>
  
   <button type="button" className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400" id="bar-with-underline-item-3" data-hs-tab="#bar-with-underline-3" aria-controls="bar-with-underline-3" role="tab">
   15/12/2023
    </button>
  
</nav> */}




                
                </div>
	
	);
}