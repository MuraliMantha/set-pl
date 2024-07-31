
import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
// import NavItem from "../Navitem/navitem";
// import logo from "../../../public/assets/logo.png"
import "./navbar.css"

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);

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
    </div>


    <ul className="navbar-container">
        <li className="nav-item">
          Home
        </li>
        <li className="nav-item" onClick={handleDropdown1}>
          Solutions
          {dropdownOpen1 && (
            <div className="dropdown-container">
              <ul className="dropdown-items">
                <li className="dropdown-item">Control systems</li>
                <li className="dropdown-item">Light canopi system</li>
                <li className="dropdown-item">Term key solutions</li>
                <li className="dropdown-item">Retrofit</li>
              </ul>
              <div className='dropdown-content'>
                <p className='dropdown-para'>Our solutions include advanced control systems, innovative light canopy systems, turnkey solutions,
                and retrofit services to ensure optimal performance and efficiency for your environmental technology needs.</p>
                <button className='dropdown-button'>
                  Explore
                </button>
              </div>
            </div>
          )}
        </li>
        <li className="nav-item" onClick={handleDropdown2}>
          Environment
          {dropdownOpen2 && (
            <div className="dropdown-container">
              <ul className="dropdown-items">
                <li className="dropdown-item">Reach-in Plant Growth chambers</li>
                <li className="dropdown-item">Walk-in Plant Growth rooms</li>
                <li className="dropdown-item">Custom controlled Environment</li>
                <li className="dropdown-item">Storage chambers</li>
              </ul>
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
            </div>
          )}
        </li>
        <li className="nav-item">
          Contact
        </li>
        <button className="nav-button">
     
          Insights
       
        </button>
      </ul>
      
    </div>
  )
}


export default Navbar
