import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)

const placeOrder=async(req,res)=>{

    const frontend_url="http://localhost:3000"

    try {
        const newOrder=new orderModel({
            userId:req.body.userId,
            items:req.body,items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const line_items=req.body.items.map((item,index)=>({
            price_data:{
                currency:"lkr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"lkr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:150
            },
            quantity:1
        })

        const session=await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:``
        })
    } catch (error) {
        
    }
}

export {placeOrder}