import { IWeather } from './global.state';
export interface IActions {
  type: globalActionTypes;
  id?: number;
  cityName?: string;
  weathers?: IWeather[];
}

export enum globalActionTypes {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
}

/* export const globalActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LIGHT_THEME: 'LIGHT_THEME',
  DARK_THEME: 'DARK_THEME',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

export type ActionType = {
  type: globalActionTypes;
}; */
