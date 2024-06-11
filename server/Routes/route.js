import express from "express";
import { userSignUp } from "../Apis/signup.js";
import { userLogin } from "../Apis/login.js";
import { getProducts } from "../Apis/getProducts.js";
import { getProductById } from "../Apis/getProductDetails.js";
const router = express.Router();

router.post("/signUp",userSignUp);

router.post("/login",userLogin);
router.get("/products",getProducts);
router.get("/productDetails/:id",getProductById)
router.post('/addCart',addCart);
router.get('/getCartItems/:userName',displayCart)
router.post('/deleteFromCart',deleteFromCart)


export default router;
