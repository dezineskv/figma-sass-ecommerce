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
  const [isOpenD, setIsOpenD] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownD = () => {
    setIsOpenD(!isOpenD);
  };

  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark container-black pb-5">
  <div className="container" style={{maxWidth: '1440px'}}>
    <div className="row row-cols-2 d-flex justify-content-space-between py-3" style={{width: '100%',}}>
        <div className="col d-flex" >
            <div className="dropdown" style={{position: 'absolute', top: '-12px'}}>
              <button className="btn btn-primary dropdown-toggle button-header" onClick={toggleDropdown}>
              Categories
              </button>
                  {isOpen && (
                  <ul className="menu text-align-left be-vietnam-pro-12" style={{zIndex: '1'}}>
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
            <nav className="navbar navbar-dark navbar-expand-md hamburger-but">
                    <button type="button" data-toggle="collapse" className="navbar-toggler but" data-target="#navcol-1"  onClick={toggleDropdownD} style={{position: 'absolute', top: '-12px', right: '0px'}}><span className="navbar-toggler-icon"></span></button>
                    {isOpenD && (
                    <div className="hamburger" id="navcol-1" style={{zIndex: '2'}}>
                        <ul className="navbar-nav ml-auto" id="mainNav">
                            <li className="nav-item"><a className="nav-link" href="#">Home </a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Link1</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Link2</a></li>
                        </ul>
                    </div>
                    )}
                    {!isOpenD && (
                    <div className="collapse navbar-collapse" style={{marginRight: '2rem'}}>
                        <ul className="navbar-nav ml-auto shownav">
                            <li className="nav-item"><a className="nav-link" href="#">Home </a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Link1</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Link2</a></li>

                        </ul>
                    </div>
                    )}
            </nav>
        </div>     
    </div>
  </div>
</nav>
</>
)
}
export default myNav
