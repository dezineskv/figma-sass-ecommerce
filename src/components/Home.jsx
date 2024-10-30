import React from 'react';
import Header from './Header';
import MyNav from './MyNav';
import Hero from './Hero';
import Navi from './Navi';
import Featured from './Featured';
import Explore from './Explore';
import Footer from './Footer';
import Gallery from './Gallery';
import Latest from './Latest';
import Trending from './Trending';
import ThreeCols from './ThreeCols';

function Home() {
  return (
    <>
    <Header></Header>
    <MyNav></MyNav>
    <Hero></Hero>
    <ThreeCols></ThreeCols>
    <Featured></Featured>
    <Latest></Latest>
    <Trending></Trending>
    <Explore></Explore>
    <Gallery></Gallery>
    <Footer></Footer>
   </>
  )
}

export default Home