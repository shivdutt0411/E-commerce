
import{Box, Button, Typography, styled,Badge} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../Login/LoginDialog";
import {useState,useContext} from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({theme})=>({
    display:"flex",
    margin: "0 3% 0 auto",
    '&>button, &>p, &>div':{
        marginRight:"40px",
        fontSize:"16px",
        alignItems:"center"
    },
    [theme.breakpoints.down("md")]:{
        flexDirection:"column"
    }
}))

const LoginButton = styled(Button)({
    backgroundColor: "#fff",
    color:"#2874f0",
    textTransform:"none",
    padding:"5px 40px",
    borderRadius:"2px",
    boxShadow:"none",
    fontWeight:600,
    height:"32px"

})
export default function CustomButtons(){
    const {cartItems} = useSelector(state=>state.cart)
    const [open,setOpen] = useState(false);
    const{details,setDetails} = useContext(DataContext);
    function handleClick(){
        setOpen(true);
    }
    return (<Wrapper>
    {details?<Profile details={details} setDetails = {setDetails}/>:<LoginButton variant="contained" onClick={handleClick}>Login</LoginButton>}
    <Typography style={{marginTop:"3px", width:"135px"}}>Become a Seller</Typography>
    <Typography style={{marginTop:"3px"}}>More</Typography>
    <Box style={{display:"flex"}}>
    <Link to="/Cart" style={{textDecoration:"none",color:"inherit"}}>
    <Badge badgeContent={cartItems?.length} color="secondary">
    <ShoppingCartIcon />
    </Badge>
    </Link>
        <Typography style={{marginLeft:"10px"}}>
          Cart
        </Typography>
        
    </Box>

    <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
    )
}