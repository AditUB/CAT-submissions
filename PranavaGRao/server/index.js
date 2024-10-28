import express from 'express'
import mongodb from 'mongodb'
import cors from 'cors'
const app = express()
import 'dotenv/config'
import mongoose from 'mongoose'
import { contactRouter } from './routes/contactRoute.js'
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI


app.use("/contact", contactRouter)

app.listen(PORT, (req, res) => {
    mongoose.connect(MONGO_URI).then(console.log("connected to the database"))
    console.log("Server running in port", PORT)
})