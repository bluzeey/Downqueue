import React from 'react';
import { Calendar, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment)
const Event=[{ 
  title: "Work at Home",
  start: Date(2021, 11, 24),
  end: Date(2021, 11, 25),
  allDay: true,
  resource:"nothing"
}]
const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={Event}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)
export default MyCalendar