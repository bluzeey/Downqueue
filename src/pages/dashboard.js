import React,{useState} from 'react'
import MyCalendar from '../components/calendar/Calendar.js'
import  Form  from '../components/form';
const Dashboard = () => {
    const [eventName, setEventName] = useState('')
    const [startDate, setStartDate] = useState(Date)
    const [endDate, setEndDate] = useState(Date)
    return (
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <div>
            <Form>
                <Form.Title>Set up an Event </Form.Title>
                <Form.Input
                    placeholder="Event Name"
                    value={eventName}
                    onChange={({ target }) => setEventName(target.value)}/>
                 <Form.Input
                    type="date"
                    placeholder="Starting Date"
                    value={startDate}
                    onChange={({ target }) => setStartDate(target.value)}/>
                  <Form.Input
                    type="date"
                    placeholder="Ending Date"
                    value={endDate}
                    onChange={({ target }) => setEndDate(target.value)}/>
                     <Form.Submit  type="submit">
                        Submit
                    </Form.Submit>
            </Form>
            </div>
            <MyCalendar/>
        </div>
    )
}

export default Dashboard
