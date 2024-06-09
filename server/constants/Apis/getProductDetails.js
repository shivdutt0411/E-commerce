import Product from "../model/product_schema.js";

export async function getProductById(req,res){
    try{
        const id = req.params.id;
        const product = await Product.findOne({id:id});
        return res.status(200).json(product);

        

    }
    catch(error){
        return res.status(500).json({message:error.meesage});
    }
}