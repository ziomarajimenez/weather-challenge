import React, { useState} from 'react';
import { CityWeatherDescription } from './CityWeatherDescription';
import { Header } from './Header';
import { SearchBar } from "./SearchBar";
import { WeatherComponent } from "./WeatherContainer";

export const AppContainer = () => {
    const [selectedCity, setSelectedCity] = useState({});
    const [weatherInfo, setWeatherInfo] = useState({});
    const API_KEY = process.env.REACT_APP_API_KEY;

    const searchWeatherInfo = (city) => {
        const { lat, long } = city;
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=${API_KEY}&units=metric`
        fetch(weatherApiUrl)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setWeatherInfo(data);
        })
    }

    const handleSelectCity = (city) => {
        setSelectedCity(city);
        searchWeatherInfo(city);
    }

    return(
        <div className='App-container'>
        <Header/>
        <SearchBar handleSelectCity={handleSelectCity} selectedCity={selectedCity}></SearchBar>
        <CityWeatherDescription selectedCity={selectedCity} weatherInfo={weatherInfo}></CityWeatherDescription>
        <WeatherComponent weatherInfo={weatherInfo}></WeatherComponent>
        </div>
    );
}