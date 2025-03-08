import React from 'react'
import { useAppContext } from '../Context/AppContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faDroplet, faWater, faEye, faTemperatureThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import "./Highlight.css"

const Highlight = () => {

  const { currentWeatherData } = useAppContext()
  console.log(currentWeatherData);

  const FormatTime = (timeUnix, timezone) => {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${minutes} ${amPm}`;
  }

  return (
    <div className='hightlightmain'>
      <div className='highlightdiv'>
        <h2 className='highlightheading'>Today Highlights</h2>
        <div className='subhighlights1'>
          <div className='highlights'>
            <h1 className='subheading'>Sunrise</h1>
            <div className='highlighttime'>
              <FontAwesomeIcon icon={faSun} />
              <p>
                {FormatTime(
                  currentWeatherData?.sys.sunrise,
                  currentWeatherData?.timezone,
                )}
              </p>
            </div>
          </div>
          <div className='highlights'>
            <h1 className='subheading'>Sunset</h1>
            <div className='highlighttime'>
              <FontAwesomeIcon icon={faMoon} />
              <p>
                {FormatTime(
                  currentWeatherData?.sys.sunset,
                  currentWeatherData?.timezone,
                )}
              </p>
            </div>
          </div>
        </div>
        <div className='subhighlights2'>
          <div className='highlights'>
            <h1 className='subheading'>Humidity</h1>
            <div className='highlighttime'>
              <FontAwesomeIcon icon={faDroplet} />
              <p>
                {currentWeatherData?.main?.humidity}
                <small>%</small>
              </p>
            </div>
          </div>
          <div className='highlights'>
            <h1 className='subheading'>Pressure</h1>
            <div className='highlighttime'>
              <FontAwesomeIcon icon={faWater} />
              <p>
                {currentWeatherData?.main.pressure}
                <small> hPa</small>
              </p>
            </div>
          </div>
          <div className='highlights'>
            <h1 className='subheading'>Visiblility</h1>
            <div className='highlighttime'>
              <FontAwesomeIcon icon={faEye} />
              <p>
                {(currentWeatherData?.visibility) / 1000}
                <small> km</small>
              </p>
            </div>
          </div>
          <div className='highlights'>
            <h1 className='subheading'>Feels Like</h1>
            <div className='highlighttime'>
              <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
              <p>
                {(currentWeatherData?.main?.feels_like.toFixed(1))}°c
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlight