import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.scss';

function App() {
  return useRoutes(routes);
}

export default App;
