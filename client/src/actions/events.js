import { requestEventsInRange, requestEventCreate, requestEventUpdate, requestEventDelete } from '../components/calendar/requests'

export default {

  toggleWeekends() {
    return {
      type: 'TOGGLE_WEEKENDS'
    }
  },

  requestEvents(startStr, endStr) {
    return (dispatch) => {
      return requestEventsInRange(startStr, endStr).then((plainEventObjects) => {
        dispatch({
          type: 'RECEIVE_EVENTS',
          plainEventObjects
        })
      })
    }
  },

  createEvent(plainEventObject) {
    return (dispatch) => {
      return requestEventCreate(plainEventObject).then((newEventId) => {
        dispatch({
          type: 'CREATE_EVENT',
          plainEventObject: {
            id: newEventId,
            ...plainEventObject
          }
        })
      })
    }
  },

  updateEvent(plainEventObject) {
    return (dispatch) => {
      return requestEventUpdate(plainEventObject).then(() => {
        dispatch({
          type: 'UPDATE_EVENT',
          plainEventObject
        })
      })
    }
  },

  deleteEvent(plainEventObject) {
    return (dispatch) => {
      return requestEventDelete(plainEventObject).then(() => {
        dispatch({
          type: 'DELETE_EVENT',
          plainEventObject
        })
      })
    }
  }

}
