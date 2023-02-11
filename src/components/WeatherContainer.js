import { convertToDayOfWeek } from "../utils/utils";

export const WeatherComponent = ({weatherInfo}) => {
    
    return (
        <div className="WeatherComponent-container">
            {Object.keys(weatherInfo).length !== 0 
                ? 
                    weatherInfo?.daily.slice(1).map((day) => {
                        return (
                            <div key={day.dt} className='weather-day'>
                                <h3>{(convertToDayOfWeek(day.dt).toLowerCase()).slice(0,3)}</h3>
                                <div className='weather-max'>
                                    <p className='weather-day-max' weather-day-max> {Math.trunc(day.temp.max)}
                                        °C 
                                        <p className='weather-day-max'>
                                            max
                                        </p>
                                    </p>
                                </div>
                                <div className='weather-min'>
                                    <p className='weather-day-min'> {Math.trunc(day.temp.min)} 
                                        °C 
                                        <p className='weather-day-min'> 
                                            min 
                                        </p>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                : 
                    null
            }
        </div>
    );
}