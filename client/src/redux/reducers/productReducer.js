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

export function cartReducer(state={cartItems:[]},action){
    switch(action.type){
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find(product=>product.id===item.id);

            if(exist){
                return state;

            }
            else{
                return {...state,cartItems:[...state.cartItems,item]}
            }
        case actionType.REMOVE_FROM_CART:
            return {...state,cartItems:state.cartItems.filter(product=>product.id!==action.payload)}
        case actionType.ADD_TO_CART_ERROR:
            return {error:action.payload}   
        default:
            return state
    }

}