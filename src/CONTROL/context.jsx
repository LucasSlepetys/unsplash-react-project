import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

const Context = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme);
  };
  const globalValues = {
    isDarkTheme,
    toggleDarkTheme,
  };

  return (
    <GlobalContext.Provider value={globalValues}>
      {children}
    </GlobalContext.Provider>
  );
};

export const getContext = () => {
  return useContext(GlobalContext);
};

export default Context;
