import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomeLayout() {
  return (
    <>
      <Navbar />
      <h1>HOME LAYOUT</h1>
      <Outlet />
    </>
  );
}

export default HomeLayout;
