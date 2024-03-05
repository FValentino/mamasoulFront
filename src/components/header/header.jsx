import React from 'react'

import MenuBar from './menu-bar.jsx';
import CategoryBar from './menu-category.jsx';
import BannerHeader from './banner-header.jsx';

function Header() {
    return (   
        <>
            <BannerHeader/>
            <MenuBar/>
            <CategoryBar/>
        </>
        
    );
}

export default Header;