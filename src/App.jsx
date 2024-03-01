import React from 'react'
import './App.css'

import Header from './components/header/header'
import MainBanner from './components/banner/main-banner/main-banner'
import Products from './components/products/products'

function App() {

  return (
    <div className='contnainer'>
      <Header/>
      <MainBanner/>
      <Products />
    </div>
  );
}

export default App
