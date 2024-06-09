import axios from "axios";

const url = "http://localhost:8000";

export async function authenticatelogin(data){
    try{
        const response = await axios.post(`${url}/login`,data);
        return response.data;


    }
    catch(error){
        console.log("Error while signUp",error.message);
    }

}