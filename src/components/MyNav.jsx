import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, NavbarBrand, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';
import React, { useState } from 'react';

function myNav () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark container-black" >
  <div className="container" style={{maxWidth: '1440px'}}>
    <div className="row row-cols-2 d-flex justify-content-space-between py-3" style={{width: '100%',}}>
        <div className="col d-flex" >

            <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle button-header" onClick={toggleDropdown}>
        Categories
      </button>
      {isOpen && (
       <ul className="menu text-align-left be-vietnam-pro-12">
       <li className="drop-items"><Link to="/shop"><img src="/dropdown/elect.png" alt="icons" className="dropdown-icons" />Electronics Devices</Link></li>
       <li className="drop-items"><Link to="/shop"><img src="/dropdown/elec.png" alt="icons" className="dropdown-icons" />Electronic Accessories</Link></li>
       <li className="drop-items"><Link to="/shop"><img src="/dropdown/tv.png" alt="icons"className="dropdown-icons" />TV & Home Appliances</Link></li>
       <li className="drop-items"><Link to="/shop"><img src="/dropdown/health.png" alt="icons"className="dropdown-icons" />Health & Beauty</Link></li>
       <li className="drop-items"><Link to="/shop"><img src="/dropdown/baby.png" alt="icons"className="dropdown-icons" />Babies & Toys</Link></li>
       <li className="drop-items"><Link to="/shop"><img src="/dropdown/pet.png" alt="icons" className="dropdown-icons" />Groceries & Pets</Link></li>
       <li className="drop-items"><Link to="/shop"><img src="/dropdown/home.png" alt="icons" className="dropdown-icons" />Home & Lifestyle</Link></li>
       <li className="drop-items"><Link to="/shop"><img src="/dropdown/women.png" alt="icons"className="dropdown-icons" />Women's Fashion</Link></li>
       <li className="drop-items"><Link to="/shop"><img src="/dropdown/men.png" alt="icons" className="dropdown-icons" />Men's Fashion</Link></li>
       <li className="drop-items"><Link to="/shop"><img src="/dropdown/watches.png" alt="icons" className="dropdown-icons" />Watches & Accessories</Link></li>
       <li className="drop-items"><Link to="/shop"><img src="/dropdown/sports.png" alt="icons" className="dropdown-icons" />Sports & Outdoors</Link></li>                  
     </ul>
      )}
             
              
              </div>
        </div>
        <div className="col d-flex" style={{justifyContent: 'flex-end'}}>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft: '27rem'}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link active" aria-current="page"><Link to="/">Home</Link></span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
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
</nav>
</>
)
}
export default myNav
