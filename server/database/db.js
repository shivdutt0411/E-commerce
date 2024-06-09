import mongoose from "mongoose";


const Connection = async(userName,password)=>{
    try{
        const url=`mongodb+srv://${userName}:${password}@ecommerce-web.y7lufdb.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecommerce-web`;
        await mongoose.connect(url)
        console.log("Database connected successfully");


    }
    catch(error){
        console.log(`Error while connecting to database ${error.message}`)
    }
}

export default Connection