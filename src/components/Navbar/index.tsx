import React from 'react';
import { NavLink } from 'react-router-dom';
import { url } from '../../utils/url';
import { TiWeatherStormy } from 'react-icons/ti';
import '../../assets/styles/NavbarStyle.scss';
function Navbar() {
  return (
    <nav className="navbar_container">
      <TiWeatherStormy color="#fdfdfd" size="40" style={{ margin: '10' }} />
      <NavLink
        to={url('home.weathers')}
        className={({ isActive }) =>
          (isActive ? 'active ' : '') + 'navbar_item'
        }
      >
        <span className="navbar_item_text">Home</span>
      </NavLink>
      <NavLink
        to={url('home.favorites')}
        className={({ isActive }) =>
          (isActive ? 'active ' : '') + 'navbar_item'
        }
      >
        <span className="navbar_item_text">Favorites</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
