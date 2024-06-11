import { Box,styled,Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { addCart } from "../../services/addCart";
import { displayCart } from "../../services/displayCart";


const Container = styled(Box)(({theme})=>({
    minWidth:"40%",
    padding:"40px",
    overflow:"hidden",
    [theme.breakpoints.down("lg")]:{
        padding:"20px"
    }

}))

const Image = styled('img')({
    padding:"15px",
    width:"90%"
    

})

const StyledButton = styled(Button)(({theme})=>({
    width:"48%",
    height:"50px",
    borderRadius:"2px",
    
    [theme.breakpoints.down("lg")]:{
        width:"46%"
    },
    [theme.breakpoints.down("sm")]:{
        width:"48%"
    }


}))
export default function ActionItem({product}){
    const {details,setCartItems} = useContext(DataContext)
    const [quantity,setQuantity] = useState(1);
    const navigate = useNavigate();

    const navigateToCart = async()=>{
        const res = await addCart(details.userName,product);
        const {cart} = await displayCart(details.userName);
        setCartItems(cart);

        navigate("/Cart")

    }

    return(
        <Container>
         <Box style={{    padding:"15px 20px",
    border:"1px solid #f0f0f0"}}>
            <Image src={product.detailUrl} alt="DetaulImage" />
            </Box>
            <StyledButton variant="contained" style={{marginRight:10,background:Object.keys(details).length!==0?"#ff9f00":"#f0f0f0"}} onClick={navigateToCart} disabled={Object.keys(details).length!==0?false:true}><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{background:Object.keys(details).length!==0?"#fb541b":"#f0f0f0"}} disabled={Object.keys(details).length!==0?false:true}><FlashOnIcon />Buy Now</StyledButton>
        </Container>
    )


}
