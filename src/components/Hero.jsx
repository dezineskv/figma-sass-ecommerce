import { React } from 'react';

export default function Hero() {

    return (
      <>
    <div className="hero-outer container-gray background-gray-lt">
            <div className="row d-flex hero-inner background-gray-lt" style={{maxWidth: '1440px', margin: '0 auto'}}>
                <div className="col-sm-1 col-md-6 text-left pt30 hero-expand">
                    <div className="new-arrival">
                        <img src="stars.png" alt="star" /> New Arrival <img src="stars.png" alt="star" />
                    </div>
                    <h4 className="hero-header primary-heading-h">Shop with Confidence: Trusted Source for Quality Products</h4>
                    <p className="hero-text be-vietnam-pro-165-h">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <div className="btn-h">
                        <button className="btn-primary-o" type="button">Shop Now</button>
                    </div>
                    <div className="cards-h " style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div className="inner" style={{paddingRight: '20px', borderRight:'1px solid gray'}}>
                                    <p className="be-vietnam-pro-6-h">200+ </p>
                                    <p className="be-vietnam-pro-4">International Brands</p>
                            </div>
                            <div className="inner" style={{paddingRight: '20px', borderRight:'1px solid gray'}}>
                                    <p className="be-vietnam-pro-6-h">2,000+ </p>
                                    <p className="be-vietnam-pro-4">High-Quality Products</p>
                            </div>
                            <div className="inner-1">
                                    <p className="be-vietnam-pro-6-h">30,000+ </p>
                                    <p className="be-vietnam-pro-4">Happy Customers</p>
                            </div>
                    </div>                           
                </div>
                <div className="col text-left">
                    <div className="inner-img-hero">
                        <img src="hero-2.png" alt="hero" className="hero-img"/>
                    </div>  
                </div>
        </div>  
</div>
</>
  )
}
