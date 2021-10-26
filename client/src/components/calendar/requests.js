import { excludeById, getHashValues, getTodayStr } from '../../utils/utils'
import {firebase} from '../../lib/firebase.prod'
/*
functions that simulate network requests
*/

const user=JSON.parse(window.localStorage.getItem('authUser'))
let todayStr = getTodayStr()
let eventGuid = 0
let eventDb = []
const db=firebase.firestore()
async function getEvents() {
    const snapshot = await db.collection("User-events").doc(user.uid).collection("events").get()
    const collection = {};
    snapshot.forEach(doc => {
        collection[doc.id] = doc.data();
        let event={
          id:doc.data().id,
          title:doc.data().title,
          start:doc.data().start,
          end:doc.data().end}
        eventDb.push(event)
        eventGuid=parseInt(doc.data().id)+1
    });
}

const DELAY = 200
let simulateErrors = false


export async function  requestEventsInRange(startStr, endStr) {
  console.log(`[STUB] requesting events from ${startStr} to ${endStr}`)
  await getEvents()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('error'))
      } else {
        resolve(eventDb)
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
        console.log(newEventId)
        let objWithId = {...plainEventObject, id: newEventId}
        eventDb.push(objWithId)
        db.collection("User-events").doc(user.uid).collection("events").doc(newEventId).set(objWithId)
        resolve(newEventId)

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
        let Idstring=String(plainEventObject.id)
        eventDb.push(plainEventObject)
        resolve(eventDb)
        db.collection("User-events").doc(user.uid).collection("events").doc(Idstring).update(plainEventObject)
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
        let Idstring= String(plainEventObject.id)
        resolve(eventDb)
        db.collection("User-events").doc(user.uid).collection("events").doc(Idstring).delete()
      }
    }, DELAY)
  })
}

function createEventId() {
  return String(eventGuid++)
}