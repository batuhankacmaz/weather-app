import React from 'react';
import WeatherCard from '../WeatherCard';
import { BsSearch } from 'react-icons/bs';
import '../../assets/styles/CityCardStyle.scss';

function CityCard() {
  return (
    <div className="city_card_container">
      <div className="city_name">
        <h2>Istanbul</h2>
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
        <button className="add_favorite">Add Favorite</button>
      </div>
    </div>
  );
}

export default CityCard;
