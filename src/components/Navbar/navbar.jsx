
import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars, FaTimes } from 'react-icons/fa';
// import NavItem from "../Navitem/navitem";
// import logo from "../../../public/assets/logo.png"
import "./navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      console.log(isOpen)
        setIsOpen(!isOpen);
    };

    const changeBackground = () => {
        if(window.scrollY >= 80){
            console.log("clicked")
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)



    const handleDropdown1 = (index) => {
        setDropdownOpen2(false)
        setDropdownOpen3(false)
        setDropdownOpen1((prev)=> !prev)
    }
    const handleDropdown2 = (index) => {
        setDropdownOpen1(false)
        setDropdownOpen3(false)
        setDropdownOpen2((prev)=> !prev)
    }
    const handleDropdown3 = (index) => {
        setDropdownOpen2(false)
        setDropdownOpen1(false)
        setDropdownOpen3((prev)=> !prev)
    }

  return (
    <div className={navbar ? ("nav-bar active") : "nav-bar"}>
        <div className="logo-container">
            <img src="/assets/logo.png" className="logo" alt="logo"/>
            <img src="/assets/logo.png" className="mobile-logo" alt="logo"/>
        </div>
        


        <ul className="navbar-container">
            <Link to="/" className='nav-link1'>
            <li className="nav-item">
              Home
            </li>
            </Link>

            

            <Link to="/solutions" className='nav-link1'> 
            <li className="nav-item" onClick={handleDropdown1}>
              Solutions
              {dropdownOpen1 && (
                <div className="dropdown-container">
                  <ul className="dropdown-items">
                    <li className="dropdown-item">Control systems</li>
                    <Link to="/Light-canopi-system">
                    <li className="dropdown-item">Light canopi system</li></Link>
                    <li className="dropdown-item">Term key solutions</li>
                    <li className="dropdown-item">Retrofit</li>
                  </ul>
                  <div className='dropdown-content'>
                    <p className='dropdown-para'><span className='span-el'>Our solutions</span> include advanced control systems, innovative light canopy systems, turnkey solutions,
                    and retrofit services to ensure optimal performance and efficiency for your environmental technology needs.</p>
                    <button className='dropdown-button'>
                      Explore
                    </button>
                  </div>
                  <img src='/assets/sol.jpg' alt='nav-img' className='nav-img' />
                </div>
              )}
            </li>
            </Link>
            <li className="nav-item" onClick={handleDropdown2}>
              Environment
              {dropdownOpen2 && (
                <div className="dropdown-container">
                  <ul className="dropdown-items">
                    <Link to="/chamberMainsession"><li className="dropdown-item">Reach-in Plant Growth chambers</li></Link>
                    <li className="dropdown-item">Walk-in Plant Growth rooms</li>
                    <li className="dropdown-item">Custom controlled Environment</li>
                    <li className="dropdown-item">Storage chambers</li>
                  </ul>
                  <div className='dropdown-content'>
                    <p className='dropdown-para'><span className='span-el'>Discover </span>our advanced solutions for controlled environments, including Reach-in Plant Growth Chambers, Walk-in Plant Growth Rooms, Custom Controlled Environments,
                    and specialized Storage Chambers designed to meet diverse agricultural and research needs.</p>
                    <button className='dropdown-button'>
                      Explore
                    </button>
                  </div>
                  <img src='/assets/navimg.jpg' alt='nav-img' className='nav-img' />
                </div>
              )}
            </li>
            <li className="nav-item" onClick={handleDropdown3}>
              Technology
              {dropdownOpen3 && (
                <div className="dropdown-container">
                  <ul className="dropdown-items">
                    <li className="dropdown-item">Automobile test chambers</li>
                    <li className="dropdown-item">Electronics technology</li>
                    <li className="dropdown-item">Customize technology</li>
                    <li className="dropdown-item">Air bags</li>
                  </ul>
                  <div className='dropdown-content'>
                    <p className='dropdown-para'><span className='span-el'>Innovative </span>Testing Solutions Advanced Technology for Automobiles, Electronics, and Custom Applications.Our cutting-edge technology ensures rigorous testing
                    and validation for automotive components, electronic devices, and bespoke applications. </p>
                    <button className='dropdown-button'>
                      Explore
                    </button>
                  </div>
                  <img src='/assets/tech.jpg' alt='nav-img' className='nav-img' />
                </div>
              )}
            </li>
            
            <Link to="contactus" className='nav-link1'>
                <li className="nav-item">
                  Contact Us
                </li>
            </Link>  

            <Link to="/about" className='nav-link1'> 
             <li className="nav-item" >
              About
            </li></Link> 
        </ul>

       
        <div className="navbar-mobile-container">
          <button className="nav-mobile-button">
            Contact Us
          </button>
          <div className="mobile-menu-icon" >
            {isOpen ? <FaTimes onClick={toggleMenu} className='cross' /> : <FaBars onClick={toggleMenu} className='ham'/>}
          </div>
          <div className={`popup-menu ${isOpen ? 'open' : ''}`}>
            <ul className="nav-menu-mobile">
              <li className="nav-item-mobile" >
                Home
              </li>
              <li className="nav-item-mobile" >
                Solutions
              </li>
              <li className="nav-item-mobile">
                Environment
              </li>
              <li className="nav-item-mobile" >
                Technology
              </li>
              <li className="nav-item-mobile" >
                About
              </li>
              
            </ul>
           
          </div>
        </div>
     
          
    </div>
  )
}


export default Navbar
