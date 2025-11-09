import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between p-4 bg-gray-100 dark:bg-gray-800">
      <Link to="/">
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          My Website
        </h1>
      </Link>

      <div className="flex justify-between gap-4">
        <Link
          to="/booking"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Booking
        </Link>
        <label className="inline-flex items-center me-5 cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isDark}
            onChange={toggleTheme}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </span>
        </label>
      </div>
    </header>
  );
};

export default Header;
