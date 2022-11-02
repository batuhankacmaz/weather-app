import React, { useMemo } from 'react';
import WeatherCard from '../WeatherCard';
import { useWeather, WeatherContextType } from '../../context/global.state';
import '../../assets/styles/CityCardStyle.scss';

function FavoriteCard() {
  const { citiesWeathers, removeFavorite } = useWeather() as WeatherContextType;

  const favoriteCards = useMemo(() => {
    const filteredCards = citiesWeathers.filter(
      (cityWeathers) => cityWeathers.isFavorite === true
    );
    return filteredCards;
  }, [removeFavorite]);

  const handleRemoveFavorite = (id: number) => {
    removeFavorite(id);
  };

  return (
    <>
      {favoriteCards.length ? (
        favoriteCards.map((cityWeathers, index) => {
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
                  onClick={() => handleRemoveFavorite(cityWeathers.id)}
                >
                  Remove Favorite
                </button>
              </div>
            </div>
          );
        })
      ) : (
        /*   */
        <div>
          <h1 className="no_item">Favori yok</h1>
        </div>
      )}
    </>
  );
}

export default FavoriteCard;
