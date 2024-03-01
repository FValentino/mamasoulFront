import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import banner from "/public/banner/Beige-Aesthetic-Fashion-Clothing-Collection-Medium-Banner-redimensionado-1.png"

import Image from "react-bootstrap/Image";
import "../../../styles/banner/main-banner.module.css"

function MainBanner(){
    return (
        <Container fluid className="text-center mt-3 banner-container">
            <Carousel>
                <Carousel.Item>
                    <Image fluid src={banner} width="1000" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image fluid src={banner} width="1000" />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default MainBanner;