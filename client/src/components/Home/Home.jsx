import NavBar from "./NavBar";
import Banner from "./Carousel";
import{Box,styled} from "@mui/material";
import {useEffect} from "react";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch,useSelector } from "react-redux";
import Slide from "./slide";
import MidSlide from "./midSlide";
import MidSection from "./midSection";


const Container = styled(Box)({
    padding:"10px 10px",
    backgroundColor:"f2f2f2"

})
export default function Home(){
    const productItems = useSelector(state=>state.getProducts);//here getProducts is the key of 
                            //reducer in store in combined reducer
    const {products} = productItems;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());//here getProducts is dispatcher fynction

    },[dispatch])
    return(
        <>
            <NavBar />
            <Container>
            <Banner />
            <MidSlide products = {products} title="Deal of the Day" timer={true}/>
            <Slide products = {products} title="Discounts for you" timer={false}/>
            
            <Slide products = {products} title="Trending Offers" timer={false}/>
            <MidSection />
            <Slide products = {products} title="suggested Items" timer={false}/>
            <Slide products = {products} title="Season's top pick" timer={false}/>
            <Slide products = {products} title="Recommended Items" timer={false}/>
            <Slide products = {products} title="Top Selection" timer={false}/>
            </Container>
        </>
    )
}