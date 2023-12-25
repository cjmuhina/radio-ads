import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';


export  function FromToCard() {
	const [value, setValue] = useState<any>({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});

	const handleValueChange = (newValue: any) => {
		console.log('newValue:', newValue);
		setValue(newValue);
	};
	return (
			<div>
                <hr className='mt-4 mb-4' />
                <p>Date from and To :</p>
				<Datepicker
					placeholder={'Select Date'}
					showShortcuts={true}
					showFooter={true}
					primaryColor={'cyan'}
					value={value}
					onChange={handleValueChange}
				/>
                </div>
	
	);
}