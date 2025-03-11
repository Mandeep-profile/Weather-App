import React from 'react'
import { Link } from "react-router-dom";
import OpenWeatherLogo from "../../Assets/openweatherImg.png"
import "./Footer.css"

const Footer = () => {

    const currentYear = new Date().getFullYear()
    return (
        <footer className='footermain'>
            <div className='footerdiv'>
                <p>Powered by</p>
                <Link to="https://openweathermap.org/api"
                    title="Free OpenWeather Api"
                    target="_blank"
                    rel="noopener noreferrer">
                <img src={OpenWeatherLogo} alt='Open Weather Logo' />
                </Link>
            </div>
                <p className='design'>Designed and Coded by :</p>
                <p className='developer'>
                    <sup>&#169; </sup>
                    {currentYear} <span>Mandeep Singh</span>
                </p>
        </footer>
    )
}

export default Footer;
