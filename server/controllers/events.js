import scheduledEvents from "../models/scheduledEvents.js";
export const getEvents=async(req,res)=>{
     try {
         const events= await scheduledEvents.find();

         console.log(events)

         res.status(200).json(events)
     } catch (error) {
         res.status(404).json({message:error.message})
     }
}
export const createEvent=async (req,res)=>{
    const event=req.body;

    const newEvent= new scheduledEvents(event)

    try {
        await newEvent.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}