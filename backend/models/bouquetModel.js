import mongoose from 'mongoose'

const bouquetSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const bouquetModel = mongoose.models.bouquet || mongoose.model("bouquet",bouquetSchema)

export default bouquetModel;