export interface IActions {
  type: globalActionTypes;
}

export enum globalActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  LIGHT_THEME = 'LIGHT_THEME',
  DARK_THEME = 'DARK_THEME',
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
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
