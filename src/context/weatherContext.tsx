import React, {
  useCallback,
  useReducer,
  createContext,
  useContext,
} from 'react';

//define the initial state
const GLOBAL_STATE = {
  isLoggedIn: false,
  theme: 'light',
  isModalOpen: false,
};

interface IGlobalState {
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

// define the reducer

const globalReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    case 'LIGHT_THEME':
      return {
        ...state,
        theme: 'light',
      };
    case 'DARK_THEME':
      return {
        ...state,
        theme: 'dark',
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpen: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

// Create the context
export const GlobalState = createContext<WeatherContextType | null>(null);
GlobalState.displayName = 'GlobalState';
export const GlobalStateProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  // Create the reducer
  const [state, dispatch] = useReducer(globalReducer, GLOBAL_STATE);
  const value = {
    ...state,
    login: () => {
      dispatch({ type: 'LOGIN' });
    },
    logout: () => {
      dispatch({ type: 'LOGOUT' });
    },
    setLightTheme: () => {
      dispatch({ type: 'LIGHT_THEME' });
    },
    setDarkTheme: () => {
      dispatch({ type: 'DARK_THEME' });
    },
    openModal: () => {
      dispatch({ type: 'OPEN_MODAL' });
    },
    closeModal: () => {
      dispatch({ type: 'CLOSE_MODAL' });
    },
  };
  // Wrap the context provider around our component
  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export const useWeather = () => useContext(GlobalState);
