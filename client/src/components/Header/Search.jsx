import { InputBase,Box,styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
const SearchContainer = styled(Box)({
    backgroundColor:"#fff",
    width:"38%",
    borderRadius:"2px",
    marginLeft:"10px",
    display:"flex"
})

const InputSearch = styled(InputBase)({
    width:'100%',
    paddingLeft:"20px",
    fontSize:"unset"
})

const StyledSearchIcon = styled(SearchIcon)({
    color:'#2874f0',
    padding:"5px",
    display:"flex",
    '&:hover':{
        cursor:"pointer"
    }
})

const ListWrapper = styled(List)({
    position:"absolute",
    background:"#ffffff",
    color:"black",
    marginTop:"36px"
})

export default function Search(){
    const {products} = useSelector(state=>state.getProducts);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    const[val,setVal] = useState("");
    return(
        <SearchContainer>
        <InputSearch placeholder="Search for products, brands and more" onChange={(e)=>setVal(e.target.value)} value={val}></InputSearch>
        <Box>
            <StyledSearchIcon />
        </Box>
        {
            val && <ListWrapper>
                {products.filter(product=>product.title?.longTitle.includes(val.toLowerCase())).map(product=>
                    <ListItem>
                    <Link to={`/product/${product.id}`} onClick={()=>setVal("")} style={{textDecoration:"none", color:"inherit"}}>
                        {product.title?.longTitle}
                        </Link>
                    </ListItem>
                )}
            </ListWrapper>
        }
        </SearchContainer>
    )
}