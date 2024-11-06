import { React } from 'react';
import { Navbar, NavbarBrand, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark container-black py-3" style={{width: '100%'}}>
        <div className="container outer-header" style={{maxWidth: '1440px'}}>
          <div className="row d-flex justify-content-space-between header" style={{width: '100%'}}>     
              <div className="col-7 gap-4 header-l" style={{textAlign: 'left'}}>
                <Link to="/"><img src="logo_white1.png" alt="logo" className="logo"/></Link>
              </div>
              <div className="col-2 header-m" style={{textAlign: 'right'}}>
                  <div className="collapse navbar-collapse header-search" id="navbarSupportedContent">    
                    <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
              </div>
            <div className="col-2 d-flex"  style={{justifyContent: 'flex-end'}}>
        {/* <button className="mode" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}><img src="/Moon.png" alt="dark mode" className="moon" /></button> */}      
        <img src="Moon.png" alt="icons" className="icons-h" /><img src="cart-2.png" alt="icons" className="icons-h" /> <img src="profile-icon-2.png" alt="icons" className="icons-h" />
            </div>
          </div>   
        </div>
      </nav>
</>
)
}
export default Header
