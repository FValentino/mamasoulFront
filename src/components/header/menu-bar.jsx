import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import style from '../../styles/header/menu-bar.module.css'

function MenuBar(){
    return(
        <Navbar expand="lg" className="border border-start-0 border-top-0 border-end-0">
            <Container>
                <Navbar.Brand className={style.logo} href="#home">
                    MAMMA 
                    <br />
                    SOUL
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="ms-auto">
                        <Nav.Link className="me-4">Inicio</Nav.Link>
                        <Nav.Link className="me-4">Nosotros</Nav.Link>
                        <NavDropdown className="me-4" title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item>Riñonera</NavDropdown.Item>
                            <NavDropdown.Item>Bolsos y carteras</NavDropdown.Item>
                            <NavDropdown.Item>Mochilas</NavDropdown.Item>
                            <NavDropdown.Item>Billeteras</NavDropdown.Item>
                            <NavDropdown.Item>Cartucheras y neceser</NavDropdown.Item>
                            <NavDropdown.Item>Tarjeteros</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="me-4">Contacto</Nav.Link>
                    </Nav>
                    <div className={style.divider}></div>
                    <Nav className="ms-auto">
                        <Nav.Link className="me-3 ">
                            <div className={style.user}> 
                                <img src="../../../assets/login.png"/>
                            </div>
                        </Nav.Link>
                        <Nav.Link className="me-3">
                            <div className={style.user}> 
                                <img src="../../../assets/carrito.png"/>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>     
            </Container>
        </Navbar>
    );
}

export default MenuBar;