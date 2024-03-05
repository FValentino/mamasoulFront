import React from "react"

import Container from "react-bootstrap/Container";

import Header from '../header/header.jsx'
import MainBanner from '../banner/main-banner/main-banner.jsx'
import Products from '../products/products.jsx'

function MainPage(){
    return (
        <Container>
            <Header/>
            <MainBanner/>
            <h2 className="text-center mt-3"> Ofertas semanales </h2>
            <Products />
        </Container>
    );
}

export default MainPage;