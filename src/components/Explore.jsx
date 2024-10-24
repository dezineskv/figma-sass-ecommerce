import { React } from 'react';

function Explore () {

  return (
    <>
    <div className="explore-outer background-gray-lt">
        <div className="row explore-inner background-gray-lt" style={{maxWidth: '1440px !important'}}>
            <div className="col explore-align">
                <h4 className="primary-heading-e pt-10">50+ Beautiful  & Modern Category Product</h4>
                <p className="be-vietnam-pro-165 pt-20">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <div className="pt-20" style={{textAlign: 'left'}}>
                    <button className="btn-primary explore-but-e" type="button">Explore More</button>
                </div>
            </div>          
            <div className="col explore-img">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators  dot">
                        <button type="button" className="dot active" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" className="dot"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" className="dot"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="/skincare.png" className="d-block w-100 products" alt="explore"/>
                        </div>
                        <div className="carousel-item">
                        <img src="/makeup.png" className="d-block w-100 products" alt="explore"/>
                        </div>
                        <div className="carousel-item">
                        <img src="/groceries.png" className="d-block w-100 products" alt="explore"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>              
            </div>  
        </div>
  </div> 
  </>
    )
}

export default Explore