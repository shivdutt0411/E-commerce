import {navData} from "../../constants/data";
import {Box,styled,Typography} from "@mui/material"

const StyledBox = styled(Box)(({theme})=>({
    display:"flex",
    margin:"55px 130px 0 130px",
    justifyContent:"space-between",
    background:"#ffffff",
    overflow:"auto",
    [theme.breakpoints.down("lg")]:{
        margin:0
    }
}));

const ContainerBox = styled(Box)({
    padding:"12px 8px",
    textAlign:"center",
    "&:hover":{
        cursor:"pointer"
    }
})

export default function NavBar(){
    return(
        <Box style={{background:"#ffffff"}}>
        <StyledBox>
            {navData.map(data=>{
                return(<ContainerBox style={{padding:"12px 8px",textAlign:"center"}}>
                  <img src={data.url} alt="options" style={{width:"64px"}} />
                  <Typography style={{fontSize:"14px",fontWeight:600,fontFamily:"inherit"}}>{data.text}</Typography>
                </ContainerBox>)
            })}
        </StyledBox>
        </Box>
    )

}