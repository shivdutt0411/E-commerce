import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider, styled } from "@mui/material"
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Wrapper = styled(Box)({
    marginTop: "10px",
    background: "#ffffff"

})

const Text = styled(Box)({
    padding: "15px 20px",
    display: "flex",
    marginTop: "5px"

})

const ViewAllButton = styled(Button)({
    marginLeft: "auto",
    borderRadius: "2px",
    fontSize: "13px",
    fontWeight: "600"


})

const Image = styled("img")({
    width: "auto",
    height: "150px"
})

const ProductText = styled(Typography)({
    fontSize: "14px",
    marginTop: "5px"
})

export default function Slide({ products, title, timer }) {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds, completed }) => {
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>

    }

    return (
        <Wrapper>
            <Text>
                <Typography style={{ fontSize: "22px", fontWeight: "600", marfinRight: "25px", lineHeight: "32px" }}>{title}</Typography>
                {timer && <Box style={{ display: "flex", marginLeft: "10px", alignItems: "center", color: "#7f7f7f" }}>
                    <img src={timerURL} alt="timer" style={{ width: "24px" }} />
                    <Countdown date={Date.now() + 7.2e+7} renderer={renderer} />
                </Box>}
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Text>
            <Divider />
            <Box>
                <Carousel responsive={responsive} draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    containerClass="carousel-container">
                    {products.map(data => <Link to={`/product/${data.id}`} style={{textDecoration:"none"}}>
                        <Box textAlign="center" style={{ padding: "25px 15px" }}>
                            <Image key={data.id} src={data.url} alt="img" />
                            <ProductText style={{ color: "#212121", fontWeight: "600" }}>{data.title.shortTitle}</ProductText>
                            <ProductText style={{ color: "green" }}>{data.discount}</ProductText>
                            <ProductText style={{ color: "#212121", opacity: ".6" }}>{data.tagline}</ProductText>
                        </Box>
                    </Link>)}
                </Carousel>
            </Box>
        </Wrapper>
    )

}