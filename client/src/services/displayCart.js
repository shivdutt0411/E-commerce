import axios from "axios";

const url = "http://localhost:8000";
export const displayCart = async(userName)=>{
    try{
        const {data} = await axios.get(`${url}/getCartItems/${userName}`);
        return data;
    }
    catch(error){
        return error.message

    }
}