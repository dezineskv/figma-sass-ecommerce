import { React } from 'react';

export default function Footer() {

  return (
    <>
    <div className="container-fluid container-gray py-5 card-bg-f background-gray-med">
        <div className="row " style={{maxWidth: '1440px', margin: '0 auto'}}>
            <div className="col text-left">
                <div className="card-f" style={{borderWidth: '0', width: '100%'}}>
                    <div className="card-body ">
                        <div className="footer-logo"></div>
                            <p className="be-vietnam-pro-145">techserve4u@gmail.com</p>
                            <p className="be-vietnam-pro-145">+123-589-9763</p>
                            <p className="be-vietnam-pro-145">King Street, Melbourne, Australia</p>
                    </div>
                </div>
            </div>
            <div className="col text-left">
                <div className="card-f" style={{borderWidth: '0', width: '100%'}}>
                    <div className="card-body ">
                        <h5 className="be-vietnam-pro-f-h">Categories</h5>
                        <p className="be-vietnam-pro-145">About Us</p>
                         <p className="be-vietnam-pro-145">Shop</p>
                         <p className="be-vietnam-pro-145">Contact Us</p>
                        <p className="be-vietnam-pro-145">Resources</p>
                    </div>
                </div>
            </div>
            <div className="col text-left">
                <div className="card-f" style={{borderWidth: '0', width: '100%'}}>
                        <div className="card-body ">
                            <h5 className="be-vietnam-pro-f-h">My Account</h5>
                            <p className="be-vietnam-pro-145">Support</p>
                            <p className="be-vietnam-pro-145">Your Quotes</p>
                            <p className="be-vietnam-pro-145">Track your Order</p>
                        </div>
               </div>
            </div>
            <div className="col text-left">
                <div className="card-f" style={{borderWidth: '0', width: '100%'}}>
                        <div className="card-body ">
                             <h5 className="be-vietnam-pro-f-h">Follow Us</h5>
                             <p className="be-vietnam-pro-145 wrap">It is a long established fact that a reader will be distracted by the readable looking at its layout.</p>
                            <div className="footer-icons"></div>
                        </div>
                </div>
            </div>
       </div>
    </div>
    <div className="outer-b background-gray">
        <div className="footer-b background-gray">
            <p className="be-vietnam-pro-w">2024. All right reserved. Figma design by techserve4u.</p>
            <p className="be-vietnam-pro-w"><span className="footer-links-b">Settings & Privacy </span><span className="footer-links-b">Faqs </span><span className="footer-links-b">Services</span></p>
        </div>
    </div>

</>
     )
}
