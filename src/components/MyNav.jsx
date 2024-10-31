import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, NavbarBrand, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';

function myNav () {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark container-black" >
  <div className="container" style={{maxWidth: '1440px'}}>
    <div className="row row-cols-2 d-flex justify-content-space-between py-3" style={{width: '100%',}}>
        <div className="col d-flex" >
{/* 
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-target
</button>
<div class="collapse" id="collapseExample">
  <div class="well">
  eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div> */}


            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle button-header" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Categories</button>
              <ul className="dropdown-menu be-vietnam-pro-12 drop collapse" id="collapseExample" aria-labelledby="collapseExample">
                <li className="dropdown-item drop-items"><Link to="/shop"><img src="/dropdowns/elect.png" alt="icons" className="dropdown-icons" />Electronics Devices</Link></li>
                <li className="dropdown-item drop-items"><Link to="/shop"><img src="/dropdowns/elec.png" alt="icons" className="dropdown-icons" />Electronic Accessories</Link></li>
                <li className="dropdown-item drop-items"><Link to="/shop"><img src="/dropdowns/tv.png" alt="icons"className="dropdown-icons" />TV & Home Appliances</Link></li>
                <li className="dropdown-item drop-items"><Link to="/shop"><img src="/dropdowns/health.png" alt="icons"className="dropdown-icons" />Health & Beauty</Link></li>
                <li className="dropdown-item drop-items"><Link to="/shop"><img src="/dropdowns/baby.png" alt="icons"className="dropdown-icons" />Babies & Toys</Link></li>
                <li className="dropdown-item drop-items"><Link to="/shop"><img src="/dropdowns/pet.png" alt="icons" className="dropdown-icons" />Groceries & Pets</Link></li>
                <li className="dropdown-item drop-items"><Link to="/shop"><img src="/dropdowns/home.png" alt="icons" className="dropdown-icons" />Home & Lifestyle</Link></li>
                <li className="dropdown-item drop-items"><Link to="/shop"><img src="/dropdowns/women.png" alt="icons"className="dropdown-icons" />Women's Fashion</Link></li>
                <li className="dropdown-item drop-items"><Link to="/shop"><img src="/dropdowns/men.png" alt="icons" className="dropdown-icons" />Men's Fashion</Link></li>
                <li className="dropdown-item drop-items"><Link to="/shop"><img src="/dropdowns/watches.png" alt="icons" className="dropdown-icons" />Watches & Accessories</Link></li>
                <li className="dropdown-item drop-items"><Link to="/shop"><img src="/dropdowns/sports.png" alt="icons" className="dropdown-icons" />Sports & Outdoors</Link></li>                  
              </ul>
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
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-controls="navbarDropdown">
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-item  drop-items"><Link to="/">Item</Link></li>
                <li className="dropdown-item  drop-items"><Link to="/">action</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li className="dropdown-item  drop-items"><Link to="/">action</Link></li>
              </ul>
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
