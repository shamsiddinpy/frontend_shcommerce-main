import { useState } from 'react';
import { FaShoppingBag, FaQuestionCircle, FaBell, } from 'react-icons/fa';
import DarkModeToggle from './Darkmode';

const Panel = () => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('🇺🇿 Uz');

  const handleLangSelect = (lang, label) => {
    setSelectedLang(`${lang} ${label}`);
    setIsLangDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-between text-gray-500 p-4 border-b dark:border-b-gray-600 bg-white dark:bg-gray-900 dark:text-gray-200">
      <div className="flex items-center space-x-3">
        <FaShoppingBag className="text-2xl" />
        <span>Hello</span>
      </div>

      <div className="flex items-center space-x-6">
        <FaQuestionCircle className="text-2xl" />
        <DarkModeToggle />
        <FaBell className="text-2xl" />

        {/* Language Dropdown */}
        <div className="relative">
          <button
            className="flex items-center"
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
          >
            <span className="mr-1 textblack">{selectedLang}</span>
            <svg
              className="w-4 h-4 ml-1 "
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {isLangDropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-700 rounded shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleLangSelect('🇬🇧', 'En')}
              >
                En
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleLangSelect('🇷🇺', 'Ru')}
              >
                Ru
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleLangSelect('🇺🇿', 'Uz')}
              >
                Uz
              </a>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center bg-pink-600 rounded-full w-8 h-8 justify-center"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            A
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-700 rounded shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Panel;
