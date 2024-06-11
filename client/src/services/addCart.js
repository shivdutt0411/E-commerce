import axios from "axios";

const url = "http://localhost:8000";
export const addCart = async(userName,product)=>{
    try{
        const {data} = await axios.post(`${url}/addCart`,{userName,product});
        return data;
    }
    catch(error){
        return error.message

    }
}