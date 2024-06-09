import { ButtonGroup, Button,styled } from "@mui/material";

const Wrapper = styled(ButtonGroup)({
    marginTop:"30px"
})

const StyledButton = styled(Button)({
    borderRadius:"50%"
})


export default function ButtonGroups(){
    return(
        <ButtonGroup>
            <StyledButton>-</StyledButton>
            <StyledButton>1</StyledButton>
            <StyledButton>+</StyledButton>
        </ButtonGroup>
    )
}