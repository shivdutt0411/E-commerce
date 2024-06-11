import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userName:String,
    cart:[
        {
            id:{
                type:String,
                required:true,
                unique:true
            },
            url:String,
            detailUrl:String,
            title:Object,
            price: Object,
            quantity:Number,
            description:String,
            discount:String,
            tagline:String
            
        }
    ]


});

const Cart = mongoose.model('cart',cartSchema);

export default Cart;


