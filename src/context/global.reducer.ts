import { globalActionTypes as actions, IActions } from './global.actions';
import { ICityWeathers, IWeather, ICityWeathersApp } from './global.state';

export const globalReducer = (state: ICityWeathersApp, action: IActions) => {
  switch (action.type) {
    case actions.ADD: {
      state.citiesWeathers.push({
        id: state.citiesWeathers.length,
        cityName: action.cityName as string,
        isFavorite: false,
        weathers: action.weathers as IWeather[],
      });
      return { ...state };
    }
    case actions.REMOVE: {
      state.citiesWeathers = state.citiesWeathers.filter(
        (item) => item.id !== action.id
      );
      return { ...state };
    }

    case actions.ADD_FAVORITE: {
      const selectedItem = state.citiesWeathers.find(
        (item) => item.id === action.id
      );
      if (selectedItem) {
        selectedItem.isFavorite = true;
      }
      return { ...state };
    }
    case actions.REMOVE_FAVORITE: {
      const selectedItem = state.citiesWeathers.find(
        (item) => item.id === action.id
      );
      if (selectedItem) {
        selectedItem.isFavorite = false;
      }
      return { ...state };
    }
    default:
      return state;
  }
};
