import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MyNav from './MyNav';
import { Link } from 'react-router-dom'

function ShopItems() {

  return (
    <>
        <Header></Header>
        <MyNav></MyNav>
         <div>
          <h2> <Link to="/item">Shop Item</Link></h2>
        </div>       
        <Footer></Footer>
    </>
  )
}

export default ShopItems
