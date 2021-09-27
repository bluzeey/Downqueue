import axios from 'axios';
import { eventDb } from '../components/calendar/requests';

const url="http://localhost:5000/events"

export const fetchEvents=()=>axios.get(url);
export const createEvent=(event)=>axios.post(url,event)
export const deleteEvents=()=>axios.delete(url)