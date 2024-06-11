import Cart from "../model/cartSchema.js";

export async function addCart(req, res) {
    try {
        const { userName, product } = req.body;

        const user = await Cart.findOne({userName:userName});
        if(user && user.cart.some(item=>item.id==product.id)){
            return res.json({message:"product already exist in userCart"});
        }

        const result = await Cart.updateOne(
            { userName: userName },
            { $push: { cart: product } },
            { upsert: true }
        );
        res.status(200).json({message:"Product added to cart successfully"});
    }
    catch (error) {
        res.status(500).json({message:error.message});

    }

}

export async function displayCart(req,res){
    try{
        const {userName} = req.params;
        const cart = await Cart.findOne({userName:userName});
        return res.json(cart);

    }
    catch(error){
        return res.status(500).json({message:error.message});

    }
}

export async function deleteFromCart(req,res){
    try{
        const{userName,id} = req.body;
        const result = await Cart.updateOne(
            { userName: userName },
            { $pull: { cart: { id: id } } }
        );

        return res.json({message:`product with id: ${id} removed successfully from cart`});


    }
    catch(error){
        return res.json({message:error.message});

    }
}