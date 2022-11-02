import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IFilteredData } from '../../utils/useAxios';
import '../../assets/styles/SearchBarStyle.scss';
import { getWeathersData } from '../../utils/useAxios';
import { useWeather, WeatherContextType } from '../../context/global.state';

function SearchBar() {
  const [search, searchSet] = useState<string>('');
  const [isError, isErrorSet] = useState<boolean>(false);
  const { add } = useWeather() as WeatherContextType;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      getWeathersData(search)
        .then((data: any) => {
          add(data.cityName, data.weathers);
          searchSet('');
        })
        .catch((err) => {
          searchSet('');
          isErrorSet(true);
          setTimeout(() => {
            isErrorSet(false);
          }, 1500);
        });
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchSet(event.target.value);
  };

  return (
    <>
      <div className="search_bar_container">
        <input
          type="text"
          placeholder="Search the city..."
          className="search_bar"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <BsSearch />
      </div>
      {isError && (
        <div className="error">
          <span className="error_text">City not found :(</span>
        </div>
      )}
    </>
  );
}

export default SearchBar;
