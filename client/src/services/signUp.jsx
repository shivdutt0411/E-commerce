import axios from "axios";

const url = "http://localhost:8000";

export async function authenticatesignUp(data){
    try{
        const response = await axios.post(`${url}/signUp`,data);
        return response.data;


    }
    catch(error){
        console.log("Error while signUp",error.message);
    }

}