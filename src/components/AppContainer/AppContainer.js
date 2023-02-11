import React, { useState} from 'react';
import { CityWeatherDescription } from '../CityWeatherDescription/CityWeatherDescription';
import { SearchBar } from "../SearchBar/SearchBar";
import { WeatherComponent } from "../WeatherComponent/WeatherContainer";
import bus from '../../assets/bus.png';
import './AppContainer.css';

export const AppContainer = () => {
    const [selectedCity, setSelectedCity] = useState({});
    const [weatherInfo, setWeatherInfo] = useState({});

    const appid = 'a5a47c18197737e8eeca634cd6acb581';

    const searchWeatherInfo = (city) => {
        // const completeApiUrl = apiUrl.replace('citylat', selectedCity?.lat).replace('citylon', selectedCity?.long)
        const lat = city.lat;
        const lon = city.long;
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${appid}&units=metric`

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
        <h1>
            <img alt='bus-icon' src={bus} className='busIcon'></img>
            ¿Cuál es su destino?
        </h1>
        <SearchBar handleSelectCity={handleSelectCity} selectedCity={selectedCity}></SearchBar>
        <CityWeatherDescription selectedCity={selectedCity} weatherInfo={weatherInfo}></CityWeatherDescription>
        <WeatherComponent weatherInfo={weatherInfo}></WeatherComponent>
        </div>
    );
}