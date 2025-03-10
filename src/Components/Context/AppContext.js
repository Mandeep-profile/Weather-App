import {createContext, useCallback, useEffect, useState, useContext } from "react";

const Apikey = "0b72beb2df4afc6351f66e064b4f9b0d";
const Default_Latitude = 28.6459661;
const Default_longitude = 77.162929;

const AppContext = createContext();

const fetchData = async (url, setter) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        setter(data)
    } catch (error) {
        console.log("Error While Fetching Data", error)
    }
}

const AppProvider = ({children}) => {

    const [latitude, setLatitiude] = useState(Default_Latitude)
    const [longitude, setLongitude] = useState(Default_longitude)
    const [currentWeatherData, setCurrentWeatherData] = useState(null)
    const [forcastData, setForcastData] = useState(null);
    const [query, setQuery] = useState(null);
    const [searchResult, setSearchResult] = useState(null)

    const fetchWeatherData = useCallback(() => {
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${Apikey}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${Apikey}`;
        fetchData(currentWeatherUrl, setCurrentWeatherData);
        fetchData(forecastUrl, setForcastData)
    }, [latitude, longitude])

    const fetchGeoData = useCallback(() => {
        if (query) {
            const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${Apikey}`;
            fetchData(geoURL, setSearchResult)
        }
    }, [query])

    useEffect(() => {
        fetchWeatherData();
    }, []);

    useEffect(() => {
        fetchGeoData();
    }, [fetchGeoData]);

    const value = {
        query,
        searchResult,
        currentWeatherData,
        forcastData,
        setLatitiude,
        setLongitude,
        setQuery,
        setSearchResult
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}

export default AppProvider;