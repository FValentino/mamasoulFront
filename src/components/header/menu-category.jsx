import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'

function CategoryBar(){


    return (
        <Navbar expand="lg" className="border-bottom">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="ms-auto me-auto fs-5">
                        <Nav.Link className="me-4 ">Riñoneras</Nav.Link>
                        <Nav.Link className="me-4">Bolsos y carteras</Nav.Link>
                        <Nav.Link className="me-4">Mochilas</Nav.Link>
                        <Nav.Link className="me-4">Billeteras</Nav.Link>
                        <Nav.Link className="me-4">Cartuchera y neceser</Nav.Link>
                        <Nav.Link className="me-4">Tarjeteros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>     
            </Container>
        </Navbar>
    );
}

export default CategoryBar;