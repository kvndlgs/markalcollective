import * as React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const Calendar = () => {
        const [dateRange, setDateRange] = React.useState([null, null]);
        const [startDate, endDate] = dateRange;
        return (
          <DatePicker
            placeholderText='BOOK TA SESSION'
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            withPortal
          />
        );
}

export default Calendar;