import React from 'react'
import { Carousel } from 'react-bootstrap';

function Explore() {
  return (
    <>
       <div className="explore-outer background-gray-lt">
        <div className="row explore-inner background-gray-lt" style={{maxWidth: '1440px !important'}}>
            <div className="col explore-align">
                <h4 className="primary-heading-e pt-10">50+ Beautiful  & Modern Category Product</h4>
                <p className="be-vietnam-pro-165 pt-20">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                <div className="pt-20" style={{textAlign: 'left'}}>
                    <button className="btn-primary explore-but-e" type="button">Explore More</button>
                </div>
            </div>          
            <div className="col explore-img">
            <Carousel>
            <Carousel.Item>
             <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">          
                        <div className="item active">
                            <img src="skincare.png" className="" alt="explore"/>
                            <div className="carousel-caption">
                                Explore More
                            </div>
                        </div>
                    </div> 
                </div>               
                </Carousel.Item> <Carousel.Item>
             <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">          
                        <div className="item active">
                            <img src="groceries.png" className="" alt="explore"/>
                            <div className="carousel-caption">
                                Explore More
                            </div>
                        </div>
                    </div>           
                </div>               
                </Carousel.Item><Carousel.Item>
             <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">          
                        <div className="item active">
                            <img src="makeup.png" className="" alt="explore"/>
                            <div className="carousel-caption">
                                Explore More
                            </div>
                        </div>
                    </div>            
                </div>               
                </Carousel.Item>
                </Carousel>
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                    </button>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">             
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                </button>
                </a>
            </div>
      </div>
    </div>
    </>
  )
}

export default Explore