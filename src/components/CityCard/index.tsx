import React from 'react';
import WeatherCard from '../WeatherCard';
import { useWeather, WeatherContextType } from '../../context/global.state';
import '../../assets/styles/CityCardStyle.scss';

function CityCard() {
  const { citiesWeathers, add } = useWeather() as WeatherContextType;
  const handleAddCity = () => {
    add('Istanbul', [
      { weatherForecast: 'gunes', minTemperature: 20, maxTemperature: 21 },
    ]);
  };
  console.log(citiesWeathers);
  return (
    <div className="city_card_container">
      <div className="city_name">
        <h2>{citiesWeathers.length}</h2>
      </div>
      <ul className="weathers">
        <li className="weather">
          <WeatherCard />
        </li>
        <li className="weather">
          <WeatherCard />
        </li>
        <li className="weather">
          <WeatherCard />
        </li>
        <li className="weather">
          <WeatherCard />
        </li>
        <li className="weather">
          <WeatherCard />
        </li>
        <li className="weather">
          <WeatherCard />
        </li>
        <li className="weather">
          <WeatherCard />
        </li>
      </ul>
      <div className="button_group">
        <button className="remove">Remove </button>
        <button className="add_favorite" onClick={handleAddCity}>
          Add Favorite
        </button>
      </div>
    </div>
  );
}

export default CityCard;
