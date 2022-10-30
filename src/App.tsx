import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { url } from './utils/url';
import logo from './logo.svg';
import Navbar from './components/Navbar';

import './App.scss';

function App() {
  console.log(url('home.favorites'));
  return useRoutes(routes);
}

export default App;
