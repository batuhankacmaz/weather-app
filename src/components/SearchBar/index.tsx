import React from 'react';
import { BsSearch } from 'react-icons/bs';
import '../../assets/styles/SearchBarStyle.scss';

function SearchBar() {
  return (
    <div className="search_bar_container">
      <input
        type="text"
        placeholder="Search the city..."
        className="search_bar"
      />
      <BsSearch />
    </div>
  );
}

export default SearchBar;
