import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    'prefers-color-schema:dark'
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true';
  return prefersDarkMode || storedDarkMode;
};

const Context = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [search, setSearch] = useState('cat');

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, []);
  const globalValues = {
    isDarkTheme,
    toggleDarkTheme,
    search,
    setSearch,
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
