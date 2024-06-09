import { products } from "./constants/data.js";
import Product from "../server/model/product_schema.js";
const DefaultData = async()=>{
    try{
        await Product.insertMany(products);
        console.log("Default data inserted successfully");

    }catch(error){
        console.log("Error while inserting default data",error.message);
    }
}

export default DefaultData;
