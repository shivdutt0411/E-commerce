import { Box,Typography,styled } from "@mui/material"; 

const Component = styled(Box)({
    height:"65vh",
    width:"80%",
    background:"#fff",
    margin:"80px 140px"
})

const EmptyContainer = styled(Box)({
    textAlign:"center",
    paddingTop:"70px"
})
export default function EmptyCart(){
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    return(
        <Component>
        <EmptyContainer>
            <img src={imgurl} alt="empty" style={{width:"20%"}}/>
            <Typography>Your Cart is empty</Typography>
            <Typography>Add items to your cart</Typography>
        </EmptyContainer>

        </Component>
    )
}