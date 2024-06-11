import { Box,Button,Typography,styled } from "@mui/material";
import { addEllipsis } from "../../utils/commomnUtils";
import ButtonGroups from "./ButtonGroup"
import { deleteFromCart } from "../../services/deleteFromCart";
import { displayCart } from "../../services/displayCart";
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";

const Wrapper = styled(Box)({
    borderTop:"1px solid #f0f0f0",
    display:"flex",
    background:"#fff"
})

const LeftComponent = styled(Box)({
    display:"flex",
    flexDirection:"column",
    margin:"20px"
})

const Seller = styled(Typography)({
    color:"#878787",
    fontSize:"14px",
    marginTop:"10px"
})

const RemoveButton = styled(Button)({
    marginTop:"20px",
    fontSize:"16px",
    color:"black",
    fontWeight:"600"
})

export default function CartItem({item}){
    const{details,setCartItems} = useContext(DataContext);

    async function removeItemFromCart(){
        await deleteFromCart(details.userName,item.id);
        const {cart} = await displayCart(details.userName);
        setCartItems(cart);
    }

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return(
        <Wrapper>
            <LeftComponent>
                <img src = {item.url} alt="cartItemImage" style={{width:"200px"}}/>
                <ButtonGroups />
            </LeftComponent>
            <Box style={{margin:"20px"}}>
                <Typography>{addEllipsis(item.title?.longTitle)}</Typography>
                <Seller>Seller:RetailNet
                <Box component="span"><img src={fassured} alt="fassured" style={{width:"50px",marginLeft:"10px"}} /></Box>
                </Seller>
                <Typography style={{margin:"20px 0"}}>
                <Box component="span" style={{fontWeight:600,fontSize:"18px"}}>
           ₹{item.price?.cost}
           </Box>
           <Box component="span" style={{color:"#878787",marginLeft:"10px"}}><strike>₹{item.price?.mrp}</strike></Box>
           <Box component="span" style={{color:"#388E3C",marginLeft:"10px"}}>{item.price?.discount}</Box>
                    
                </Typography>
                <RemoveButton onClick={removeItemFromCart}>REMOVE</RemoveButton>
            </Box>
        </Wrapper>
    )

}
