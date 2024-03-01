import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import DATA_PRODUCTS from "../../assets/DATA-PRODUCTS.json"
import  '../../styles/products/products.module.css'

//componentes
import ProductCard from './product-card';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
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
      items: 2
      
    }
  };

function Products(){

    function showProducts(){
        const productList = DATA_PRODUCTS.map((product) => {

            return (
                <div>
                    <ProductCard product={product} />
                </div>
            );
        });

        return productList;
    } 

    return (
        <Container fluid className='mt-2 ms-3'>
            <Carousel responsive={responsive}>
                {showProducts()}
            </Carousel>
        </Container>
    );

}

export default Products;