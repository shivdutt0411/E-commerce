import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {bannerData} from "../../constants/data"
import { styled } from "@mui/material";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Image = styled('img')(({theme})=>({
  width:"100%",
  height:"280px",
  [theme.breakpoints.down("md")]:{
    objectFit:"cover",
    height:"180px"
  }

}))



export default function Banner(){
    return <Carousel   swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    slidesToSlide={1}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container">
    {bannerData.map(data=><Image src={data.url} alt="img"/>)}

    </Carousel>
}
