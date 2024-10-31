import data from '../staticData/featuredProducts.json';
import { React } from 'react';
import { Carousel } from 'react-bootstrap';

function Featured () {

  return (
    <>
        <div className="outer-featured background-gray text">
        <h2 className="secondary-heading">Featured Products</h2>
            <div className="cards-featured" style={{display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
                <div className="carousel-inner">
                    <Carousel>
                        <Carousel.Item>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">                    
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
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">                    
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
                    <a className="left carousel-control" href="#carouselExampleControls" role="button" data-slide="prev">
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                        </button>
                    </a>
                    <a className="right carousel-control" href="#carouselExampleControls" role="button" data-slide="next">             
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                    </button>
                    </a>
                </div>               
        </div>
</>
  )
}

export default Featured