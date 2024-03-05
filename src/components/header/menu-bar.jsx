import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'

//images
import logo from '../../assets/logo/sin-texto/logo-negro.png'
import marca from '../../assets/logo/logo-dos-lineas-negro.png'
import login from '../../assets/icons/login.png'
import cart from '../../assets/icons/carrito.png'

import style from '../../styles/header/menu-bar.module.css'

function MenuBar(){

    return(
        <Navbar expand="md" className="border-bottom mt-0">
            <Container>
                <Navbar.Brand className="d-flex" href="#home">
                    <div> 
                        <Image src={logo} alt="logo" 
                        fluid width="55"/>

                        <Image src={marca} alt="logo" 
                        fluid width="90"/>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="ms-auto fs-4 fw-bold">
                        <Nav.Link className="me-4">Inicio</Nav.Link>
                        <Nav.Link className="me-4">Nosotros</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Riñoneras</NavDropdown.Item>
                            <NavDropdown.Item href="">Bolsos y carteras</NavDropdown.Item>
                            <NavDropdown.Item href="">Mochilas</NavDropdown.Item>
                            <NavDropdown.Item href="">Billeteras</NavDropdown.Item>
                            <NavDropdown.Item href="">Cartucheras y neceser</NavDropdown.Item>
                            <NavDropdown.Item href="">Tarjeteros</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="me-4">Contacto</Nav.Link>
                    </Nav>
                    <div className={style.divider}></div>
                    <Nav className="ms-auto">
                        <Nav.Link className="me-3 ">
                            <div className={style.user}> 
                                <Image src={login} fluid width="30" height="30" />
                            </div>
                        </Nav.Link>
                        <Nav.Link className="me-3">
                            <div className={style.user}> 
                                <Image src={cart} fluid width="30" height="30" />
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>     
            </Container>
        </Navbar>
    );
}

export default MenuBar;