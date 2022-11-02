import React from 'react';
import WeatherCard from '../WeatherCard';
import { useWeather, WeatherContextType } from '../../context/global.state';
import '../../assets/styles/CityCardStyle.scss';

function CityCard() {
  const { citiesWeathers, remove, addFavorite, removeFavorite } =
    useWeather() as WeatherContextType;

  const handleRemove = (id: number) => {
    remove(id);
  };
  const handleFavorite = (id: number) => {
    addFavorite(id);
  };
  const handleRemoveFavorite = (id: number) => {
    removeFavorite(id);
  };

  return (
    <>
      {citiesWeathers.length ? (
        citiesWeathers.map((cityWeathers, index) => {
          return (
            <div className="city_card_container" key={index}>
              <div className="city_name">
                <h2>{cityWeathers.cityName}</h2>
              </div>
              <ul className="weathers">
                {cityWeathers.weathers.map((weather, index) => (
                  <li className="weather" key={index}>
                    <WeatherCard weather={weather} />
                  </li>
                ))}
              </ul>
              <div className="button_group">
                <button
                  className="remove"
                  onClick={() => handleRemove(cityWeathers.id)}
                >
                  Remove{' '}
                </button>
                {cityWeathers.isFavorite ? (
                  <button
                    className="add_favorite"
                    onClick={() => handleRemoveFavorite(cityWeathers.id)}
                  >
                    Remove Favorite
                  </button>
                ) : (
                  <button
                    className="add_favorite"
                    onClick={() => handleFavorite(cityWeathers.id)}
                  >
                    Add Favorite
                  </button>
                )}
              </div>
            </div>
          );
        })
      ) : (
        /*   */
        <div>
          <h1 className="no_item">Eleman yok</h1>
        </div>
      )}
    </>
  );
}

export default CityCard;
