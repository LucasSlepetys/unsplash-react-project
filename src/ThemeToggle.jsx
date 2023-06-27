import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { getContext } from './CONTROL/context';
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = getContext();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' type='button' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <FaMoon className='toggle-icon' />
        ) : (
          <FaSun className='toggle-icon' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
