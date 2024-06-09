
import * as actionType from "../constants/productConstants"
import axios from "axios";
const url = "http://localhost:8000";
export const getProducts = ()=> async(dispatch)=>{
    try{
        
        const response = await axios.get(`${url}/products`);
        dispatch({type:actionType.GET_PRODUCTS_SUCCESS,payload:response.data})

    }
    catch(error){
        dispatch({type:actionType.GET_PRODUCTS_FAILURE,payload:error.message});
    }
}

export const getProductDetails = (id)=>async(dispatch)=>{
    try{
        dispatch({type:actionType.GET_PRODUCT_DETAILS_REQUEST});
        const response = await axios.get(`${url}/productDetails/${id}`);
        dispatch({type:actionType.GET_PRODUCT_DETAILS_SUCCESS,payload:response.data});

    }
    catch(error){
        dispatch({type:actionType.GET_PRODUCT_DETAILS_FAILURE, payload:error.message})

    }
}


export const addToCart = (id,quantity)=>async(dispatch)=>{
    try{
        const {data} = await axios.get(`${url}/productDetails/${id}`);
        dispatch({type:actionType.ADD_TO_CART,payload:{...data,quantity}});


    }
    catch(error){
        dispatch({type:actionType.ADD_TO_CART_ERROR,payload:error.message})

    }

}

export const deleteFromCart = (id)=>(dispatch)=>{
    dispatch({type:actionType.REMOVE_FROM_CART,payload:id})
}