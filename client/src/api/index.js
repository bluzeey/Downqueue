import axios from 'axios';

const url="http://localhost:5000/events"

export const fetchEvents=()=>axios.get(url);
export const createEvent=(event)=>axios.post(url,event)
export const updateEvents=(updatedEvent,id)=>axios.patch(`${url}/${id}`,updatedEvent)
export const deleteEvent=(id)=>axios.delete(`${url}/${id}`)