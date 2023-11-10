import React, { createContext, useReducer } from 'react';

export const themeData = [
  {
    text: 'White',
    value: 'carbon-theme--white cds-theme-zone-white',
  },
  {
    text: 'Gray 10',
    value: 'carbon-theme--g10 cds-theme-zone-g10',
  },
  {
    text: 'Gray 90',
    value: 'carbon-theme--g90 cds-theme-zone-g90',
  },
  {
    text: 'Gray 100',
    value: 'carbon-theme--g100 cds-theme-zone-g100',
  },
];

export const ThemeContext = createContext();

const initialState = {
  currentTheme: themeData[0],
};

const themeReducer = (state, action) => {
  if (themeData.find((td) => td.value === action.type.value)) {
    return { currentTheme: action.type };
  }
  return state;
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </ThemeContext.Provider>
  );
}
