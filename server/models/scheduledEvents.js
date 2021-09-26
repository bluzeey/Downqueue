import mongoose  from "mongoose";

const eventSchema= mongoose.Schema({
    id:Number,
    title:String,
    start:String,
    end:String,  
});

const scheduledEvents=mongoose.model('scheduledEvent',eventSchema)

export default scheduledEvents