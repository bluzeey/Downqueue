import express from 'express'
import { getEvents,createEvent,updateEvent,deleteEvent} from '../controllers/events.js';
const router=express.Router();

router.get('/:user',getEvents)
router.post('/:user',createEvent)
router.patch(':user/:id',updateEvent)
router.delete(':user/:id',deleteEvent)

export default router