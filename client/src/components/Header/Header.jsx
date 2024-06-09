import { AppBar, Toolbar, styled, Box, Typography, IconButton, Drawer, List, ListItem } from "@mui/material";
import Search from "./Search"
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'; 
import { useState } from "react";

const StyledHeader = styled(AppBar)({
  backgroundColor: '#2874f0',
  height: '55px'
});

const Plusimage = styled("img")({
  width:"10px",
  height:"10px",
  marginLeft:"4px"

})

const CustomButtonWrapper = styled(Box)(({theme})=>({
     margin:"0 5% 0 auto",
     [theme.breakpoints.down("md")]:{
      display:"none"
     }

}))

const MenuButton = styled(IconButton)(({theme})=>({
  display:"none",
  [theme.breakpoints.down("md")]:{
    display:"block"
  }
}))



export default function Header() {
  const[open,setOpen] = useState(false);
  function handleDrawer(){
    setOpen(open=>!open)
  }
  const list = ()=>{
    return(
    <Box style={{width:"200px"}} onClose={handleDrawer}>
      <List>
        <ListItem>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
    )
  }
  
  return (
    <StyledHeader>
      <Toolbar style={{minHeight:55}}>
      <MenuButton color="inherit" onClick = {handleDrawer}>
        <MenuIcon />
      </MenuButton>
      <Drawer open={open} onClose={handleDrawer}>
        {list()}
      </Drawer>
        <Box sx={{marginLeft:'12%',lineHeight:'0'}}>
          <Link to="/"><img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt="Flipkart" style={{width: 75}} /></Link>
          <Box sx={{display:"flex"}}>
          <Typography sx={{fontSize:'10px',fontStyle:"italic"}}>Explore
          <Box component="span" sx={{color:"#FFE500"}}> Plus</Box>
          </Typography>
          <Plusimage src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt="sublogo"></Plusimage>

          </Box>
          
        </Box>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  )

}
