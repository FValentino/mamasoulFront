import React from 'react'

import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/esm/Card"
import Button from 'react-bootstrap/Button';

import styles from '../../styles/products/product-card.module.css'

function ProductCard(props){

    return(
        <Card className={styles.card} style={{'background-color': '#F4EBDB'}}>
            <Card.Body className={styles.cardBody}>
                <Card.Img variant="top" className="mt-1 " src={props.product.ruta} />
                <Card.Title className='text-center mt-1'> {props.product.nombre} </Card.Title>
            </Card.Body>
            <Card.Footer>
                <Row className="mb-2 text-center"> 
                    <Card.Text> $ {props.product.precio} </Card.Text>
                </Row>
                <Row className="justify-content-center">
                    <Button variant='secondary'> 
                        ver
                    </Button>
                </Row>
            </Card.Footer>
        </Card>
    );

}

export default ProductCard;