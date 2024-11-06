import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MyNav from './MyNav';
import { Link } from 'react-router-dom';
import data from '../staticData/items.json';

function ShopItems() {

  return (
    <>
        <Header></Header>
        <MyNav></MyNav>
        <h3>Shop Items</h3>
         <div>
          <h2> 
          {data.items.map((item) => 
          <Link to={`/item/${item.id}`}><div key={item.id}>
            <ul><li>{item.name}</li></ul>
            </div></Link>)}
        </h2>
        </div>       
        <Footer></Footer>
    </>
  )
}

export default ShopItems
