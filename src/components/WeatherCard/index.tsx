import React from 'react';
import '../../assets/styles/WeatherCardStyle.scss';
import CloudyDay from '../../assets/images/static/cloudy-day-1.svg';

function WeatherCard() {
  return (
    <div className="card_container">
      <span className="card_header">Sun</span>
      <img src={CloudyDay} className="card_image" />
      <div className="card_information">
        <span className="max_temperature">18C</span>
        <span className="min_temperature">17C</span>
      </div>
    </div>
  );
}

export default WeatherCard;
