import { React } from 'react';
import './app.scss';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import ShopItems from './components/ShopItems';
import Item from './components/Item';

function App() {

  return (
<>
<Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/shop" element={<ShopItems></ShopItems>}></Route>
    <Route path="/item/:id" element={<Item></Item>}></Route>
      </Routes> 
      </>    
  )
}

export default App
