import React from "react";
import Container from "react-bootstrap/Container";

import styles from "../../../styles/banner/main-banner.module.css"

function MainBanner(){
    return (
        <Container className="text-center mt-3">
            <img className={styles.imagen} src="../../../assets/rojo.jpg" alt="" />
        </Container>
    );
}

export default MainBanner;