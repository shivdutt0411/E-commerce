
import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';


const StyledMenu = styled(Menu)({
    marginTop: "5px"
});

const StyledLogout = styled(Typography)({
    fontSize:"14px",
    marginLeft:"3px"


})


export default function Profile({ details,setDetails }) {
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const Logout = ()=>{
        setDetails("");

    }


    return (
        <>
            <Box>
                <Typography style={{ marginTop: "3px", cursor: "pointer" }} onClick={(e) => handleClick(e)}>{details}</Typography>
                <StyledMenu
                    id="basic-menu"
                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={()=>{handleClose();Logout();}}>
                        <LogoutIcon color="primary" fontSize="small"/>
                        <StyledLogout>Logout</StyledLogout>
                    </MenuItem>
                </StyledMenu>
            </Box>
        </>
    )

}