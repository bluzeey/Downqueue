import axios from 'axios';

const url="http://localhost:5000/events"

export const fetchEvents=(user)=>axios.get(`${url}/${user}`);
export const createEvent=(event,user)=>axios.post(`${url}/${user}`,event)
export const updateEvents=(updatedEvent,user,id)=>axios.patch(`${url}/${user}/${id}`,updatedEvent)
export const deleteEvent=(user,id)=>axios.delete(`${url}/${user}/${id}`)