import React, { useReducer } from 'react';
import { globalReducer } from './global.reducer';
import { globalActionTypes as actions } from './global.actions';
import {
  GlobalState,
  ICityWeathersApp,
  IWeather,
  ICityWeathers,
} from './global.state';

const GLOBAL_STATE: ICityWeathersApp = {
  citiesWeathers: [],
};

export const GlobalStateProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, GLOBAL_STATE);

  const value = {
    ...state,
    add: (cityName: string, weathers: IWeather[]) => {
      dispatch({ type: actions.ADD, cityName, weathers });
    },
    remove: (id: number) => {
      dispatch({ type: actions.REMOVE, id });
    },
    addFavorite: (id: number) => {
      dispatch({ type: actions.ADD_FAVORITE, id });
    },
    removeFavorite: (id: number) => {
      dispatch({ type: actions.REMOVE_FAVORITE, id });
    },
  };

  // Wrap the context provider around our component
  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};
