import data from '../staticData/featuredProducts.json';
import { React } from 'react';
import { Carousel } from 'react-bootstrap';

function Featured () {

  return (
    <>
        <div className="outer-featured background-gray text">
        <h2 className="secondary-heading">Featured Products</h2>

            <div className="cards-featured" style={{display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <Carousel>
                    <Carousel.Item>
                        <div className="carousel-item-active">                    
                                <div className="row row-cols-1 row-cols-md-5 g-4 background" style={{width: '100%', backgroundColor: 'white'}}>
                                    {data.features.map((feature) => (          
                                        <div className="col" key={feature.id}>
                                            <div className="card h-100" >
                                                <div className="card-bg-f">
                                                    <div className="card-img-featured">
                                                        <img src={feature.image} className="card-img-f" alt="tagged products" /><img src="heart.png" alt="loved products" className="heart-f"/><img src="/orange-tags.png" alt="tagged products" className="tag-f"/>
                                                    </div>
                                                </div>
                                            <div className="card-bg-f-b">
                                                <p className="be-vietnam-pro-f">{feature.name}</p>
                                                <div className="three-col">
                                                    <div className="two-col"><div className="be-vietnam-pro-h">${feature.price}</div><div className="presale-f">{feature.original_price}</div></div><div className="rating-f"><img src="star.png" className="star" alt="star"/>({feature.rating})</div>
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </Carousel.Item> <Carousel.Item>
                        <div className="carousel-item-active">                    
                                <div className="row row-cols-1 row-cols-md-5 g-4 background" style={{width: '100%', backgroundColor: 'white'}}>
                                    {data.features.map((feature) => (          
                                        <div className="col" key={feature.id}>
                                            <div className="card h-100" >
                                                <div className="card-bg-f">
                                                    <div className="card-img-featured">
                                                        <img src={feature.image} className="card-img-f" alt="tagged products" /><img src="heart.png" alt="loved products" className="heart-f"/><img src="/orange-tags.png" alt="tagged products" className="tag-f"/>
                                                    </div>
                                                </div>
                                            <div className="card-bg-f-b">
                                                <p className="be-vietnam-pro-f">{feature.name}</p>
                                                <div className="three-col">
                                                    <div className="two-col"><div className="be-vietnam-pro-h">${feature.price}</div><div className="presale-f">{feature.original_price}</div></div><div className="rating-f"><img src="star.png" className="star" alt="star"/>({feature.rating})</div>
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </Carousel.Item>
      </Carousel>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button><button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></button>
                </div>               
        </div>
        </div>  
</>
  )
}

export default Featured;