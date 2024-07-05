import mangoose from 'mongoose'

export const connectDB=async()=>{
    await mangoose.connect('mongodb+srv://flowerparadise:18082001pk@cluster0.uwqabev.mongodb.net/flower-paradise')
    .then(()=>console.log("db connected"))
}