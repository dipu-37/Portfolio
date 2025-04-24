import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header>
      <nav className="px-2 sm:px-4 py-3 border-b lg:border-none border-gray-100 dark:border-gray-800 bg-white w-full lg:w-2/3 fixed top-0 z-20">
        <div className="container flex flex-row-reverse lg:flex-row flex-wrap items-center justify-between mx-auto">
          {/* Logo or Left Icon */}
          <a href="#" className="pr-2" title="Nayan Chandra Datta">
            <FontAwesomeIcon icon={faCode} className="text-blue-600 dark:text-gray-300" size="lg" />
          </a>

          {/* Hamburger Menu for Mobile */}
          <button
            data-collapse-toggle="navbar"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 md:hidden dark:text-gray-300 dark:hover:text-gray-100"
            aria-controls="navbar"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>

          {/* Navbar Items */}
          <div className="hidden w-full md:block md:w-auto" id="navbar">
            <ul className="flex flex-col items-start lg:items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-blue-700 hover:bg-gray-100 md:hover:bg-transparent lg:hover:bg-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:hover:bg-transparent dark:hover:bg-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1pNBgtXq-kz2XEm873_nQpsNIMOuAZb2a/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
                >
                  Hire me
                </a>
              </li>
              <li>
                {/* Theme Toggle */}
                <button
                  id="theme-toggle"
                  type="button"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-lg text-sm p-2.5"
                >
                  {/* You can replace this with your own icon logic */}
                  <svg
                    id="theme-toggle-dark-icon"
                    className="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    className="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
