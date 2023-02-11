import { convertToDayOfWeek, convertToDate } from "../utils/utils";

export const CityWeatherDescription = ({ selectedCity, weatherInfo }) => {
    return (
        <div>
            {Object.keys(weatherInfo).length !== 0 
                ?
                    <div > 
                        <h2>Clima</h2>
                        <div className="CityWeather-Container">
                        <div>
                            <h4> {`${convertToDayOfWeek(weatherInfo.daily[0].dt)}, ${convertToDate(weatherInfo.daily[0].dt)}.`} </h4>
                            <h4>{`${selectedCity.city_name}, ${selectedCity.state}`}</h4>
                        </div>
                        <div>
                            <h4>{`${Math.trunc(weatherInfo.daily[0].temp.max)}°C temperatura máxima`}</h4>
                            <h4>{`${Math.trunc(weatherInfo.daily[0].temp.min)}°C temperatura mínima`}</h4>
                        </div>
                        </div>
                    </div>
                : 
                    null
            }
        </div>
    );
}