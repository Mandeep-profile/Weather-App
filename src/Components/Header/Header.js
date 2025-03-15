import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../Context/AppContext"
import { useThemeContext } from '../Context/ThemeContext';
import "./Header.css";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay)
  }
}

const Header = () => {

  const inputRef = useRef(null)
  const { searchResults, setSearchResults, setQuery, setLatitude, setLongitude } = useAppContext();
  const { isDarkMode, ToggleTheme}= useThemeContext()

  const handleInputChange = useCallback(
    debounce((event) => {
      const query = event.target.value.trim();
      if (query === "" || query.length <= 2) {
        setSearchResults([]);
        return;
      }
      setQuery(query)
    }, 1000),
    [setQuery, setSearchResults]
  )

  const handleClick = (lat, lon) => {
    setLatitude(lat);
    setLongitude(lon);
    setQuery(null);
    setSearchResults([]);
  }

  return (
    <header className="header">
      <Link to="/" className="navLink">
        <img className="logoImg" src={Logo} alt="Weather Logo" />
        <h1 className="heading">Weatherpro</h1>
      </Link>
      <div className="searchContainer">
        <input
          className="searchInput"
          type="text"
          ref={inputRef}
          placeholder="Search..."
          autoComplete="off"
          onChange={handleInputChange}
        />

        <div className="searchResults">
          {searchResults?.map((country) => (
            <div key={country.lon} className="searchItem" onClick={() => handleClick(country.lat, country.lon)}>
              <p className="searchItemName">{country.name}</p>
              <p className="searchItemDetails">{country.state || ""} {country.country}</p>
            </div>
          ))}
        </div>
      </div>
      <button className='toggleBtn' onClick={ToggleTheme}>
        {<FontAwesomeIcon size='2x' icon={isDarkMode ? faMoon : faSun} />}
      </button>
    </header>
  );
};

export default Header;
