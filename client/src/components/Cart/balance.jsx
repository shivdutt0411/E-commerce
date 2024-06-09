import { Box, Typography,styled } from "@mui/material";
import {useEffect,useState} from "react"

const Header = styled(Box)({
    padding:"15px 24px",
    background:"#fff",
    borderBottom:"1px solid #f0f0f0"
})

const Heading = styled(Typography)({
    color:"#878787"
})

const Container = styled(Box)({
    padding:"15px 20px",
    background:"#fff",
    "& >p":{
        marginBottom:"20px",
        fontSize:"14px"
    },
    "&>h6":{
        marginBottom:"20px"
    }
})

const Discount = styled(Typography)({
    color:"green",
    fontWeight:"600"
})

const Price = styled(Box)({
    float:"right",
    
})

export default function Balance({item}){
    const[price,setPrice] = useState(0);
    const[discount,setDiscount] = useState(0);

    const totalAmount = ()=>{
        let price = 0,discount = 0;
        item.map(data=>{
            price+=data.price?.mrp;
            discount+=(data.price?.mrp-data.price?.cost)
        })
        setPrice(price);
        setDiscount(discount);
    }

    useEffect(()=>{
        totalAmount()
    },[item])
    return(
        <Box>
        <Header>
            <Heading>PRICE DETAILS</Heading>
        </Header>
        <Container>
            <Typography>Price({item?.length})
            <Price component="span">₹{price}</Price>
            </Typography>
            <Typography>Discount
            <Price component="span">-₹{discount}</Price>
            </Typography>
            <Typography>Delivery Charges
            <Price component="span">₹40</Price>
            </Typography>
            <Typography variant="h6">Total Amount
            <Price component="span">₹{price-discount+40}</Price>
            </Typography>
            <Discount>You will save ₹{discount-40} on this order
            </Discount>

        </Container>
        </Box>
    )

}