import { React } from 'react';
import Header from './Header';
import Footer from './Footer';
import Header2 from './Header2';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import data from '../staticData/items.json';

function Item() {
      const [item, setItem ] = useState([]);
      const { id } = useParams();
      console.log(id);
  
      useEffect(() => {
          const singleItem = data.items.find((user) => user.id === parseInt(id));
          setItem(singleItem);
      }, [id]);

  return (
    <>
    <Header></Header>
    <Header2></Header2>
    <div style={{width: '100%'}} className="outer-item background" >
          <h2 className="secondary-heading background">Shop Item</h2>
          <div className="row d-flex justify-content-center cards-item background">                                      
                            <div className="col-sm-1 col-md-2 item-left">                                           
                                  <div className="card items-left">                                       
                                      <img src="/shirt-thumb.png" alt="product" />
                                    </div>
                                    <div className="card items-left">card</div>
                              </div>  
                              <div className="col-sm-1 col-md-4 card card-item">                                           
                                    <img src={item.image} alt="product" />          
                              </div>
                              <div className="col-sm-1  col-md-6 card item-right no-border">                                           
                                        <h5 className="be-vietnam-pro-h-i">{item.name} </h5>
                                        <p><img src="/4.5stars.png" alt="4.5 stars" /></p>
                                        <h5 className="be-vietnam-pro-h-i">${item.price}</h5>
                                        <p className="be-vietnam-pro-165-22">{item.discount}, Rating: {item.rating}</p>
                                        <p><img src="/latest/arrow.png" className='arrow' alt="arrow"/></p>
                                        <div className="two-col-item">
                                              <button className="btn-primary stack-buts-item" type="button">Add to Cart</button>
                                              <button className="btn-primary  stack-buts-item" type="button">Buy Now</button>

                                        </div>
                              </div>                        
          </div>     
    </div>
<Footer></Footer>
</>
  )
}
export default Item