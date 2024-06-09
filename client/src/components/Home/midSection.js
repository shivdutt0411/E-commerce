import { imageURL } from "../../constants/data"
import { Grid, styled } from "@mui/material"

const StyledGrid = styled(Grid)({
    marginTop:"10px"
})

const Image = styled("img")(({theme})=>({
    width:"100%",
    marginTop:"10px",
    [theme.breakpoints.down("md")]:{
        objectFit:"cover",
        height:"120px"
    }

}))

export default function MidSection() {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';


    return (
        <>
        <StyledGrid container>
            {imageURL.map(src => <Grid item lg={4} md={4} sm={12} xs={12}>
                <img src={src} alt="optional" style={{width:"100%"}}/>
            </Grid>)}
        </StyledGrid>
        <Image src={url} alt="banner"/>
        </>

    )
}