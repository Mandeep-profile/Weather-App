import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../Assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./Header.css"
import Toggle from '../Toggle/Toggle';

const Header = () => {
  return (
    <header className='header'>
      <Link className='navLink'>
        <img className='logoImg' src={Logo} alt='Weather Logo' />
        <h1 className='heading'>Weatherpro</h1>
      </Link>
      <div>
        <input className='searchInput' type='text' placeholder='Search...' />
      </div>
      <div>
        <button className='locationbtn'> <FontAwesomeIcon icon={faLocationDot} /> Current Location</button>
      </div>
        <Toggle />
    </header>
  )
}

export default Header