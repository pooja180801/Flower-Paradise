import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import bouquetRouter from "./routes/bouquetRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


//app config
const app=express()
const port=4000

//middleware
//the req from frontend to backend that will parsed using this json
app.use(express.json())
//to access the backend from any frontend
app.use(cors())


//db connection
connectDB();

//api endpoint
app.use("/api/bouquet",bouquetRouter)
app.use("/images",express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('api/order',orderRouter)


app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
console.log(`Server started on https://localhost:4000`)
})

