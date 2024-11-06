import { React } from 'react';
import { Link } from 'react-router-dom';

function Latest() {

  return (
            <div style={{width: '100%'}} className="outer-latest background-gray-med" >
                    <h2 className="secondary-heading background-gray-med">Latest Products</h2>
                    <div className="row d-flex justify-content-space-between cards-latest background-gray-med">                                      
                        <div className="col-sm-1 text-left img-top-left-latest rounded-3 top-0 start-0 p-2" style={{position: 'relative', height: '390px', width: '450px', marginBottom: '2rem'}}>                  
                                <div className="row absolute-top-latest">
                                        <div className="col">
                                                <div className="heart-t">
                                                    <img src="./heart.png" alt="icon"/>
                                                </div>
                                                <h5 className="be-vietnam-pro-hl">Hawaiian Shirts</h5>
                                                <p className="be-vietnam-pro-146w">Dress up in summer vibe</p>
                                                <p className="be-vietnam-pro-sl">UPTO 50% OFF</p>
                                                <p><img src="latest/arrow.png" className='arrow' alt="arrow"/></p>
                                                    <div className="two-col">
                                                        <div className="btn-l pt-20">
                                                            <Link to="/shop"><button className="btn-primary-l" type="button">Shop Now</button></Link>
                                                        </div>                              
                                                    </div>
                                        </div>                                   
                                </div>
                        </div>
                        <div className="col-sm-1 text-left img-top-middle-latest rounded-3 top-0 start-0 p-2" style={{position: 'relative', height: '390px', width: '450px', marginBottom: '2rem'}}>                  
                                <div className="row absolute-top-latest">
                                        <div className="col">
                                                <div className="heart-t">
                                                    <img src="./heart.png" alt="icon"/>
                                                </div>
                                                <h5 className="be-vietnam-pro-hl">Hawaiian Shirts</h5>
                                                <p className="be-vietnam-pro-146w">Dress up in summer vibe</p>
                                                <p className="be-vietnam-pro-sl">UPTO 50% OFF</p>
                                                <p><img src="latest/arrow.png" className='arrow' alt="arrow"/></p>
                                                    <div className="two-col">
                                                        <div className="btn-l pt-20">
                                                        <Link to="/shop"><button className="btn-primary-l" type="button">Shop Now</button></Link>
                                                        </div>                              
                                                    </div>
                                        </div>                                  
                                </div>
                        </div>
                        <div className="col-sm-1 text-left img-top-right-latest rounded-3 top-0 start-0 p-2" style={{position: 'relative', height: '390px', width: '450px', marginBottom: '2rem'}}>                  
                                <div className="row absolute-top-latest">
                                        <div className="col">
                                                <div className="heart-t">
                                                    <img src="./heart.png" alt="icon"/>
                                                </div>
                                                <h5 className="be-vietnam-pro-hl">Hawaiian Shirts</h5>
                                                <p className="be-vietnam-pro-146w">Dress up in summer vibe</p>
                                                <p className="be-vietnam-pro-sl">UPTO 50% OFF</p>
                                                <p><img src="latest/arrow.png" className='arrow' alt="arrow"/></p>
                                                    <div className="two-col">
                                                        <div className="btn-l pt-20">
                                                        <Link to="/shop"><button className="btn-primary-l" type="button">Shop Now</button></Link>
                                                        </div>                              
                                                    </div>
                                        </div>                                   
                                </div>
                        </div>     
                    </div>

                    <div className="row d-flex flex-direction: row justify-content-space-between cards-latest">                                      
                        <div className="col-sm-1 text-left img-bottom-left-latest rounded-3 top-0 start-0 p-2" style={{position: 'relative', marginBottom: '2rem'}}>                  
                            <div className="row absolute-bottom-l-latest cont-width">
                                <div className="col cont-width" style={{width: "50%"}}>
                                    <div className="heart-l-t cont-width">
                                            <img src="./heart.png" alt="icon"/>
                                    </div>
                                    <h5 className="cont-width be-vietnam-pro-hlb">Hawaiian Shirts</h5>
                                    <p className="cont-width be-vietnam-pro-146wb text-b" >Dress up in summer vibe</p>
                                    <p className="cont-width be-vietnam-pro-slb">UPTO 50% OFF</p>
                                    <p className="cont-width"><img src="latest/arrow-b.png" className='arrow' alt="arrow"/></p>
                                    <div className="two-col">
                                            <div className="btn-l pt-20">
                                            <Link to="/shop"><button className="btn-primary-lb" type="button">Shop Now</button></Link>
                                            </div>                              
                                    </div>
                            </div>                                    
                            </div>
                        </div>
                        <div className="col-sm-1 text-left img-bottom-right-latest rounded-3 top-0 start-0 p-2" style={{position: 'relative', marginBottom: '2rem'}}>                  
                            <div className="row absolute-bottom-r-latest cont-width">
                                <div className="col cont-width" style={{width: "50%"}}>
                                    <div className="heart-r-b cont-width">
                                            <img src="./heart.png" alt="icon"/>
                                    </div>
                                    <h5 className="cont-width be-vietnam-pro-hlb">Hawaiian Shirts</h5>
                                    <p className="cont-width be-vietnam-pro-146wb text-b">Dress up in summer vibe</p>
                                    <p className="cont-width be-vietnam-pro-slb">UPTO 50% OFF</p>
                                    <p className="cont-width"><img src="latest/arrow-b.png" className='arrow' alt="arrow"/></p>
                                    <div className="two-col">
                                            <div className="btn-l pt-20">
                                            <Link to="/shop"><button className="btn-primary-lb" type="button">Shop Now</button></Link>
                                            </div>                              
                                    </div>
                                </div>                                   
                            </div>
                        </div>
                    </div>
    </div>
  )
}
export default Latest