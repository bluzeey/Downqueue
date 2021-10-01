import { excludeById, getTodayStr } from '../../utils/utils'
import {useDispatch} from 'react-redux'
import * as api from '../../api'
/*
functions that simulate network requests
*/

let todayStr = getTodayStr()
let eventGuid = 0
let eventDb = []

async function getEvents(){
   const data=await api.fetchEvents()
   for(let i=0;i<data.data.length;i++){
     let event={
       id:i.toString(),
       title:data.data[i].title,
       start:data.data[i].start,
       end:data.data[i].end,
       _id:data.data[i]._id
     }
     eventDb.push(event)
     eventGuid=data.data[data.data.length-1].id+1
   }
}

const DELAY = 200
let simulateErrors = false


export async function  requestEventsInRange(startStr, endStr) {
  console.log(`[STUB] requesting events from ${startStr} to ${endStr}`)
  getEvents()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('error'))
      } else {
        resolve(eventDb) // won't use the start/end, always return whole DB
      }
    }, DELAY)
  })
}

export async function requestEventCreate(plainEventObject) {
  console.log('[STUB] requesting event create:', plainEventObject)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('error'))
      } else {
        let newEventId = createEventId()
        let objWithId = {...plainEventObject, id: newEventId}
        eventDb.push(objWithId)
        resolve(newEventId)
        api.createEvent(objWithId)
      }
    }, DELAY)
    
  })
}

export function requestEventUpdate(plainEventObject) {
  console.log('[STUB] requesting event update:', plainEventObject)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('problem'))
      } else {
        eventDb = excludeById(eventDb, plainEventObject.id)
        eventDb.push(plainEventObject)
        resolve(eventDb)
        console.log(plainEventObject.extendedProps._id)
        api.updateEvents(plainEventObject,plainEventObject.extendedProps._id)
      }
    }, DELAY)
  })
}

export function requestEventDelete(plainEventObject) {
  console.log('[STUB] requesting event delete, id:', plainEventObject.id)

  return new Promise((resolve, reject) => {
    setTimeout(() => { // simulate network delay
      if (simulateErrors) {
        reject(new Error('problem'))
      } else {
        eventDb = excludeById(eventDb, plainEventObject.id)
        resolve(eventDb)
        api.deleteEvent(plainEventObject.extendedProps._id)
      }
    }, DELAY)
  })
}

function createEventId() {
  return String(eventGuid++)
}
