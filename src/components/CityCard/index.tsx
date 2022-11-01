import React from 'react';
import WeatherCard from '../WeatherCard';
import { useWeather, WeatherContextType } from '../../context/global.state';
import '../../assets/styles/CityCardStyle.scss';

function CityCard() {
  const { theme, setLightTheme, setDarkTheme } =
    useWeather() as WeatherContextType;
  return (
    <div className="city_card_container">
      <div className="city_name">
        <h2>{theme}</h2>
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
        <button className="remove" onClick={setLightTheme}>
          Remove{' '}
        </button>
        <button className="add_favorite" onClick={setDarkTheme}>
          Add Favorite
        </button>
      </div>
    </div>
  );
}

export default CityCard;
