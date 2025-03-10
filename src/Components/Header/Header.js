import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../Assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./Header.css"

const Header = () => {

  const handleSearchbar = () => {

  }

  return (
    <header className='header'>
      <Link className='navLink'>
        <img className='logoImg' src={Logo} alt='Weather Logo' />
        <h1 className='heading'>Weatherpro</h1>
      </Link>
      <div>
        <input className='searchInput' type='text' placeholder='Search...' onChange={handleSearchbar} autoComplete='off' />
      </div>
      <div>
        <button className='locationbtn'> <FontAwesomeIcon icon={faLocationDot} /> Current Location</button>
      </div>
    </header>
  )
}

export default Header