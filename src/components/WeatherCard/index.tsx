import React, { useState, useCallback, useEffect, useMemo } from 'react';
import '../../assets/styles/WeatherCardStyle.scss';
import { weatherMap } from './weathers';
import { IWeather } from '../../context/global.state';

function WeatherCard({ weather }: { weather: IWeather }) {
  const [forecast, forecastSet] = useState(weatherMap.get('DEFAULT'));

  const filterWeathers = useCallback(() => {
    weatherMap.forEach((value, key) => {
      if (
        weather.weatherForecast.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        forecastSet(value);
      }
    });
  }, [weather]);
  const day = useMemo(() => {
    const date = new Date(weather.datetime);
    return date.toString().split(' ')[0];
  }, [weather]);
  useEffect(() => {
    filterWeathers();
  }, []);
  return (
    <div className="card_container">
      <span className="card_header">{day}</span>
      <img src={forecast} className="card_image" />
      <div className="card_information">
        <span className="max_temperature">{weather.maxTemperature}°C</span>
        <span className="min_temperature">{weather.minTemperature}°C</span>
      </div>
    </div>
  );
}

export default WeatherCard;
