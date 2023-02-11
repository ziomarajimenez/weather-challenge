import React, { useState } from 'react';
import { debounce } from '../../utils/utils';
export const SearchBar = ({ handleSelectCity, selectedCity }) => {
    const [foundCityName, setFoundCityName] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const apiURL = 'https://search.reservamos.mx/api/v2/places?q=';

    const searchCity = (cityName) => {
        fetch(`${apiURL}${cityName}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const arrayCities = data.filter(city => city?.result_type === 'city').slice(0,5)
                setFoundCityName(arrayCities);
            })
    }  

    const handleChange = (e) => {
        const cityName = e.target.value;
        setInputValue(cityName);
        if(cityName === ''){
            setFoundCityName([])
        } else {
            setFoundCityName(debounce(searchCity(cityName), 300));
        }
    }

    const handleOnClick = (e) => {
        const cityId = parseInt(e.target.dataset.id);
        const selectedCity = foundCityName.filter(city => city.id === cityId)[0];
        handleSelectCity(selectedCity);
        setInputValue(`${selectedCity.city_name}, ${selectedCity.state}`);
        setFoundCityName([]);
    }

    return(
        <div> 
            <input 
                type="text"
                onChange={handleChange}
                placeholder= 'Busque su destino'
                value={inputValue}
            />
            {foundCityName && foundCityName.map((city) => {
                return (
                    <p data-id={city.id} key={city.id} onClick={handleOnClick}>{city?.city_name}, {city?.state}</p>
                )
            })}
            {!selectedCity?.id && foundCityName?.length === 0 && inputValue ? <div> No hay resultados </div> : null }
        </div>
    )
}