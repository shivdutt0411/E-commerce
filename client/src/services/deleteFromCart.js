import axios from "axios";

const url = "http://localhost:8000";
export const deleteFromCart = async(userName,id)=>{
    try{
        const {data} = await axios.post(`${url}/deleteFromCart`,{userName,id});
        return data;
    }
    catch(error){
        return error.message

    }
}