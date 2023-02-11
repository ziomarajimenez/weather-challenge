import React, { useState } from 'react';
import { debounce } from '../utils/utils';
import './styles.css'

export const SearchBar = ({ handleSelectCity, selectedCity }) => {
    const [foundCityName, setFoundCityName] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const searchCity = (cityName) => {
        fetch(`https://search.reservamos.mx/api/v2/places?q=${cityName}`)
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
        <div className='Searchbar-container'>
            <div className='input-container'> 
                <input 
                    type="text"
                    onChange={handleChange}
                    placeholder= 'Busque su destino'
                    value={inputValue}
                />
                {foundCityName 
                ?
                    <ul className='search-results'>
                        {foundCityName.map((city) => {
                            return (
                                <li data-id={city.id} key={city.id} onClick={handleOnClick} >{city?.city_name}, {city?.state}</li>
                            )
                        })}
                        {!selectedCity?.id && foundCityName?.length === 0 && inputValue ? <li> No hay resultados </li> : null }
                    </ul> 
                :
                    null
                }
            </div>
        </div>
    )
}