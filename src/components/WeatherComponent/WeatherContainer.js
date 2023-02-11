import { convertToDayOfWeek } from "../../utils/utils";
import './WeatherComponent.css';

export const WeatherComponent = ({weatherInfo}) => {
    
    return (
        <div className="WeatherComponent-container">
            {Object.keys(weatherInfo).length !== 0 
                ? 
                    weatherInfo?.daily.slice(1).map((day) => {
                        return (
                            <div className='weather-day'>
                                <p className='weather-day-title'>{(convertToDayOfWeek(day.dt).toLowerCase()).slice(0,3)}</p>
                                <p className='weather-day-max'> {Math.trunc(day.temp.max)}°C <p>max</p></p>
                                <p className='weather-day-min'> {Math.trunc(day.temp.min)}°C<p> min </p></p>
                            </div>
                        )
                    })
                : 
                    null
            }
        </div>
    );
}