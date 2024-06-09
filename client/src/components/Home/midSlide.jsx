import Slide from "./slide";
import { Box, styled } from "@mui/material";

const LeftBox = styled(Box)(({theme})=>({
    width:"83%",
    [theme.breakpoints.down("md")]:{
        width:"100%"
    }
}))

const RightBox = styled(Box)(({theme})=>({
    background:"#ffffff",
    padding:"5px",
    marginTop:"10px",
    marginLeft:"10px",
    width:"17%",
    textAlign:"center",
    [theme.breakpoints.down('md')]:{
        display:"none"
    }

}))
export default function MidSlide({ products, title, timer }) {
    return (
        <Box style={{display: "flex"}}>

            <LeftBox> 
                <Slide products={products} title={title} timer={timer} />
            </LeftBox>
            <RightBox>
                <img src='https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70' alt="adImage" style={{ width: "217px" }} />
            </RightBox>

        </Box>
    )
}