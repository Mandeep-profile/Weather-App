import React from 'react'
import { useAppContext } from '../Context/AppContext';
import "./Forcast.css"

const Forcast = () => {

    const { forcastData } = useAppContext()

    let fiveDaysForecast = [];

    for (let i = 7; i < forcastData?.list?.length; i += 8) {
        const forcastitem = forcastData?.list[i];
        const date = new Date(forcastitem?.dt * 1000);
        const options = { day: "numeric", month: "long" };
        const formatedDate = date.toLocaleDateString("en-US", options);
        const dayName = new Intl.DateTimeFormat("en-US", {
            weekday: "long",
        }).format(date);
        fiveDaysForecast.push({
            formattedDate: formatedDate,
            dayName: dayName,
            forecastItem: forcastitem,
        });
    }

    return (
        <div className='forcastmain'>
            <h1 className='forcastheading'>5 Days Forcast</h1>
            <div className='forcastdiv'>
                {fiveDaysForecast?.map((item, index) => {
                    return <div className='forcastdetails'>
                        <img
                            key={index}
                            src={`https://openweathermap.org/img/wn/${item?.forecastItem?.weather[0]?.icon}@2x.png`}
                            alt="img"
                            title={item.forecastItem.weather[0].description}
                            className="weather-icon"
                        />
                        <span>{parseInt(item.forecastItem.main.temp_max)}°c</span>
                        <p className='datedetails'>{item?.formattedDate}</p>
                        <p className='daydetails'>{item?.dayName}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Forcast