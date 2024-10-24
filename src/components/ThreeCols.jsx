import { React } from 'react';

function ThreeCols() {

  return (
        <div className="background-gray">
        <div className="container background-gray"  style={{maxWidth: '1440px'}}>
            <div className="outer3 background-gray text">
                    <div className="cards flexing" style={{display: 'flex', margin: '0 auto'}}>
                        <div className="inner-1">
                            <div className="card-l3">
                                <img src="truck-icons-2.png" className="img-icons" alt="truck icon" />
                            </div>
                            <div className="card-r text-b">
                            <p className="be-vietnam-pro-5">Free Shipping</p>
                            <h3 className="headline">From $99</h3>
                            </div>
                        </div>
                        <div className="inner-2">            
                            <div className="card-l3">
                                <img src="dollar-icon-2.png" className="img-icons" alt="dollar icon" />
                            </div>
                            <div className="card-r text-b">
                            <p className="be-vietnam-pro-5">Money Guarantee</p>
                            <h3 className="headline">30 Days Back</h3>
                            </div>
                        </div>
                        <div className="inner-3">            
                            <div className="card-l3">
                                <img src="secure-icon-2.png" className="img-icons" alt="secure icon" />
                            </div>
                            <div className="card-r text-b">
                                <p className="be-vietnam-pro-5">100% Safe</p>
                                <h3 className="headline">Secure Shopping</h3>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
</div>
  )
}

export default ThreeCols
