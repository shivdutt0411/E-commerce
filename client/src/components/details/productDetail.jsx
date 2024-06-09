import { Typography,Box,styled, Table, TableBody, TableRow, TableCell } from "@mui/material"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const Image = styled('img')({
    width:"77px",
    marginLeft:"20"
})

const SmallText = styled(Box)({
    fontSize:"14px",
    verticalAlign:"baseline",
    "&>p":{
        fontSize:"14px",
        marginTop:"10px"
    }
})

const StyledBadge = styled(LocalOfferIcon)({
    marginRight:"10px",
    color:"#00CC00",
    fontSize:"15px"
})

const StyledRow = styled(TableRow)({
    fontSize:"14px",
    verticalAlign:"baseline",
    marginTop:'10px',
    "& > td":{
        fontSize:"14px",
        border:"none"
    }
})
export default function ProductDetail({product}){
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    return(
        <>
        <Typography>{product.title?.longTitle}</Typography>
        <Typography style={{marginTop:5,color:"#878787",fontSize:14}}>
           8 Ratings & 1 review 
           <Box component="span">
               <Image src={fassured} alt="fassured" />
           </Box>

        </Typography>
        <Typography>
           <Box component="span" style={{fontSize:28}}>
           ₹{product.price?.cost}
           </Box>
           <Box component="span" style={{color:"#878787",marginLeft:"10px"}}><strike>₹{product.price?.mrp}</strike></Box>
           <Box component="span" style={{color:"#388E3C",marginLeft:"10px"}}>{product.price?.discount}</Box>
        </Typography>
        <Typography>Available offers</Typography>
        <SmallText>
            <Typography><StyledBadge />Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</Typography>
            <Typography><StyledBadge />Special PriceGet extra 17% off (price inclusive of cashback/coupon)T&C</Typography>
            <Typography><StyledBadge />Bank Offer 10% off up to ₹1500 on HDFC Bank Credit Card EMI Txns, Tenure: 9 and 12 months, Min Txn Value: ₹7500 T&C</Typography>
            <Typography><StyledBadge />Bank Offer 10% off up to ₹1,500 on RBL Bank Credit Card EMI Transactions, on orders of ₹2,500 and above T&C</Typography>
            <Typography><StyledBadge />Bank Offer Extra ₹500 off on HDFC Bank Debit Card EMI Txns, Tenure: 3 months and above, Min Txn Value ₹50,000T&C</Typography>
            <Typography><StyledBadge />Bank Offer Extra ₹500 off on HDFC Bank Debit Card EMI Txns, Tenure: 3 months and above, Min Txn Value ₹50,000T&C</Typography>

        </SmallText>
        <Table>
            <TableBody>
            <StyledRow>
                    <TableCell style={{color:"#878787"}}>Delivery</TableCell>
                    <TableCell style={{fontWeight:"600"}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                </StyledRow>
            <StyledRow>
                    <TableCell style={{color:"#878787"}}>Warranty</TableCell>
                    <TableCell>1 year</TableCell>
                </StyledRow>
                <StyledRow>
                    <TableCell style={{color:"#878787"}}>Seller</TableCell>
                    <TableCell >
                    <Box component = "span" style={{color:"#2874f0"}}>SuperComNet</Box>
                    <Typography>GST invoice available</Typography>
                    <Typography>View more seller starting from ₹{product.price?.cost} </Typography>
                    </TableCell>
                </StyledRow>
                <StyledRow>
                    <TableCell colSpan={2}>
                     <img src={adURL} alt="points" style={{width:"390px"}}/>
                     

                    </TableCell>
                </StyledRow>
                <StyledRow>
                    <TableCell style={{color:"#878787"}}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </StyledRow>
            </TableBody>
            
        </Table>
        </>
    )

}