import Product from "../model/product_schema.js";
export async function getProducts(req,res){
    try{
        const products = await Product.find();
        return res.status(200).json(products);

    }
    catch(error){
        return res.status(500).json({message:error.meesage});
    }
}