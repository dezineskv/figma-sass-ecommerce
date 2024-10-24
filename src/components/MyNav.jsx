import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

function MyNav() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="container-black">
  <div className="container container-n" style={{maxWidth: '1440px'}}>
  <div className="row new-n" style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>

<div className="col-5" style={{textAlign: 'left'}}>
    <button className="btn-primary btn-cats" onClick={toggleDropdown}>
      Categories
    </button>
    {isOpen && (
      <ul className="drop-items" style={{borderRadius: '6px'}}>
          <li className="dropdown-item drop-section"><Link to="/shop"><img src="/dropdown/elect.png" alt="icons" className="drop-icons" /><div className="drop-text">Electronics Devices</div></Link></li>
          <li className="dropdown-item drop-section"><Link to="/shop"><img src="/dropdown/tv.png" alt="icons" className="drop-icons" /><div className="drop-text">TV & Home Appliances</div></Link></li>
          <li className="dropdown-item drop-section"><Link to="/shop"><img src="/dropdown/health.png" alt="icons" className="drop-icons" /><div className="drop-text">Health & Beauty</div></Link></li>

          <li className="dropdown-item drop-section"><Link to="/shop"><img src="/dropdown/baby.png" alt="icons" className="drop-icons" /><div className="drop-text">Babies & Toys</div></Link></li><li className="dropdown-item drop-section"><Link to="/shop"><img src="/dropdown/pet.png" alt="icons" className="drop-icons" /><div className="drop-text">Groceries & Pets</div></Link></li><li className="dropdown-item drop-section"><Link to="/shop"><img src="/dropdown/home.png" alt="icons" className="drop-icons" /><div className="drop-text">Home & Lifestyle</div></Link></li>
          <li className="dropdown-item drop-section"><Link to="/shop"><img src="/dropdown/women.png" alt="icons" className="drop-icons" /><div className="drop-text">Women's Fashion</div></Link></li><li className="dropdown-item drop-section"><Link to="/shop"><img src="/dropdown/men.png" alt="icons" className="drop-icons" /><div className="drop-text">Men's Fashion</div></Link></li><li className="dropdown-item drop-section"><Link to="/shop"><img src="/dropdown/watches.png" alt="icons" className="drop-icons" /><div className="drop-text">Watches & Accessories</div></Link></li><li className="dropdown-item drop-section"><Link to="/shop"><img src="/dropdown/sports.png" alt="icons" className="drop-icons" /><div className="drop-text">Sports & Outdoors</div></Link></li>                                            
              </ul>
    )}
  </div>
  </div>

            <div className="col-sm-1 col-md-6 container-black">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{display: 'flex', justifyContent: 'space-between', listStyle: 'none', width: '200px'}}>
            <li className="nav-item">
              <span className="nav-link active" aria-current="page"><Link to="/shop">Home</Link></span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Other</a>
            </li>
          </ul>
          </div>
          </div>
            </div>
        </div>
        
</>
)
}
export default MyNav
