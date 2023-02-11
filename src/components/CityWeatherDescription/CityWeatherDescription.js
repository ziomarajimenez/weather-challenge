import { convertToDayOfWeek, convertToDate } from "../../utils/utils";
import './CityWeatherDescription.css';

export const CityWeatherDescription = ({ selectedCity, weatherInfo }) => {
    return (
        <div>
            {Object.keys(weatherInfo).length !== 0 
                ?
                    <div > 
                        <h3> Clima</h3>
                        <div className="CityWeather-Container">
                        <div>
                            <h5> {`${convertToDayOfWeek(weatherInfo.daily[0].dt)}, ${convertToDate(weatherInfo.daily[0].dt)}.`} </h5>
                            <h5>{`${selectedCity.city_name}, ${selectedCity.city_name}`}</h5>
                        </div>
                        <div>
                            <h5>{`${weatherInfo.daily[0].temp.min}°C temperatura mínima`}</h5>
                            <h5>{`${weatherInfo.daily[0].temp.min}°C temperatura máxima`}</h5>
                        </div>
                        </div>
                    </div>
                : 
                    null
            }
        </div>
    );
}