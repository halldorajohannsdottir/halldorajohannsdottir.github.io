import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between p-4 bg-gray-100 dark:bg-gray-800">
      <Link
        to="/"
        // className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          My Website
        </h1>
      </Link>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Link
        to="/booking"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Booking
      </Link>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Home
      </Link>
    </header>
  );
};

export default Header;
