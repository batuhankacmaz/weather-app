import { createContext, useContext } from 'react';

export interface ICityWeathersApp {
  citiesWeathers: ICityWeathers[];
}
export interface ICityWeathers {
  id: number;
  cityName: string;
  isFavorite: boolean;
  weathers: IWeather[];
}

export interface IWeather {
  weatherForecast: string;
  minTemperature: number;
  maxTemperature: number;
  datetime: string;
}

export type WeatherContextType = {
  add: (cityName: string, weathers: IWeather[]) => void;
  remove: (id: number) => void;
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  citiesWeathers: ICityWeathers[];
};

export const GlobalState = createContext<WeatherContextType | null>(null);
GlobalState.displayName = 'GlobalState';

export const useWeather = () => useContext(GlobalState);
