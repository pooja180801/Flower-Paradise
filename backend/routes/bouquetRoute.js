import express from 'express'
import { addBouquet,removeBouquet,viewBouquets } from '../controllers/bouquetController.js'
import multer from 'multer'


const bouquetRouter=express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})


// This upload object can now be used as middleware to handle file uploads.
const upload=multer({storage:storage})

bouquetRouter.post("/add",upload.single("image"),addBouquet)
bouquetRouter.get("/view",viewBouquets)
bouquetRouter.post("/remove",removeBouquet)


export default bouquetRouter;