import * as actionType from "../constants/productConstants";

export  function getProductReducer(state={products:[]},action){
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return {products: action.payload};
        case actionType.GET_PRODUCTS_FAILURE:
            return {error:action.payload};
        default:
            return state;


    }
    
}

export function getProductDetailsReducer(state={product:{}},action){
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return {loading:true}
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}
        case actionType.GET_PRODUCT_DETAILS_FAILURE:
            return {loading:false,error: action.payload}
        default :
        return state
    }
}

