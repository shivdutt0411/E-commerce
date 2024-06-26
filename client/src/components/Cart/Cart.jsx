import {Grid,Typography,Box,styled,Button} from "@mui/material"
import CartItem from "./cartItem"
import Balance from "./balance"
import EmptyCart from "./EmptyCart"
import { useContext } from "react"
import { DataContext } from "../../context/DataProvider"

const Container = styled(Grid)(({theme})=>({
    padding:"30px 135px",
    [theme.breakpoints.down("md")]:{
        padding:"15px 0"
    }
}))

const Header = styled(Box)({
    padding:"15px 24px",
    background:"#fff"
})

const ButtonWrapper = styled(Box)({
    padding:"16px 22px",
    background:"#fff",
    boxShadow:"0 -2px 10px 0 rgb(0 0 0/10%)",
    borderTop:"1px solid #f0f0f0"
})

const StyledButton = styled(Button)({
    display:"flex",
    marginLeft:"auto",
    background:"#fb641b",
    color:"#fff",
    borderRadius:"2px",
    width:"250px",
    height:"51px",
    "&:hover":{
        background:"#ff8a4b"
    }
})

const LeftComponent = styled(Grid)(({theme})=>({
    paddingRight:"15px",
    [theme.breakpoints.down("md")]:{
        marginBottom:"15px"
    }

}))

export default function Cart(){
    
    const {cartItems,details} = useContext(DataContext);
    return(
        <>
        {
            Object.keys(details).length!==0 && cartItems && cartItems.length ?
            <Container container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
                <Typography>My Cart({cartItems.length})</Typography>
            </Header>
            {
                cartItems.map(item=><CartItem item = {item}/>)
            }
            <ButtonWrapper>
                <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>

            </LeftComponent>
            <Grid item lg={3} md={3} sm={12} xs={12}>
            <Balance item = {cartItems}/>

            </Grid>
            </Container>:
            <EmptyCart />

        }
        </>
    )
}
