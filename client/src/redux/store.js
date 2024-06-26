import {createStore,combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import {getProductReducer, getProductDetailsReducer} from "./reducers/productReducer"

const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
})

const middleWare = [thunk];

const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(...middleWare))

)

export default store;
