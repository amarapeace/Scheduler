import React, {useState} from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = ({id}) => {
    const [value, onChange] = useState(new Date());

  return (
    <div>
    <h1>My Calendar</h1>
    <br />
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default MyCalendar;