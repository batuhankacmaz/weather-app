import { globalActionTypes as actions, IActions } from './global.actions';
import { IWeather } from './global.state';

export const globalReducer = (state: IWeather, action: IActions) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case actions.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actions.LIGHT_THEME:
      return {
        ...state,
        theme: 'light',
      };
    case actions.DARK_THEME:
      return {
        ...state,
        theme: 'dark',
      };
    case actions.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case actions.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};
