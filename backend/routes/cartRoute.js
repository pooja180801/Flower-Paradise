import express from 'express';
import {addToCart,removeFromCart,getCart} from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js';

const cartRouter=express.Router();

cartRouter.post('/addToCart',authMiddleware,addToCart);
cartRouter.post('/removeFromCart',authMiddleware,removeFromCart);
cartRouter.post('/getCart',authMiddleware,getCart)

export default cartRouter;
