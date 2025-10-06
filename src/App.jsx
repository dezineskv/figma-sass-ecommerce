import { React } from 'react';
import './app.scss';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import ShopItems from './components/ShopItems';
import Item from './components/Item';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

function App() {

  return (
<>
<Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/shop" element={<ShopItems></ShopItems>}></Route>
    <Route path="/item/:id" element={<Item></Item>}></Route>
    <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
    <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
    <Route path="/profile" element={<Profile></Profile>}></Route>
</Routes> 
      </>    
  )
}

export default App
