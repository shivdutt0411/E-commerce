import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import ActionItem from "./ActionItem";
import { Box, styled,Grid, Typography } from "@mui/material";
import ProductDetail from "./productDetail";

const Wrapper = styled(Box)({
    marginTop:"55px",
    background:" #F2F2F2"
})

const Container = styled(Grid)(({theme})=>({
    background:"#FFFFFF",
    display:"flex",
    [theme.breakpoints.down("md")]:{
        margin:"0px"
    }
}))

const RightGridItem = styled(Grid)({
    marginTop:"50px",

})



export default function DetailView() {
    
    const { loading, product,error } = useSelector(state => state.getProductDetails);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])
    return (
        <Wrapper>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography>Error while loading product details</Typography>}
            {product && !loading && !error &&<Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItem product={product} />
            </Grid>
            <RightGridItem item lg={8} md={8} sm={8} xs={12}>
                 <ProductDetail product={product} />
            </RightGridItem>
              


            </Container>
            }
        </Wrapper>
    )
}