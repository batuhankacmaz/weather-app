import { createContext, useContext } from 'react';

export interface IWeather {
  isLoggedIn: boolean;
  theme: string;
  isModalOpen: boolean;
}

export type WeatherContextType = {
  isLoggedIn: boolean;
  theme: string;
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  setDarkTheme: () => void;
  setLightTheme: () => void;
  logout: () => void;
  login: () => void;
};

export const GlobalState = createContext<WeatherContextType | null>(null);
GlobalState.displayName = 'GlobalState';

export const useWeather = () => useContext(GlobalState);
