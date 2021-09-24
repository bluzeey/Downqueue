import React from 'react';
import { Calendar, momentLocalizer,Views} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

let allViews = Object.keys(Views).map(k => Views[k])
const localizer = momentLocalizer(moment)
const Event=[{ 
  title: "Work at Home",
  start: Date(2021, 9, 24),
  end: Date(2021, 9, 25),
  allDay: false,
  resource:"nothing"
},{
  title: "Work at Home",
  start: Date(2021, 9, 25),
  end: Date(2021, 9, 26),
  allDay: true,
  resource:"nothing"
}]
const MyCalendar = props => (
  <div>
    <Calendar
      step={60}
      views={allViews}
      localizer={localizer}
      events={Event}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)
export default MyCalendar