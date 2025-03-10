import React from 'react'
import { useAppContext } from '../Context/AppContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Now.css"

const Now = () => {

  const { currentWeatherData } = useAppContext()

  return (
    <div className='nowMain'>
      <div className='nowdiv'>
        <h2 className='nowheading'>Now</h2>
      </div>
      <div className='tempsection'>
        <p className='currenttemp'>{Math.round(currentWeatherData?.main?.temp || "")}°c</p>
        <img className='iconimg' src={`https://openweathermap.org/img/wn/${currentWeatherData?.weather[0].icon}@2x.png`} alt='icon' />
      </div>
      <p className='tempdescription'>{currentWeatherData?.weather[0]?.description}</p>
      <div className='horizontalline'></div>
      <div className='datediv'>
        <FontAwesomeIcon icon={faCalendarDays} />
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div className='locationdiv'>
        <FontAwesomeIcon icon={faLocationDot} />
        <p className='location'>{currentWeatherData?.name}</p>
      </div>
    </div>
  )
}

export default Now