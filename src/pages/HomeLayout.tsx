import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/styles/HomeLayout.scss';

function HomeLayout() {
  return (
    <>
      <Navbar />
      <div className="layout_container">
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
