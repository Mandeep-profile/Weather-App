import React from 'react'
import { useAppContext } from "../Context/AppContext"
import windSpeed from "../../Assets/windSpeed.png"
import "./Today.css"

const Today = () => {

    const { forcastData } = useAppContext()
    let todayArr = [];

    console.log(forcastData);

    for (let i = 0; i < 8; i++) {
        const forecastItem = forcastData?.list[i];
        const date = new Date(forecastItem?.dt * 1000);
        const options = { hour: "2-digit", hour12: true };
        const formattedTime = date.toLocaleTimeString([], options);
        todayArr.push({
          formattedTime: formattedTime,
          forecastItem: forecastItem,
        });
      }
    
    return (
        <div className='todaymain'>
                <h1 className='todayheading'>Today At</h1>
            <div className='todaydiv'>
                <div className='threehourtemp'>
                    {todayArr.map((item) => {
                        return <div className='temp'>
                            <p className='formattedtime'>{item.formattedTime}</p>
                            <img src={`https://openweathermap.org/img/wn/${item.forecastItem?.weather[0].icon}@2x.png`} alt='image_icon' className='image_icon'/>
                            <p className='formattedtemp'>{parseInt(item?.forecastItem?.main?.temp)}°C</p>
                        </div>
                    })}
                </div>
                <div className='threehourtemp'>
                    {todayArr.map((item) => {
                        return <div className='temp'>
                            <p className='formattedtime'>{item.formattedTime}</p>
                            <img src={windSpeed} alt='image_icon' className='image_icon'
                            style={{
                                transform: `rotate(${item.forecastItem?.wind.deg - 180}deg)`,
                              }}
                            />
                            <p className='formattedtemp'>{parseInt((item.forecastItem?.wind.speed))} Km/h</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Today