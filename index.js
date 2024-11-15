import express from 'express'
import connectDB from './src/configure/connectDB.js'
import bodyParser from 'body-parser'
import bookRoute from './src/route/bookRoute.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const port =process.env.PORT
const url =process.env.URL
const app =express()
connectDB()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const corsOptions ={
    origin:process.env.FRONTEND_PORT , 
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true,
    
}
app.use(cors(corsOptions))
app.use('/',bookRoute)
app.listen(port,()=>{
    console.log(`Server started : ${url}`)
})