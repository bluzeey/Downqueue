import express from 'express'
import bodyParser from 'body-parser'
import  mongoose  from 'mongoose'
import cors from 'cors'
import eventRoutes from './routes/events.js'
const app=express()

app.use(express.json({limit:"10mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true }))
app.use(cors())
app.use('/events',eventRoutes)

const CONNECTION_URL='mongodb+srv://sahilm:sahilm123@clusterdq.p77fp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT=process.env.PORT||5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>app.listen(PORT,()=>console.log(`Server running on the port:${PORT}`)))
        .catch((error)=>console.log(error))

