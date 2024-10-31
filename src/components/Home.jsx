import React from 'react';
import Headers from './Headers';
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
    <Headers></Headers>
    {/* <MyNav></MyNav> */}
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