import { React } from 'react';
import Header from './Header';
import Footer from './Footer';
import MyNav from './MyNav';

function Item() {

  return (
    <>
    <Header></Header>
    <MyNav></MyNav>
    <div style={{width: '100%'}} className="outer-item background" >
          <h2 className="secondary-heading background">Shop Item</h2>
          <div className="row d-flex justify-content-center cards-item background">                                      
                            <div className="col-sm-1 col-md-2 item-left">                                           
                                  <div className="card items-left">                                       
                                      <img src="shirt-thumb.png" alt="product" />
                                    </div>
                                    <div className="card items-left">card</div>
                              </div>  
                              <div className="col-sm-1 col-md-4 card card-item">                                           
                                    <img src="shirt-lg.png" alt="product" />          
                              </div>
                              <div className="col-sm-1  col-md-6 card item-right no-border">                                           
                                        <h5 className="be-vietnam-pro-h-i">One Life Graphics T</h5>
                                        <p><img src="4.5stars.png" alt="4.5 stars" /></p>
                                        <h5 className="be-vietnam-pro-h-i">$299</h5>
                                        <p className="be-vietnam-pro-165-22">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                                        <p><img src="latest/arrow.png" className='arrow' alt="arrow"/></p>
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