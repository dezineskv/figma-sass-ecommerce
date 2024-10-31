import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function CollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
    <div className="container-black">
  <div className="container container-n" style={{maxWidth: '1440px', margin: '0 auto'}}>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{display: 'flex',
    justifyContent: 'space-between', width: '100%'}}>
      <div className="col-6">
      <div className="" style={{textAlign: 'left'}}>
    <button className="btn-primary btn-cats" onClick={toggleDropdown} style={{margin: '0'}}>
      Categories
    </button>
    {isOpen && (
      <ul className="drop-items" style={{borderRadius: '6px'}}>
          <li className="dropdown-item drop-section"><Link to="/"><img src="/dropdown/elect.png" alt="icons" className="drop-icons" /><div className="drop-text">Electronics Devices</div></Link></li>
          <li className="dropdown-item drop-section"><Link to="/"><img src="/dropdown/elect.png" alt="icons" className="drop-icons" /><div className="drop-text">Electronics Devices</div></Link></li>
          <li className="dropdown-item drop-section"><Link to="/"><img src="/dropdown/elect.png" alt="icons" className="drop-icons" /><div className="drop-text">Electronics Devices</div></Link></li>
          <li className="dropdown-item drop-section"><Link to="/"><img src="/dropdown/elect.png" alt="icons" className="drop-icons" /><div className="drop-text">Electronics Devices</div></Link></li>
          <li className="dropdown-item drop-section"><Link to="/"><img src="/dropdown/elect.png" alt="icons" className="drop-icons" /><div className="drop-text">Electronics Devices</div></Link></li>
                            
              </ul>
    )}
  </div>
    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  </div>
  {/* <div className="col-6">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      
    </ul>
    

  </div>
  </div> */}
</nav>
  </div>
  </div>
  </>
  );
}

export default CollapsibleExample;