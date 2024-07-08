import bouquetModel from "../models/bouquetModel.js";
import fs from 'fs'

//add bouquet 
const addBouquet=async(req,res)=>{
let image_filename=`${req.file.filename}`;

const bouquet=new bouquetModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
})
try {
    await bouquet.save();
    res.json({success:true,message:"Bouquet Added"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
}
}


const viewBouquets=async(req,res)=>{
    try {
        const bouquets=await bouquetModel.find({});
        res.json({success:true,data:bouquets})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

const removeBouquet=async(req,res)=>{
    try {
        const bouquet=await bouquetModel.findById(req.body.id)
        fs.unlink(`uploads/${bouquet.image}`,()=>{})
        await bouquetModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"bouquet removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addBouquet,viewBouquets,removeBouquet}