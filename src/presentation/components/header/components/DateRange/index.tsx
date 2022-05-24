import React from 'react'
import { DateRangePicker, DateRangeProps } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function DateRange({ onChange }: DateRangeProps) {
    const selectionRange = {
        startDate: new Date(),
        endDate: null,
        key: 'selection',
    }

    return (
        <DateRangePicker
            // editableDateInputs
            // moveRangeOnFirstSelection={false}
            ranges={[selectionRange]}
            onChange={onChange}
            className="date"
        />
    )
}

export default DateRange